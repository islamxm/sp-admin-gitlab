import styles from './PageLayout.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import {FC} from 'react'
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks';

const PageLayout:FC<{children?: React.ReactNode}> = ({children}) => {
    const {pathname} = useLocation()



    return (
        <div className={styles.wrapper}>
            {
                pathname !== '/auth' &&  (
                    <div className={styles.side}>
                        <Sidebar/>
                    </div>
                )
            }
            
            <div className={styles.main}>
                {children}
            </div>
        </div>
    )
}

export default PageLayout;