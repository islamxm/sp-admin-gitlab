import styles from './BlacklistPage.module.scss';
import Header from '../../components/Header/Header';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import tableHead from '../empsPage/data/tableHead';
import { useAppSelector } from '../../hooks/reduxHooks';
import ApiService from '../../service/ApiService';
import { useEffect, useState } from 'react';

const service = new ApiService()

const BlacklistPage = () => {
    const {token} = useAppSelector(s => s.mainReducer)
    const [list, setList] = useState<any[]>([])

    const getEmps = () => {
        if(token) {
            service.getEmps(token).then(res => {
                setList(res?.employees?.filter((i: any) => i.blacklist == 1))
            })
        }
    }

    useEffect(() => {
        getEmps()
    }, [token])

    return (
        <div className={styles.wrapper}>
            <Header
                title='Черный список'
                >
                
            </Header>
            <ContentLayout>
                <div className={styles.body}>
                    <table className='table'>
                        <tr className='table-row table-headrow'>
                            {
                                tableHead?.map((item,index) => (
                                    <th className='table-head'>{item.label}</th>
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
                                        {/* <IconButton
                                            icon={<IoIosCloseCircleOutline/>}
                                            variant={'danger-simple'}
                                            /> */}
                                        -
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

export default BlacklistPage;