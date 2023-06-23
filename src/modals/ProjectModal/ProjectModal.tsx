import styles from './ProjectModal.module.scss';
import {Modal, ModalFuncProps, message} from 'antd';
import {FC, useState} from 'react'
import {Row, Col} from 'antd';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { useAppSelector } from '../../hooks/reduxHooks';
import ApiService from '../../service/ApiService';
import SelectEmpModal from '../SelectEmpModal/SelectEmpModal';
import EmpItem from '../../components/EmpItem/EmpItem';
const service = new ApiService()


interface I {
    onUpdate?: (...args: any[]) => any
}

const ProjectModal:FC<I & ModalFuncProps> = (props) => {
    const {token} = useAppSelector(s => s.mainReducer)
    const {onUpdate, onCancel} = props;
    const [load, setLoad] = useState(false)
    const [id, setId] = useState('')
    const [emps, setEmps] = useState<any[]>([])

    const [selectEmpModal, setSelectEmpModal] = useState(false)


    const onClose = () => {
        setId('')
        setEmps([])
        onCancel && onCancel()
    }
    

    const onSave = () => {
        if(token && id) {
            setLoad(true)
            service.addProject(token, {gitlab_id: id, employees_id: emps?.map(i => Number(i.id))}).then(res => {
                if(res?.error === false) {
                    onUpdate && onUpdate()
                    onClose()
                } else {
                    message.error('Произошла ошибка!')
                }
            }).finally(() => {
                setLoad(false)
            })
        }   
    }

    const onDelete = (id: string) => {
        setEmps(s => {
            const m = s;
            const index = m.findIndex(i => i.id.toString() === id.toString())
            
            const rm = m.splice(index, 1)
            return [...m]
            
        })
        
    }

    const onAdd = (data: any) => {
        const find = emps.find(i => i.id == data.id)
        if(find) {

        } else {
            setEmps(s => [{id: data.id, name: data.name, role: data.role}, ...s])
        }
    }

    return (
    <>
        <SelectEmpModal
                open={selectEmpModal}
                onCancel={() => {
                    setSelectEmpModal(false)
                }}
                onSave={onAdd}
                
                />
        <Modal
        {...props}
        footer={null}
        width={420}
        onCancel={onClose}
        className={`modal ${styles.wrapper}`}
        >
            <Col span={24}>
                <Row gutter={[24,24]}>
                    <Col span={24}>
                        <h3 className='modal-title modal-title_center'>
                            Добавить новый проект
                        </h3>
                    </Col>
                    <Col span={24}>
                        <div className={styles.body}>
                            <Row gutter={[12,12]}>
                                <Col span={24}>
                                    <Input
                                        placeholder='GitLab ID'
                                        value={id}
                                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setId(e.target.value)}
                                        />
                                </Col>
                                <Col span={24}>
                                    <div className={styles.emps}>
                                        <div className={styles.emps_label}>Доступ сотрудников:</div>
                                        <Button
                                            onClick={() => setSelectEmpModal(true)}
                                            text='Добавить'
                                            variant={'violet-light'}
                                            />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span={24}>
                        <Row gutter={[8,8]}>
                            {
                                emps?.map((item,index) => (
                                    <Col span={24} key={index}>
                                        <EmpItem
                                            {...item}
                                            onDelete={onDelete}
                                            />
                                    </Col>  
                                ))
                            }
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Row gutter={[12,12]}>
                            <Col span={24}>
                                <Button
                                    onClick={onSave}
                                    disabled={!id}
                                    load={load}
                                    fill
                                    text='Сохранить'
                                    />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Modal> 
    </>
        
    )
}

export default ProjectModal;