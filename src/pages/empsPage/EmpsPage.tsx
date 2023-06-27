import styles from './EmpsPage.module.scss';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import tableHead from './data/tableHead';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import IconButton from '../../components/IconButton/IconButton';
import {IoIosCloseCircleOutline} from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import EmpModal from '../../modals/EmpModal/EmpModal';
import {useEffect, useState} from 'react';
import ApiService from '../../service/ApiService';
import { useAppSelector } from '../../hooks/reduxHooks';

const service = new ApiService()


const EmpsPage = () => {
    const {token} = useAppSelector(s => s.mainReducer)
    const nav = useNavigate()
    const [addEmpModal, setAddEmpModal] = useState(false)

    const [list, setList] = useState<any[]>([])

    const getEmps = () => {
        if(token) {
            service.getEmps(token).then(res => {
                console.log(res)
                setList(res?.employees)
            })
        }
    }
    
    useEffect(() => {
        if(token) {
            getEmps()
        }
    }, [token])

    return (
        <div className={styles.wrapper}>

            <EmpModal
                open={addEmpModal}
                onCancel={() => setAddEmpModal(false)}
                />
            <Header
                title='Сотрудники'
                >
                <div className={styles.action}>
                    <div className={styles.action_item}>
                        <button onClick={() => nav('/employees/blacklist')} className={styles.blacklist}>Черный список</button>
                    </div>
                    <div className={styles.action_item}>
                        <Button
                            variant={'violet-outlined'}
                            text='Обновить'
                            onClick={getEmps}
                            />
                    </div>
                    <div className={styles.action_item}>
                        <Button
                            onClick={() => setAddEmpModal(true)}
                            text='Добавить сотрудника'
                            />
                    </div>
                </div>
            </Header>
            <ContentLayout>
                <div className={styles.body}>
                    <table className='table'>
                        <tr className='table-row table-headrow'>
                            {
                                tableHead?.map((item,index) => (
                                    <th className='table-head' key={index}>{item.label}</th>
                                ))
                            }
                        </tr>
                        {
                            list?.map((i, index) => (
                                <tr className='table-row'>
                                    <td className='table-cell'>
                                        #{i?.id}
                                    </td>
                                    <td className='table-cell bold'>
                                        <b>{i?.name}</b>
                                    </td>
                                    <td className='table-cell bold'>
                                        <b>{i?.role}</b>
                                    </td>
                                    <td className='table-cell bold'>
                                        <b>{i?.department}</b>
                                    </td>
                                    <td className='table-cell bold'>
                                        <b>{i?.email ?? 'Не указано'}</b>
                                    </td>
                                    <td className='table-cell bold'>
                                        <b>{i?.gitlab_id}</b>
                                    </td>
                                    <td className='table-cell bold'>
                                        <b>12/04/2023 12:00</b>
                                    </td>
                                    <td className='table-cell'>
                                        <IconButton
                                            icon={<IoIosCloseCircleOutline/>}
                                            variant={'danger-simple'}
                                            />
                                    </td>
                                </tr>
                            ))
                        }
                        
                    </table>
                </div>
            </ContentLayout>
        </div>
    )
}


export default EmpsPage;