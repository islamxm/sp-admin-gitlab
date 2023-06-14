import styles from './EmpsPage.module.scss';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import tableHead from './data/tableHead';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import IconButton from '../../components/IconButton/IconButton';
import {IoIosCloseCircleOutline} from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import EmpModal from '../../modals/EmpModal/EmpModal';
import {useState} from 'react';


const EmpsPage = () => {
    const nav = useNavigate()
    const [addEmpModal, setAddEmpModal] = useState(false)

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
                        <tr className='table-row'>
                            <td className='table-cell'>
                                #1010
                            </td>
                            <td className='table-cell bold'>
                                <b>Александров Виктор Денисович</b>
                            </td>
                            <td className='table-cell bold'>
                                <b>Менеджер по продажам</b>
                            </td>
                            <td className='table-cell bold'>
                                <b>Отдел продаж</b>
                            </td>
                            <td className='table-cell bold'>
                                <b>email@email.com</b>
                            </td>
                            <td className='table-cell bold'>
                                <b>1234567</b>
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
                    </table>
                </div>
            </ContentLayout>
        </div>
    )
}


export default EmpsPage;