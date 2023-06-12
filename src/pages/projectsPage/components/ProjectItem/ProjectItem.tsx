import styles from './ProjectItem.module.scss';
import Button from '../../../../components/Button/Button';
import {LuCopyCheck} from 'react-icons/lu'

const ProjectItem = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.prev}>
                A
            </div>
            <div className={styles.body}>Электронный документооборот</div>
            <div className={styles.action}>
                <div className={styles.new}>+5 заявок</div>
                <div className={styles.count}>
                    <Button beforeIcon={<LuCopyCheck/>} text='12' variant={'violet-light'}/>
                </div>
            </div>
        </div>
    )
}


export default ProjectItem;