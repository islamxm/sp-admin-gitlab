import styles from './ProjectModal.module.scss';
import {Modal, ModalFuncProps, message} from 'antd';
import {FC, useState} from 'react'
import {Row, Col} from 'antd';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import EmpItem from './components/EmpItem/EmpItem';
import { useAppSelector } from '../../hooks/reduxHooks';
import ApiService from '../../service/ApiService';


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


    const onClose = () => {
        setId('')
        setEmps([])
        onCancel && onCancel()
    }
    

    const onSave = () => {
        if(token && id) {
            setLoad(true)
            service.addProject(token, {gitlab_id: id}).then(res => {
                if(res?.error === false) {
                    onUpdate && onUpdate()
                } else {
                    message.error('Произошла ошибка!')
                }
            }).finally(() => {
                setLoad(false)
            })
        }   
    }



    return (
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
                                            text='Добавить'
                                            variant={'violet-light'}
                                            />
                                    </div>
                                </Col>
                                {/* <Col span={24}>
                                    <Row gutter={[8,8]}>
                                        <Col span={24}>
                                            <EmpItem/>
                                        </Col>
                                        <Col span={24}>
                                            <EmpItem/>
                                        </Col>
                                        
                                    </Row>
                                </Col> */}
                            </Row>
                        </div>
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
    )
}

export default ProjectModal;