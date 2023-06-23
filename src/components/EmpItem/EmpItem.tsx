import IconButton from '../IconButton/IconButton';
import styles from './EmpItem.module.scss';
import {FC} from 'react';
import {IoCloseCircleOutline} from 'react-icons/io5';

interface I {
    name?: string,
    role?: string,
    id: number | string,
    onDelete?: (...args: any[]) => any,
    onEdit?: (...args: any[]) => any
}

const EmpItem:FC<I> = ({
    name,
    role,
    id,
    onDelete,
    onEdit
}) => {


    return (
        <div className={styles.wrapper}>
            <div className={styles.action}>
                <IconButton
                    onClick={() => onDelete && onDelete(id)}
                    size={30}
                    icon={<IoCloseCircleOutline size={30}/>}
                    variant={'danger-simple'}
                    />
            </div>
            <div className={styles.body}
                onClick={() => onEdit && onEdit(id)}
                >
                <div className={styles.name}>{name ?? 'Не указано'}</div>
                <div className={styles.role}>{role ?? 'Не указано'}</div>
            </div>
        </div>
    )
}


export default EmpItem;