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
import { useAppSelector } from '../../hooks/reduxHooks';
import ApiService from '../../service/ApiService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import {Pagination} from 'antd';
import { useDebounce } from 'usehooks-ts';




const service = new ApiService()




const StatesPage = () => {
    const queryes = useSearchParams()
    const {token} = useAppSelector(s => s.mainReducer)
    const nav = useNavigate()
    const [list, setList] = useState<any[]>([])
    const [load, setLoad] = useState(false)

    //data lists
    const [departments, setDepartments] = useState<any[]>([])
    const [projects, setProjects] = useState<any[]>()


    //filter
    const [department_id, setdepartment_id] = useState<any>(null)
    const [project_id, setproject_id] = useState<any>(null)
    const [date_from, setdate_from] = useState<any>()
    const [date_to, setdate_to] = useState<any>()
    const [search, setsearch] = useState<string>('')
    const debouncedValue = useDebounce<string>(search, 500)
    const [search_by, setsearch_by] = useState<any>()
    const [limit, setlimit] = useState(20)
    const [offset, setoffset] = useState(0)
    const [order_by, setorder_by] = useState<any>()
    const [order, setorder] = useState<any>()
    const [status, setStatus] = useState<any>('') //1 - открытые, 2 - закрытые, 3 - все

    const [total, setTotal] = useState(0)
    const [t, setT] = useState(0)


    useEffect(() => {
        if(queryes) {
            setStatus(queryes[0].get('status'))
        }
    }, [queryes])


    useEffect(() => {
        setoffset(0)
    }, [status])

    


    const getTickets = () => {
        if(token && status) {
            setLoad(true)
            service.getTickets(token, {
                department_id,
                project_id,
                date_from,
                date_to,
                search: debouncedValue,
                search_by,
                limit,
                offset,
                order_by,
                order,
                status
            }).then(res => {
                if(res?.error === false) {
                    setTotal(Math.ceil(Number(res?.total_count) / limit))
                    setT(res?.total_count)
                    setList(res?.tickets)
                } 
            }).finally(() => setLoad(false))
        }
    }


    const getCreationData = () => {
        if(token) {
            service.getCreationData(token).then(res => {
                setDepartments(res?.departments?.map((i: any) => ({label: i.title, value: i.id.toString()})))
            })
            service.getProjects(token).then(res => {
                setProjects(res?.projects?.map((i:any) => ({label: i.title, value: i.id.toString()})))
            })
        }
    }


    useEffect(() => {
        getTickets()
    }, [token, status, department_id, project_id, date_from, date_to, debouncedValue, offset, order])

    useEffect(() => {
        getCreationData()
    }, [token])


    const onResetFilter = () => {
        setsearch('')
        setsearch_by('')
        setdepartment_id(null)
        setproject_id(null)
        setdate_from(null)
        setdate_to(null)
        setorder(null)
        setorder_by(null)
    }
    


    return (
        <div className={styles.wrapper}>
            <Header
                title='Заявки в поддержку'/>
            <ContentLayout>
                <div className={styles.body}>
                    <div className={styles.tabs}>
                        <div className={styles.tabs_body}>
                            <div
                                onClick={() => nav('/states?status=1')} 
                                className={`${styles.tabs_item} ${status === '1' ? styles.active : ''}`}>Открытые 
                                {
                                    (status === '1' && t > 0) && <span className={styles.badge}>{t}</span>
                                }
                            </div>
                            <div 
                                onClick={() => nav('/states?status=2')}
                                className={`${styles.tabs_item} ${status === '2' ? styles.active : ''}`}>Закрытые
                                {
                                    (status === '2' && t > 0) && <span className={styles.badge}>{t}</span>
                                }    
                            </div>
                            <div 
                                onClick={() => nav('/states?status=0')}
                                className={`${styles.tabs_item} ${status === '0' ? styles.active : ''}`}>Все
                                {
                                    (status === '0' && t > 0) && <span className={styles.badge}>{t}</span> 
                                }
                                </div>
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
                                            value={search}
                                            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setsearch(e.target.value)}
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
                                                    value={project_id}
                                                    onChange={setproject_id}
                                                    options={projects}
                                                    />
                                            </Col>
                                            <Col span={4}>
                                                <Select
                                                    placeholder="Не выбрано"
                                                    label='Отдел'
                                                    value={department_id}
                                                    onChange={setdepartment_id}
                                                    options={departments}
                                                    />
                                            </Col>
                                            <Col span={4}>
                                                <DatePicker
                                                    label={'Дата от'}
                                                    onChange={(e, b) => {
                                                        setdate_from(b)
                                                    }}
                                                    />
                                            </Col>
                                            <Col span={4}>
                                                <DatePicker
                                                    label={'Дата до'}
                                                    onChange={(e, b) => {
                                                        setdate_to(b)
                                                    }}
                                                    />
                                            </Col>
                                            <Col span={8}>
                                                <div className={styles.reset}>
                                                    <button onClick={onResetFilter} className={styles.reset_btn}>Сбросить фильтры</button>
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
                                    {
                                        list?.map((i,index) => (
                                            <tr onClick={() => nav(`/states/dialog/${i?.id}`)} className='table-row' key={index}>
                                                <td className='table-cell'>
                                                    #{i?.id}
                                                </td>
                                                <td className='table-cell'>
                                                    {/* <TableState/> */}
                                                    {i?.description}
                                                </td>
                                                <td className='table-cell'>
                                                    {i?.project_title}
                                                </td>
                                                <td className='table-cell'>
                                                    {i?.department_title}
                                                </td>
                                                <td className='table-cell'>
                                                    <TableEmps
                                                        count={i?.member_count}
                                                        />
                                                </td>
                                                <td className='table-cell'>
                                                    <PriorityChip
                                                        title={i?.urgency_title}
                                                        color_bg={i?.urgency_back_color}
                                                        color_text={i?.urgency_text_color}
                                                        />
                                                </td>
                                                <td className='table-cell'>
                                                    <Status
                                                        title={i?.status_title}
                                                        color={i?.status_color}
                                                        />
                                                </td>
                                                <td className='table-cell'>
                                                    {/* 4,5 мин */}
                                                    {i?.avg_answer_time}
                                                </td>
                                                <td className='table-cell'>
                                                    {i?.created_date}
                                                </td>
                                                <td className='table-cell'>
                                                    <Button
                                                        beforeicon={<IoChatbubblesOutline/>}
                                                        variant={'violet-light'}
                                                        text={i?.messages_count}
                                                        />
                                                    {
                                                        i?.last_message_time && (
                                                            <span style={{marginTop: 2, textAlign: 'center'}}>{i?.last_message_time} час назад</span>
                                                        )
                                                    }
                                                    
                                                </td>
                                                
                                            </tr>
                                        ))
                                    }
                                    
                                </table>
                            </div>
                            {
                                total <= 1 ? (
                                    null
                                ) : (
                                    <div className={styles.pag}>
                                        <Pagination
                                            style={{padding: '40px 0'}}
                                            total={total}
                                            current={(offset / limit) + 1}
                                            onChange={e => {
                                                if(e == 1) {
                                                    setoffset(0)
                                                } else {
                                                    setoffset((Number(e) - 1) * limit)
                                                }
                                                
                                                
                                            }}
                                            pageSize={1}
                                            //  jump={() => setoffset((total - 1) * limit)}
                                                //  jumpToStart={() => setoffset(0)}
                                            />
                                    </div>
                                )
                            }
                            
                        </div>
                </div>
            </ContentLayout>
        </div>
    )
}

export default StatesPage;