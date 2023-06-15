import styles from './ProjectHead.module.scss';


const ProjectHead = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Название проекта</div>
            <div className={styles.descr}>Краткое описание...</div>
        </div>
    )
}


export default ProjectHead;