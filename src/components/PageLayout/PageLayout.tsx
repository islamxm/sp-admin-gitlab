import styles from './PageLayout.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import {FC} from 'react'

const PageLayout:FC<{children?: React.ReactNode}> = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.side}>
                <Sidebar/>
            </div>
            <div className={styles.main}>
                {children}
            </div>
        </div>
    )
}

export default PageLayout;