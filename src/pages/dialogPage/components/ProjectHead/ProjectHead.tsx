import styles from './ProjectHead.module.scss';


const ProjectHead = ({
    title,
    descr
}: {
    title: string,
    descr?: string
}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{title}</div>
            <div className={styles.descr}>{descr}</div>
        </div>
    )
}


export default ProjectHead;