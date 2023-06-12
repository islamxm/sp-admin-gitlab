import styles from './ProjectModal.module.scss';
import {Modal, ModalFuncProps} from 'antd';
import {FC} from 'react'
import {Row, Col} from 'antd';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import EmpItem from './components/EmpItem/EmpItem';

interface I {

}

const ProjectModal:FC<I & ModalFuncProps> = (props) => {

    return (
        <Modal
        {...props}
        footer={null}
        width={420}
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
                                <Col span={24}>
                                    <Row gutter={[8,8]}>
                                        <Col span={24}>
                                            <EmpItem/>
                                        </Col>
                                        <Col span={24}>
                                            <EmpItem/>
                                        </Col>
                                        
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span={24}>
                        <Row gutter={[12,12]}>
                            <Col span={12}>
                                <Button
                                    fill
                                    text='Сохранить'
                                    />
                            </Col>
                            <Col span={12}>
                                <Button
                                    fill
                                    variant={'violet-outlined'}
                                    text='Удалить'
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