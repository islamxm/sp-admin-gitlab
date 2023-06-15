import styles from './CreateStatePage.module.scss';
import Header from '../../components/Header/Header';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import {Row, Col} from 'antd';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import Button from '../../components/Button/Button';
import Textarea from '../../components/Textarea/Textarea';
import DatePicker from '../../components/DatePicker/DatePicker';

const CreateStatePage = () => {

    return (
        <div className={styles.wrapper}>
            <Header
                title='Новая заявка'
                />
            <ContentLayout>
                <div className={styles.body}>
                    <div className={styles.title}>
                    Заполните данные
                    </div>
                    <div className={styles.main}>
                        <div className={styles.form}>
                            <Row gutter={[12,25]}>
                                <Col span={24}>
                                    <Input
                                        label='Название'
                                        placeholder='Название'
                                        />
                                </Col>
                                <Col span={12}>
                                    <Select
                                        label='Раздел'
                                        />
                                </Col>
                                <Col span={12}>
                                    <Select 
                                        label='Срочность'/>
                                </Col>
                                <Col span={12}>
                                    <Select
                                        label='Какому отделу присвоить задачу?'
                                        />
                                </Col>
                                <Col span={12}>
                                    <DatePicker
                                        label="Когда выполнить задачу?"
                                        />
                                </Col>
                                <Col span={24}>
                                    <Textarea
                                        label='Описание'
                                        height={110}
                                        />
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.action}>
                            <div className={styles.action_item}>
                                <Button
                                    text='Создать заявку'
                                    />
                            </div>
                            <div className={styles.action_item}>
                                <Button
                                    text='Отмена'
                                    variant={'violet-simple'}
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            </ContentLayout>
        </div>
    )
}

export default CreateStatePage;