import Button from '../../../../components/Button/Button';
import DatePicker from '../../../../components/DatePicker/DatePicker';
import Select from '../../../../components/Select/Select';
import styles from './Settings.module.scss';
import {Row, Col} from 'antd';
import Item from './components/Item/Item';


const Settings = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.in}>
                <div className={styles.head}>Настройки</div>
                <div className={styles.body}>
                    <Row gutter={[20,20]}>
                        <Col span={24}>
                            <Select
                                label='Срочность'
                                />
                        </Col>
                        <Col span={24}>
                            <DatePicker
                                label='Дата закрытия'
                                />
                        </Col>
                        <Col span={24}>
                            <div className={styles.main}>
                                <div className={styles.action}>
                                    <div className={styles.count}>Участники 13 </div>
                                    <Button
                                        text='Добавить'
                                        variant={'violet-simple'}
                                        />
                                </div>
                                <div className={styles.list}>
                                    <Item/>
                                    <Item/>
                                    <Item/>
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