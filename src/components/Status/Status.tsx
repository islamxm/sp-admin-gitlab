import styles from './Status.module.scss';
import {FC} from 'react';
import { IStatus } from './types';
import { statusVariants } from './types';

const switchVariant = (variant?: statusVariants) => {
    switch(variant) {
        case 'close':
            return {
                label: 'Закрыто',
                color: 'rgba(42, 42, 42, 0.5)'
            }
        case 'open':
            return {
                label: 'Открыто',
                color: 'var(--violet_1)'
            }
        default:
            return {
                label: 'Открыто',
                color: 'var(--violet_1)'
            }
    }
}

const Status:FC<IStatus> = ({variant, title, id, color}) => {

    return (
        <div style={{color}} className={styles.wrapper}>
            {/* {switchVariant(variant).label} */}
            {title}
        </div>
    )
}

export default Status;