import styles from './BlacklistPage.module.scss';
import Header from '../../components/Header/Header';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import tableHead from '../empsPage/data/tableHead';
const BlacklistPage = () => {

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
                        <tr className='table-row'>
                            <td className='table-cell'>#1010</td>
                            <td className='table-cell bold'>Александров Виктор Денисович</td>
                            <td className='table-cell bold'>Менеджер по продажам</td>
                            <td className='table-cell bold'>Отдел продаж</td>
                            <td className='table-cell bold'>email@email.com</td>
                            <td className='table-cell bold'>1234567</td>
                            <td className='table-cell bold'>12/04/2023 12:00</td>
                            <td className='table-cell bold'></td>
                        </tr>
                    </table>
                </div>
            </ContentLayout>
        </div>
    )
}

export default BlacklistPage;