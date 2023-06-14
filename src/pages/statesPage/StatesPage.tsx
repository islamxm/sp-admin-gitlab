import styles from './StatesPage.module.scss';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import {Row, Col} from 'antd';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';


const StatesPage = () => {
    return (
        <div className={styles.wrapper}>
            <Header
                title='Заявки в поддержку'/>
            <ContentLayout>
                <div className={styles.body}>
                    <div className={styles.tabs}>
                        <div className={styles.tabs_body}>
                            <div className={`${styles.tabs_item} ${styles.active}`}>Открытые <span className={styles.badge}>9</span></div>
                            <div className={styles.tabs_item}>Закрытые</div>
                            <div className={styles.tabs_item}>Все</div>
                        </div>
                        
                    </div>
                    <div className={styles.main}>
                            <div className={styles.filter}>
                                <Row gutter={[10,10]}>
                                    <Col span={10}>
                                        <Input
                                            placeholder='Поиск...'
                                            />
                                    </Col>
                                    <Col span={5}>
                                        <Select
                                            placeholder="По сотруднику"
                                            />
                                    </Col>
                                    <Col span={6}>
                                        
                                    </Col>
                                    <Col span={24}>
                                        <Row gutter={[25,25]}>
                                            <Col span={4}>
                                                <Select
                                                    placeholder="Не выбрано"
                                                    label='Проект'
                                                    />
                                            </Col>
                                            <Col span={4}>
                                                <Select
                                                    placeholder="Не выбрано"
                                                    label='Отдел'
                                                    />
                                            </Col>
                                            
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.table}>
                                <table className='table'>
                                    <tr className='table-row table-headrow'>
                                        <td className='table-head'></td>
                                        <td className='table-head'></td>
                                        <td className='table-head'></td>
                                        <td className='table-head'></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                </div>
            </ContentLayout>
        </div>
    )
}

export default StatesPage;