import styles from './Item.module.scss';
import IconButton from '../../../../../../components/IconButton/IconButton';
import {IoIosCloseCircleOutline} from 'react-icons/io';

const Item = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                <div className={styles.name}>Авдеева Екатерина Андреевна</div>
                <div className={styles.ex}>
                Отдел технической поддержки
                </div>
                <div className={styles.ex}>
                Программист
                </div>
            </div>
            <div className={styles.action}>
                <IconButton
                    icon={<IoIosCloseCircleOutline/>}
                    variant={'danger-simple'}
                    />
            </div>
        </div>
    )
}

export default Item;