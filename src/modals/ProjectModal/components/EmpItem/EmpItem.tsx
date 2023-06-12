import styles from './EmpItem.module.scss';


const EmpItem = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.action}></div>
            <div className={styles.body}>
                <div className={styles.label}>Анна Петренко</div>
                <div className={styles.ex}>Менеджер отдела продаж</div>
            </div>
        </div>
    )
}


export default EmpItem;