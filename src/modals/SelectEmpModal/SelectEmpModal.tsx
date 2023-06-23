import styles from './SelectEmpModal.module.scss';
import {Modal, ModalFuncProps, Row, Col} from 'antd'
import {FC, useEffect, useState} from 'react'
import Select from '../../components/Select/Select';
import Button from '../../components/Button/Button';
import ApiService from '../../service/ApiService';
import { useAppSelector } from '../../hooks/reduxHooks';
const service = new ApiService()


interface I {
    id?: string,
    onDelete?: (...args: any[]) => any,
    onSave?: (...args: any[]) => any
}


const SelectEmpModal:FC<I & ModalFuncProps> = (props) => {
    const {onCancel, id, onSave} = props
    const {token} = useAppSelector(s => s.mainReducer)
    const [list, setList] = useState<{value: string, label: React.ReactNode}[]>([])
    const [value, setValue] = useState<any>(null)
    const [intList, setIntList] = useState<any[]>([])

    const onClose = () => {
        setValue(null)
        onCancel && onCancel()
    }

    useEffect(() => {
        if(id && list?.length > 0) {
            setValue(list?.find(i => i.value == id)?.value)
        } else {
            setValue(null)
        }
    }, [id, list])

    useEffect(() => {
        if(token) {
            service.getEmps(token).then(res => {
                console.log(res)
                if(res?.error === false){
                    setIntList(res?.employees)
                    setList(res?.employees?.map((i:any) => ({
                        label: <div className='ddd'>
                            <div className='ddd-name'>{i.name}</div>
                            <div className='ddd-role'>{i.role}</div>
                        </div>,
                        // label: <>{i.name}<br/>{i.role}</>,
                        value: i.id
                    })))
                }
            })
        }
    }, [token])


    return (
        <Modal
            {...props}
            onCancel={onClose}
            footer={null}
            className={`${styles.wrapper} modal`}
            >
            <Row gutter={[25,25]}>
                <Col span={24}><div className='modal-title'>Выбор сотрудника</div></Col>
                <Col span={24}>
                    <Select
                        options={list}
                        value={value}
                        onChange={setValue}
                        className='select-node'
                        placeholder="Выберите сотрудника"
                        />
                </Col>
                <Col span={24}>
                    {
                        !id ? ( 
                            <Button
                                text='Сохранить'
                                fill
                                variant={'violet-fill'}
                                onClick={() => {
                                    if(value) {
                                        onSave && onSave(intList?.find(i => i.id == value))
                                        onClose()
                                    }
                                }}
                                />
                        ) : (
                            <Row gutter={[12,12]}>
                                <Col span={12}>
                                    <Button 
                                        fill
                                        onClick={() => {
                                            if(value) {
                                                onSave && onSave(intList?.find(i => i.id == value))
                                                onClose()
                                            }
                                            
                                        }}
                                        text='Сохранить'
                                        variant={'violet-fill'}
                                        />
                                </Col>
                                <Col span={12}>
                                    <Button
                                        fill
                                        text='Удалить'
                                        variant={'violet-outlined'}
                                        />
                                </Col>
                            </Row>
                        )
                    }
                    
                </Col>
            </Row>
            

        </Modal>
    )
}   

export default SelectEmpModal;