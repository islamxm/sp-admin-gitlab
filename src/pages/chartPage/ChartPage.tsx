import styles from './ChartPage.module.scss';
import Header from '../../components/Header/Header';
import ApiService from '../../service/ApiService';
import { useAppSelector } from '../../hooks/reduxHooks';
import { useEffect, useState } from 'react';
import { message, Col, Row } from 'antd';
import Select from '../../components/Select/Select';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import DatePicker from '../../components/DatePicker/DatePicker';
import moment from 'moment';
import * as _ from 'lodash';
import Button from '../../components/Button/Button';
import {FiUsers, FiClock} from 'react-icons/fi';


const service = new ApiService()

const colors = ['#B29DF1', '#73AFEA', '#75D09B', '#FDBC60']


const ChartPage = () => {
    const {token} = useAppSelector(s => s.mainReducer)
    const [ranges, setRanges] = useState<any[]>([])
    const [tickets, setTickets] = useState<any[]>([])

    const [projects, setProjects] = useState<any[]>([])
    const [departments, setDepartments] = useState<any[]>([])
    
    const [department_id, setdepartment_id] = useState<any>()
    const [project_id, setproject_id] = useState<any>()
    const [date_from, setdate_from] = useState<any>()
    const [date_to, setdate_to] = useState<any>()

  
    const [daysList, setDaysList] = useState<string[]>([])
    const [msMin, setMsMin] = useState<number>(0)
    const [msMax, setMsMax] = useState<number>(0)

    const getData = () => {
        if(token) {
            service.getDiagram(token, {
                department_id,
                project_id,
                date_from,
                date_to 
            }).then(res => {
                if(res?.error === false) {
                    setRanges(res?.ranges)
                    setTickets(res?.tickets)
                    const tms = res?.ranges?.map((i: any) => {
                        const obj = [i.start_date, i.end_date]
                        return obj
                    }).flat()
                    const sorted = tms?.map((i:any) => moment(i).valueOf()).sort((a: any, b: any) => a - b)
                    setDaysList(_.uniq(sorted?.map((i:any) => moment(i).format('LL'))))

                    setMsMin(sorted[0])
                    setMsMax(sorted[sorted.length - 1])
                    

                } else {
                    message.error('Данные не загрузились')
                }
            })
        }
    }

    const getCreationData = () => {
        if(token) {
            service.getCreationData(token).then(res => {
                setDepartments(res?.departments?.map((i: any) => ({value: i.id, label: i.title})))
            })
            service.getProjects(token).then(res => {
                console.log(res)
                setProjects(res?.projects?.map((i: any) => ({value: i.id, label: i.title})))
            })
        }
    }

    useEffect(() => {
        getCreationData()
    }, [token])



    useEffect(() => {
        getData()
    }, [token, department_id, project_id, date_from, date_to])


    const onClear = () => {
        setdepartment_id(undefined)
        setproject_id(undefined)
        setdate_from(undefined)
        setdate_to(undefined)

    }


    return (
        <div className={styles.wrapper}>
            <Header
                title='Диаграмма'/>
            <ContentLayout>
                <div className={styles.body}>
                    <div className={styles.filter}>
                        <Row gutter={[20,20]}>
                            <Col span={6}>
                                <Select
                                    placeholder="Не выбрано"
                                    label='Проект'
                                    options={projects}
                                    onChange={setproject_id}
                                    value={project_id}
                                    />
                            </Col>
                            <Col span={6}>
                                <Select
                                    placeholder="Не выбрано"
                                    label='Отдел'
                                    options={departments}
                                    onChange={setdepartment_id}
                                    value={department_id}
                                    />
                            </Col>
                            <Col span={6}>
                                <DatePicker
                                    placeholder="Не выбрано"
                                    label='Дата от'
                                    onChange={(e,b) => setdate_from(b)}
                                    />
                            </Col>
                            <Col span={6}>
                                <DatePicker
                                    placeholder="Не выбрано"
                                    label='До'
                                    onChange={(e, b) => setdate_to(b)}
                                    />
                            </Col>
                            <Col span={24}>
                                <Button
                                    text={'Очистить'}
                                    onClick={onClear}
                                    />    
                            </Col> 
                        </Row>
                    </div>
                    <div className={styles.main}>
                        <div className={styles.tickets}>
                            <div className={styles.tickets_head}>
                            Заявка
                            </div>
                            <div className={styles.tickets_body}>
                                {
                                    tickets?.map((i, index) => (
                                        <div className={styles.ticket}>
                                            <div className={styles.name}>
                                                {i.title}
                                            </div>
                                            <div className={styles.ex}>
                                                {i.project_title}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.pd}>
                            <div className={styles.days}>
                                {
                                    daysList?.map(i => (
                                        <div className={styles.day}>
                                            {i}
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={styles.hrs}>
                            {
                                    daysList?.map(i => (
                                        <>
                                            <div className={styles.hrs_item}>0</div>
                                            <div className={styles.hrs_item}>1</div>
                                            <div className={styles.hrs_item}>2</div>
                                            <div className={styles.hrs_item}>3</div>
                                            <div className={styles.hrs_item}>4</div>
                                            <div className={styles.hrs_item}>5</div>
                                            <div className={styles.hrs_item}>6</div>
                                            <div className={styles.hrs_item}>7</div>
                                            <div className={styles.hrs_item}>8</div>
                                            <div className={styles.hrs_item}>9</div>
                                            <div className={styles.hrs_item}>10</div>
                                            <div className={styles.hrs_item}>11</div>
                                            <div className={styles.hrs_item}>12</div>
                                            <div className={styles.hrs_item}>13</div>
                                            <div className={styles.hrs_item}>14</div>
                                            <div className={styles.hrs_item}>15</div>
                                            <div className={styles.hrs_item}>16</div>
                                            <div className={styles.hrs_item}>17</div>
                                            <div className={styles.hrs_item}>18</div>
                                            <div className={styles.hrs_item}>19</div>
                                            <div className={styles.hrs_item}>20</div>
                                            <div className={styles.hrs_item}>21</div>
                                            <div className={styles.hrs_item}>22</div>
                                            <div className={styles.hrs_item}>23</div>
                                        </>
                                    ))
                                }
                            </div>
                            {
                                tickets?.map(i => (
                                    <div className={styles.line} style={{width: daysList?.length ? daysList?.length * 1440 : 0}}>
                                        {
                                            daysList?.map(b => (
                                                <>
                                                    <div className={styles.cell}></div>
                                                    <div className={styles.cell}></div>
                                                    <div className={styles.cell}></div>
                                                    <div className={styles.cell}></div>
                                                    <div className={styles.cell}></div>
                                                    <div className={styles.cell}></div>
                                                    <div className={styles.cell}></div>
                                                    <div className={styles.cell}></div>
                                                    <div className={styles.cell}></div>
                                                    <div className={styles.cell}></div>
                                                    <div className={styles.cell}></div>
                                                    <div className={styles.cell}></div>
                                                    <div className={styles.cell}></div>
                                                    <div className={styles.cell}></div>
                                                    <div className={styles.cell}></div>
                                                    <div className={styles.cell}></div>
                                                    <div className={styles.cell}></div>
                                                    <div className={styles.cell}></div>
                                                    <div className={styles.cell}></div>
                                                    <div className={styles.cell}></div>
                                                    <div className={styles.cell}></div>
                                                    <div className={styles.cell}></div>
                                                    <div className={styles.cell}></div>
                                                    <div className={styles.cell}></div>
                                                </>
                                            ))
                                        }
                                        {/* {
                                            ranges?.filter(f => f.ticket_id == i.id).map(d => (
                                                <div className={styles.task} style={{
                                                    width: (moment(d.end_date).valueOf() / 60000) - (moment(d.start_date).valueOf() / 60000) < 60 ? 60 : (moment(d.end_date).valueOf() / 60000) - (moment(d.start_date).valueOf() / 60000),
                                                    left:  (moment(d.start_date).valueOf() / 60000) - (moment(moment(daysList[0]).format()).valueOf() / 60000),
                                                    backgroundColor: colors[_.random(0, colors.length - 1)]
                                                }}></div>
                                            ))
                                        } */}
                                        {
                                            ranges?.filter(f => f.ticket_id == i.id).map(d => (
                                                <div 
                                                    className={`${styles.task} ${Math.ceil((moment(d.end_date).valueOf() / 60000) - (moment(d.start_date).valueOf() / 60000)) <= 60 ? styles.compact : ''}`} 
                                                    style={{
                                                    width: Math.ceil((moment(d.end_date).valueOf() / 60000) - (moment(d.start_date).valueOf() / 60000)) < 60 ? 60 : Math.ceil((moment(d.end_date).valueOf() / 60000) - (moment(d.start_date).valueOf() / 60000)),
                                                    left: Math.ceil(Math.ceil((moment(d.start_date).valueOf() / 60000) - (moment(moment(daysList[0]).format()).valueOf() / 60000)) / 60) * 60,
                                                    backgroundColor: colors[_.random(0, colors.length - 1)]
                                                }}>
                                                    {
                                                        Math.ceil((moment(d.end_date).valueOf() / 60000) - (moment(d.start_date).valueOf() / 60000)) <= 60 ? (
                                                            <div className={styles.compact_in}>
                                                                <div className={styles.compact_item}>
                                                                    <span><FiUsers/></span>
                                                                    {tickets.find(v => v.id == d.ticket_id)?.member_count}
                                                                </div>
                                                                <div className={styles.compact_item}>
                                                                    <span><FiClock/></span>
                                                                    {Math.ceil(Math.ceil((moment(d.start_date).valueOf() / 60000) - (moment(moment(daysList[0]).format()).valueOf() / 60000)) / 60)}
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <>
                                                                <div className={styles.item}>
                                                                    <Button
                                                                        text={tickets.find(v => v.id == d.ticket_id)?.member_count}
                                                                        beforeicon={<FiUsers/>}
                                                                        variant={'gray'}
                                                                        />
                                                                </div>
                                                                <div className={styles.item}>
                                                                    <Button
                                                                        text={Math.ceil(Math.ceil((moment(d.start_date).valueOf() / 60000) - (moment(moment(daysList[0]).format()).valueOf() / 60000)) / 60)}
                                                                        beforeicon={<FiClock/>}
                                                                        variant={'gray'}
                                                                        />
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                    

                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </ContentLayout>
            
        </div>
    )
}

export default ChartPage;