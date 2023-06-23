import styles from './ProjectEmpModal.module.scss';
import {Modal, ModalFuncProps, Row, Col} from 'antd'
import {FC, useEffect, useState} from 'react';
import SelectEmpModal from '../SelectEmpModal/SelectEmpModal';
import Button from '../../components/Button/Button';
import ApiService from '../../service/ApiService';
import { useAppSelector } from '../../hooks/reduxHooks';
import EmpItem from '../../components/EmpItem/EmpItem';


const service = new ApiService()

interface I extends ModalFuncProps {
    data?: any,
    onUpdate?: (...args: any) => any
}


const ProjectEmpModal:FC<I> = (props) => {
    const {token} = useAppSelector(s => s.mainReducer)
    const {onCancel, data, onUpdate} = props
    const [selectEmpModal, setSelectEmpModal] = useState(false)
    const [load, setLoad] = useState(false)
    const [selectedId, setSelectedId] = useState<any>(null)

    const [empList, setEmpList] = useState<any[]>([])
    const [project_id, setproject_id] = useState<any>()



    useEffect(() => {
        if(data) {
            setEmpList([...data?.members])
            setproject_id(data?.project_id)
        } else {
            setEmpList([])
            setproject_id(null)
        }
    }, [data])


    



   

    const onClose = () => {
        onCancel && onCancel()
    }

    const onSave = () => {
        if(token && project_id) {
            setLoad(true)
            service.editProjectEmps(token, {
                project_id,
                employees_id: empList?.map(i => Number(i.id))
            }).then(res => {
                console.log(res)
                onUpdate && onUpdate()
            }).finally(() => {
                setLoad(false)
                onClose()
            })
        }
    }

    const onDelete = (id: string) => {
        setEmpList(s => {
            const m = s;
            const index = m.findIndex(i => i.id.toString() === id.toString())
            
            const rm = m.splice(index, 1)
            return [...m]
            
        })
        
    }

    const onEdit = (id: any) => {
        setSelectedId(id)
        setSelectEmpModal(true)
    }

    const onAdd = (data: any) => {
        const find = empList.find(i => i.id == data.id)
        if(find) {

        } else {
            setEmpList(s => [{id: data.id, name: data.name, role: data.role}, ...s])
        }
    }


    return (
        <>
            <SelectEmpModal
                // id={selectedId}
                open={selectEmpModal}
                onCancel={() => {
                    setSelectedId(null)
                    setSelectEmpModal(false)
                }}
                onSave={onAdd}
                
                />

            <Modal
                {...props}
                footer={null}
                onCancel={onClose}
                className={`${styles.wrapper} modal`}
                >
                <Row gutter={[25,25]}>
                    <Col span={24}>
                    <div className='modal-title'>Добавить сотрудников</div>
                    </Col>
                    <Col span={24}>
                        <div className={styles.add}>
                            <div className={styles.label}>
                            Доступ сотрудников:
                            </div>
                            <Button
                                // onClick={() => setSelectEmpModal(true)}
                                text='Добавить'
                                onClick={() => setSelectEmpModal(true)}
                                variant={'violet-light'}
                                />
                        </div>
                    </Col>
                    <Col span={24}>
                        <Row gutter={[8,8]}>
                            {
                                empList?.map((item,index) => (
                                    <Col span={24} key={index}>
                                        <EmpItem
                                            {...item}
                                            // onEdit={onEdit}
                                            onDelete={onDelete}
                                            />
                                    </Col>  
                                ))
                            }
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Row gutter={[12,12]}>
                            <Col span={12}>
                                <Button
                                    load={load}
                                    onClick={onSave}
                                    text={'Сохранить'}
                                    fill
                                    />
                            </Col>
                            <Col span={12}>
                                <Button
                                    onClick={onClose}
                                    text={'Отмена'}
                                    variant={'violet-outlined'}
                                    fill
                                    />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
            </Modal>

           
        </>
        
       
    )
}

export default ProjectEmpModal;