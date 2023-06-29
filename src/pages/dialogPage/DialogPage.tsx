import styles from './DialogPage.module.scss';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import IconButton from '../../components/IconButton/IconButton';
import {LuTrash2} from 'react-icons/lu';
import {HiOutlineLink} from 'react-icons/hi';
import ProjectHead from './components/ProjectHead/ProjectHead';
import LinkedStates from './components/LinkedStates/LinkedStates';
import ChatList from './components/ChatList/ChatList';
import Settings from './components/Settings/Settings';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ApiService from '../../service/ApiService';
import { useAppSelector } from '../../hooks/reduxHooks';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import {FiArrowUp} from 'react-icons/fi';
import dialogActiveTypes from '../../utils/dialogActiveTypes';

const service = new ApiService()

const DialogPage = () => {
    const nav = useNavigate()
    const params = useParams()
    const {token} = useAppSelector(s => s.mainReducer)
    const [id, setId] = useState<any>(null)

    //helpers
    const [closeLoad, setCloseLoad] = useState(false)
    const [ticketEndLoad, setTicketEndLoad] = useState(false)
    const [sendMessageLoad, setSendMessageLoad] = useState(false)

    //data
    const [urgencys, seturgencys] = useState<any[]>([])

    //main
    const [title, settitle] = useState('')
    const [descr, setdescr] = useState('')
    const [activities, setActivities] = useState<any[]>([])
    const [reps, setReps] = useState<any[]>([])
    const [text, setText] = useState<string>('')
    const [members, setMembers] = useState<any[]>([])
    const [urgency_id, seturgency_id] = useState<any>(null)
    const [links, setLinks] = useState<any[]>([])
    const [assignee_id, setassignee_id] = useState<any>()



    useEffect(() => {
        if(params?.id) {
            setId(params?.id)
        }
    }, [params])
    

    const getTicket = () => {
        if(id && token)  {
            service.getTicket(token, id).then(res => {
                console.log(res)
                
                settitle(res?.title)
                setdescr(res?.description)
                setMembers(res?.members)
                setassignee_id(res?.assignee_id)
                setLinks(res?.links)
                const parents:any[] = res?.activities?.filter((i:any) => i.replied_message === '0')
                setActivities(parents)
                setReps(res?.activities?.filter((i:any) => i.replied_message !== '0'))
            })
        }
    }

    const getCreationData = () => {
        if(token) {
            service.getCreationData(token).then(res => {
                seturgencys(res?.urgencys?.map((i: any) => ({label: i?.title, value: i?.id})))
            })
        }
    }

    useEffect(() => {
        getCreationData()
    }, [token])

    useEffect(() => {
        getTicket()
    }, [token,id])


    const closeTicket = () => {
        if(id && token) {
            setCloseLoad(true)
            service.closeTicket(token, id).then(res => {
                if(res?.error === false) {
                    message.success('Заявка закрыта')
                    nav('/states?status=0', {replace: true})
                } else {
                    message.error('Произошла ошибка')
                }
            }).finally(() => {
                setCloseLoad(false)
            })
        }
    }


    const onSendMessage = () => {
        if(token && text && id) {
            setSendMessageLoad(true)
            service.sendMessage(token, {
                ticket_id: id,
                message: text
            }).then(res => {
                console.log(res)
                if(res?.error === false) {
                    getTicket()
                    setText('')
                } else {
                    message.error('Произошла ошибка')
                }
            }).finally(() => {
                setSendMessageLoad(false)
                
            })
        }
    }


    const onEndTicket = () => {
        if(token && id) {
            setTicketEndLoad(true)
            service.setWorkStatus(token, {
                ticket_id: id,
                work_status: '2'
            }).then(res => {
                if(res?.error === false) {
                    message.success('Выполнение заявки завершена')
                    nav('/states?status=0')
                } else {
                    message.error('Произошла ошибка')
                }
            }).finally(() => {
                setTicketEndLoad(false)
            })
        }
    }


    return (
        <div className={styles.wrapper}>
            <Header
                title='Обсуждение'
                >
                <div className={styles.action}>
                    <div className={styles.action_item}>
                        <Button
                            beforeicon={<HiOutlineLink/>}
                            text='Создать связанную заявку'
                            variant={'violet-outlined'}
                            />
                    </div>
                    <div className={styles.action_item}>
                        <Button
                            text='Закрыть заявку'
                            disabled={!id}
                            load={closeLoad}
                            onClick={closeTicket}
                            />
                    </div>
                    <div className={styles.action_item}>
                        <IconButton
                            icon={<LuTrash2 color='var(--violet_1)'/>}
                            variant={'violet-fill'}
                            />
                    </div>
                </div>
            </Header>
            <ContentLayout style={{paddingBottom: 0}}>
                <div className={styles.body}>
                    <div className={styles.ff}>
                        <div className={styles.main}>
                            <div className={styles.head}><ProjectHead title={title} descr={descr} /></div>
                            <div className={styles.chat}>
                                {
                                    links?.length > 0 && (
                                        <div className={styles.linked}>
                                            <LinkedStates
                                                list={links}
                                                />
                                        </div>
                                    )
                                }
                                <div className={styles.chatlist}>
                                    <ChatList
                                        members={members}
                                        list={activities}
                                        reps={reps}
                                        />
                                </div>  
                            </div>
                            
                        </div>
                        <div className={styles.action}>
                                <div className={styles.action_main}>
                                    <div className={styles.input}>
                                        <input 
                                            placeholder='Cообщение'
                                            value={text}
                                            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                                            type="text" />
                                    </div>
                                    <div className={styles.send}>
                                        <IconButton
                                            onClick={onSendMessage}
                                            disabled={!(text && id)}
                                            variant={'violet-fill'}
                                            icon={<FiArrowUp/>}
                                            size={40}
                                            />
                                    </div>
                                </div>
                                <div className={styles.close}>
                                    <Button
                                        onClick={onEndTicket}
                                        load={ticketEndLoad}
                                        text={'Завершить выполнение'}
                                        variant={'violet-simple'}
                                        />
                                </div>
                            </div>
                    </div>
                    
                    <div className={styles.side}>
                        <Settings
                            assignee_id={assignee_id}
                            members={members}
                            urgencys={urgencys}
                            urgency_id={urgency_id}
                            seturgency_id={seturgency_id}
                            />
                    </div>
                </div>
            </ContentLayout>
        </div>
    )
}

export default DialogPage;