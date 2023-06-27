import styles from './EmpModal.module.scss';
import { Modal, ModalFuncProps, Row, Col } from 'antd';
import {FC} from 'react'
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
interface I extends ModalFuncProps {
    onUpdate?: (...args: any[]) => any
}


const EmpModal:FC<I> = (props) => {
    


    return (
        <Modal
            {...props}
            className={`${styles.wrapper} modal`}
            width={420}
            footer={null}
            >
            <Row gutter={[40,40]}>
                <Col span={24}>
                    <Row gutter={[15,15]}>
                        <Col span={24}>
                        <div className="modal-title modal-title_center">Добавить сотрудника</div>
                        </Col>
                        <Col span={24}>
                            <Input
                                label='ФИО'
                                placeholder='ФИО'
                                />
                        </Col>
                        <Col span={24}>
                            <Input
                                label='Должность'
                                placeholder='Должность'
                                />
                        </Col>
                        <Col span={24}>
                            <Input
                                label='Отдел'
                                placeholder='Отдел'
                                />
                        </Col>
                        <Col span={24}>
                            <Input
                                label='Электронная почта'
                                placeholder='Электронная почта'
                                />
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <div className={styles.action}>
                        <div className={styles.action_item}>
                            <Button
                                text='Сохранить'
                                />
                        </div>
                        <div className={styles.action_item}>
                            <Button
                                text='Удалить'
                                variant={'violet-outlined'}
                                />
                        </div>
                    </div>
                </Col>
            </Row>
        </Modal>
    )
}


export default EmpModal;