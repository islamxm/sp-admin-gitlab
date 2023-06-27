import styles from './ChatItem.module.scss';



const ChatItem = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.head}>
                <span className={styles.name}>Екатерина</span>
                <span className={styles.username}></span>
            </div>
        </div>
    )
}


export default ChatItem;