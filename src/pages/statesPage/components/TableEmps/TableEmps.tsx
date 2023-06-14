import styles from './TableEmps.module.scss';
import {FiUsers} from 'react-icons/fi';

const TableEmps = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.count}>
                <div className={styles.icon}><FiUsers/></div>
                <div className={styles.value}>3</div>
            </div>
            <div className={styles.name}>Петренко Александр</div>
        </div>
    )
}

export default TableEmps;