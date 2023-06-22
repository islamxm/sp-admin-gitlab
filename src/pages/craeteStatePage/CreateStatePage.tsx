import styles from './CreateStatePage.module.scss';
import Header from '../../components/Header/Header';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import {Row, Col, message} from 'antd';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import Button from '../../components/Button/Button';
import Textarea from '../../components/Textarea/Textarea';
import DatePicker from '../../components/DatePicker/DatePicker';
import { useAppSelector } from '../../hooks/reduxHooks';
import ApiService from '../../service/ApiService';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';


const service = new ApiService()

const CreateStatePage = () => { 
    const {token} = useAppSelector(s => s.mainReducer)
    const [load, setLoad] = useState(false)
    const navigate = useNavigate()

    const [departments, setDepartments] = useState<{label: string, value: string}[]>([])
    const [urgencys, setUrgencys] = useState<{label: string, value: string}[]>([])
    const [projects, setProjects] = useState<{label: string, value: string}[]>([])


    const [title, setTitle] = useState('')
    const [project_id, setproject_id] = useState('')
    const [urgency_id, seturgency_id] = useState('')
    const [department_id, setdepartment_id] = useState('')
    const [target_date, settarget_date] = useState('')
    const [description, setdescription] = useState('')


    const getData = () => {
        if(token) {
            service.getCreationData(token).then(res => {
                console.log(res)
                if(res?.error === false) {
                    setDepartments(res?.departments?.map((i:any) => ({value: i.id, label: i.title})))
                    setUrgencys(res?.urgencys?.map((i:any) => ({value: i.id, label: i.title})))
                } else {
                    message.error('Не удалось получить данные')
                }
            })
            service.getProjects(token).then(res => {
                if(res?.error === false) {
                    setProjects(res?.projects?.map((i:any) => ({value: i.id, label: i.title})))
                }
            })
        }
    }

    useEffect(() => {
        getData()
    }, [token])


    const onSave = () => {
        if(token) {
            setLoad(true)
            service.addTicket(token, {
                title,
                project_id,
                urgency_id,
                department_id,
                target_date,
                description
            }).then(res => {
                console.log(res)
                if(res?.error === false) {
                    message.success('Заявка создана')
                } else {
                    message.error('Не удалось создать заявку')
                }
            }).finally(() => setLoad(false))
        }
    }
    
    
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
                                        value={title}
                                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                                        />
                                </Col>
                                <Col span={12}>
                                    <Select
                                        label='Проект'
                                        options={projects}
                                        value={project_id}
                                        onChange={setproject_id}
                                        />
                                </Col>
                                <Col span={12}>
                                    <Select 
                                        value={urgency_id}
                                        options={urgencys}
                                        onChange={seturgency_id}
                                        label='Срочность'/>
                                </Col>
                                <Col span={12}>
                                    <Select
                                        label='Какому отделу присвоить задачу?'
                                        value={department_id}
                                        options={departments}
                                        onChange={setdepartment_id}
                                        />
                                </Col>
                                <Col span={12}>
                                    <DatePicker
                                        label="Когда выполнить задачу?"
                                        onChange={(e,b) => {
                                            settarget_date(b)
                                        }}
                                        />
                                </Col>
                                <Col span={24}>
                                    <Textarea
                                        label='Описание'
                                        height={110}
                                        value={description}
                                        onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => setdescription(e.target.value)}
                                        />
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.action}>
                            <div className={styles.action_item}>
                                <Button
                                    load={load}
                                    onClick={onSave}
                                    disabled={!(title && project_id && department_id && urgency_id && description)}
                                    text='Создать заявку'
                                    />
                            </div>
                            <div className={styles.action_item}>
                                <Button
                                    text='Отмена'
                                    variant={'violet-simple'}
                                    onClick={() => navigate(-1)}
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