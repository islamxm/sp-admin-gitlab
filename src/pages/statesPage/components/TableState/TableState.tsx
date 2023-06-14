import styles from './TableState.module.scss';
import {HiOutlineLink} from 'react-icons/hi';


const TableState = () => {


    return (
        <div className={styles.wrapper}>
            <div className={styles.label}>
                Интеграция <span><HiOutlineLink/></span>
            </div>
            <div className={styles.title}>
                1с комплексная автоматизация
            </div>
        </div>
    )
}


export default TableState;