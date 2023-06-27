import styles from './Item.module.scss';
import IconButton from '../../../../../../components/IconButton/IconButton';
import {IoIosCloseCircleOutline} from 'react-icons/io';
import { FC } from 'react';


interface I {
    id?: string | number,
    name?: string,
    role?: string,
    dep?:string
}
const Item:FC<I> = ({
    id,
    name,
    role,
    dep
}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                <div className={styles.name}>{name}</div>
                <div className={styles.ex}>
                {dep}
                </div>
                <div className={styles.ex}>
                {role}
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