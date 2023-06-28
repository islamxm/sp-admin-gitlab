import Button from '../../../../components/Button/Button';
import DatePicker from '../../../../components/DatePicker/DatePicker';
import Select from '../../../../components/Select/Select';
import styles from './Settings.module.scss';
import {Row, Col} from 'antd';
import Item from './components/Item/Item';
import EmpItem from '../../../../components/EmpItem/EmpItem';
import { IDialogSettings } from './types';
import {FC, useState, useEffect} from 'react';
import IconButton from '../../../../components/IconButton/IconButton';
import {MdOutlineModeEditOutline} from 'react-icons/md';
import {BsPlusLg} from 'react-icons/bs';

const Settings:FC<IDialogSettings> = ({
    members,
    urgencys,
    seturgency_id,
    urgency_id,
    assignee_id
}) => {

    const [list, setList] = useState<any[]>([])
    const [mainEmp, setMainEmp] = useState<any>()

    useEffect(() => {
        if(members && assignee_id) {
            const find = members.find(i => i.id == assignee_id)
            if(find) {
                setMainEmp(find)
            }
        }
    }, [members, assignee_id])



    return (
        <div className={styles.wrapper}>
            <div className={styles.in}>
                <div className={styles.head}>Настройки</div>
                <div className={styles.body}>
                    <Row gutter={[20,20]}>
                        <Col span={24}>
                            <Select
                                label='Срочность'
                                options={urgencys}
                                value={urgency_id}
                                onChange={seturgency_id}
                                />
                        </Col>
                        <Col span={24}>
                            <DatePicker
                                label='Дата закрытия'
                                />
                        </Col>
                        {
                            !mainEmp ? (
                                <Col span={24}>
                                    <div className={styles.dr}>
                                        <div className={styles.dr_label}>Главный исполнитель</div>
                                        <div className={styles.card}>
                                            <div className={styles.card_body}>
                                                <div className={styles.card_name}>{mainEmp?.name}</div>
                                                <div className={styles.card_ex}>{mainEmp?.department}</div>
                                                <div className={styles.card_ex}>{mainEmp?.role}</div>
                                            </div>
                                            <div className={styles.action}>
                                                <IconButton
                                                    icon={<MdOutlineModeEditOutline/>}
                                                    size={25}
                                                    />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ) : (
                                <Col span={24}>
                                    <div className={styles.dr}>
                                        <button className={styles.card}>
                                            <div className={styles.card_body}>
                                                <div className={styles.card_name} style={{margin: 0}}>Добавить исполнителя</div>
                                            </div>
                                            <div className={styles.action}>
                                                <IconButton
                                                    variant={'violet-fill'}
                                                    icon={<BsPlusLg/>}
                                                    size={25}
                                                    />
                                            </div>
                                        </button>
                                    </div>
                                </Col>
                            )
                        }
                        
                        <Col span={24}>
                            <div className={styles.main}>
                                <div className={styles.action}>
                                    <div className={styles.count}>Участники {members?.length}</div>
                                    <Button
                                        text='Изменить'
                                        variant={'violet-simple'}
                                        />
                                </div>
                                <div className={styles.list}>
                                    {
                                        members?.map((i,index) => (
                                            <Item
                                                name={i?.name}
                                                role={i?.role}
                                                dep={i?.department}
                                                id={i?.id}
                                                />
                                        ))
                                    }
                                   
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Settings;