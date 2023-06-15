import styles from './LinkedStateModal.module.scss';
import { Modal, ModalFuncProps, Row, Col } from 'antd';
import {FC} from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {HiOutlineLink} from 'react-icons/hi';
interface I {

}

const LinkedStateModal:FC<ModalFuncProps & I> = (props) => {

    return (
        <Modal
            {...props}
            footer={null}
            centered
            width={765}
            className={`${styles.wrapper} modal`}
            >
            <Row gutter={[15,15]}>
                <Col span={24}>
                    <div className='modal-title'>Связанная заявка </div>
                </Col>
                <Col span={24}>
                    <Input
                        placeholder='Поиск...'
                        />
                </Col>
                <Col span={24}>
                    <div className={styles.action}>
                        <Button
                            text='Добавить заявку'
                            variant={'violet-outlined'}
                            beforeIcon={<HiOutlineLink/>}
                            />
                    </div>
                </Col>
            </Row>
        </Modal>
    )
}

export default LinkedStateModal;