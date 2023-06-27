import styles from './ChartPage.module.scss';
import Header from '../../components/Header/Header';
import ApiService from '../../service/ApiService';
import { useAppSelector } from '../../hooks/reduxHooks';
import { useEffect } from 'react';


const service = new ApiService()


const ChartPage = () => {
    const {token} = useAppSelector(s => s.mainReducer)

    const getData = () => {
        if(token) {

        }
    }

    useEffect(() => {
        getData()
    }, [token])

    return (
        <div className={styles.wrapper}>
            <Header
                title='Диаграмма'
                >

            </Header>
            <div className={styles.body}>
                <div className={styles.filter}>

                </div>
                <div className={styles.main}>
                    
                </div>
            </div>
        </div>
    )
}

export default ChartPage;