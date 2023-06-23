import styles from './StatesPage.module.scss';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import {Row, Col} from 'antd';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import tableHead from './data/tableHead';
import {IoChatbubblesOutline} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import Status from '../../components/Status/Status';
import PriorityChip from '../../components/PriorityChip/PriorityChip';
import TableState from './components/TableState/TableState';
import TableEmps from './components/TableEmps/TableEmps';
import DatePicker from '../../components/DatePicker/DatePicker';

const StatesPage = () => {
    const nav = useNavigate()

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
                        <div className={styles.action}>
                            <div className={styles.action_item}>
                                <Button
                                    text='Сформировать отчет'
                                    variant={'violet-outlined'}
                                    />
                            </div>
                            <div className={styles.action_item}>
                                <Button
                                    onClick={() => nav('/states/create')}
                                    text='Оставить заявку'
                                    />
                            </div>
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
                                            <Col span={4}>
                                                <DatePicker
                                                    label={'Дата от'}
                                                    />
                                            </Col>
                                            <Col span={4}>
                                                <DatePicker
                                                    label={'Дата до'}
                                                    />
                                            </Col>
                                            <Col span={8}>
                                                <div className={styles.reset}>
                                                    <button className={styles.reset_btn}>Сбросить фильтры</button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.table}>
                                <table className='table'>
                                    <tr className='table-row table-headrow'>
                                        {
                                            tableHead?.map((item,index) => (
                                                <th className='table-head' key={index}>{item.label}</th>
                                            ))
                                        }
                                        <th className='table-head'></th>
                                    </tr>
                                    <tr className='table-row'>
                                        <td className='table-cell'>
                                            #10000
                                        </td>
                                        <td className='table-cell'>
                                            <TableState/>
                                        </td>
                                        <td className='table-cell'>
                                            Электронный документооборот
                                        </td>
                                        <td className='table-cell'>
                                            Бухгалтерия
                                        </td>
                                        <td className='table-cell'>
                                            <TableEmps/>
                                        </td>
                                        <td className='table-cell'>
                                            <PriorityChip variant='low'/>
                                        </td>
                                        <td className='table-cell'>
                                            <Status variant='open'/>
                                        </td>
                                        <td className='table-cell'>
                                            4,5 мин
                                        </td>
                                        <td className='table-cell'>
                                            -
                                        </td>
                                        <td className='table-cell'>
                                            <Button
                                                beforeicon={<IoChatbubblesOutline/>}
                                                variant={'violet-light'}
                                                text='12'
                                                />
                                            <span style={{marginTop: 2, textAlign: 'center'}}>1 час назад</span>
                                        </td>
                                        
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