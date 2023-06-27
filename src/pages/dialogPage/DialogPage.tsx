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

const service = new ApiService()

const DialogPage = () => {
    const nav = useNavigate()
    const params = useParams()
    const {token} = useAppSelector(s => s.mainReducer)
    const [id, setId] = useState<any>(null)

    //helpers
    const [closeLoad, setCloseLoad] = useState(false)

    //data
    const [urgencys, seturgencys] = useState<any[]>([])

    //main
    const [activities, setActivities] = useState<any[]>([])
    const [text, setText] = useState<string>('')
    const [members, setMembers] = useState<any[]>([])
    const [urgency_id, seturgency_id] = useState<any>(null)
    const [links, setLinks] = useState<any[]>([])




    useEffect(() => {
        if(params?.id) {
            setId(params?.id)
        }
    }, [params])
    

    const getTicket = () => {
        if(id && token)  {
            service.getTicket(token, id).then(res => {
                console.log(res)
                setMembers(res?.members)
                setLinks(res?.links)
                setActivities(res?.activities)
            })
        }
    }

    const getCreationData = () => {
        if(token) {
            service.getCreationData(token).then(res => {
                console.log(res)
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
                console.log(res)
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
            <ContentLayout>
                <div className={styles.body}>
                    <div className={styles.main}>
                        <div className={styles.head}><ProjectHead/></div>
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
                                <ChatList/>
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
                                        disabled={!(text && id)}
                                        variant={'violet-fill'}
                                        icon={<FiArrowUp/>}
                                        size={40}
                                        />
                                </div>
                            </div>
                            <div className={styles.close}>
                                <Button
                                    text={'Завершить выполнение'}
                                    variant={'violet-simple'}
                                    />
                            </div>
                        </div>
                    </div>
                    <div className={styles.side}>
                        <Settings
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