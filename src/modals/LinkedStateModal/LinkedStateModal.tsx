import styles from './LinkedStateModal.module.scss';
import { Modal, ModalFuncProps, Row, Col } from 'antd';
import {FC, useEffect, useState} from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {HiOutlineLink} from 'react-icons/hi';
import ApiService from '../../service/ApiService';
import { useAppSelector } from '../../hooks/reduxHooks';
import Select from '../../components/Select/Select';
const service = new ApiService()

interface I {

}

const LinkedStateModal:FC<ModalFuncProps & I> = (props) => {
    const {token} = useAppSelector(s => s.mainReducer)
    const [list, setList] = useState<{label: string, value: string}[]>([])
    const [id, setId] = useState<string | null>(null)

    const getTickets = () => {
        service.getTickets(token, {}).then(res => {
            console.log(res)
            setList(res?.tickets?.map((i: any) => ({label: i?.title, value: i?.id.toString()})))
        })
    }

    useEffect(() => {
        getTickets()
    }, [token])

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
                    <Select
                        showSearch
                        filterOption={(input, option) => {
                                if(option?.label && option.label.toString().toLowerCase().includes(input.toLowerCase())) {
                                    return true
                                } else {
                                    return false
                                }
                            }
                        }
                        value={id}
                        options={list}
                        onChange={setId}
                        placeholder='Поиск...'
                        />
                </Col>
                <Col span={24}>
                    <div className={styles.action}>
                        <Button
                            text='Добавить заявку'
                            variant={'violet-outlined'}
                            beforeicon={<HiOutlineLink/>}
                            />
                    </div>
                </Col>
            </Row>
        </Modal>
    )
}

export default LinkedStateModal;