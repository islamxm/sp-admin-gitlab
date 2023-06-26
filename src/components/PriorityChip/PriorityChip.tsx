import styles from './PriorityChip.module.scss';
import { IPrChip, priorityVariants } from './types';
import {FC} from 'react';

const checkVariant = (variant?: priorityVariants) => {
    switch(variant) {
        case 'high':
            return {
                className: styles.high,
                label: 'Высокая срочность'
            }
        case 'medium':
            return {
                className: styles.medium,
                label:'Средняя срочность'
            }
        case 'low':
            return {
                className: styles.low,
                label: 'Низкая срочность'
            }
        default:
            return {
                className: styles.low,
                label: 'Низкая срочность'
            }
    }
}


const PriorityChip:FC<IPrChip> = ({variant, id, title, color_bg, color_text}) => {


    return (
        <div className={`${styles.wrapper}`} style={{backgroundColor: color_bg, color: color_text}}>
            {/* {checkVariant(variant).label} */}
            {title}
        </div>
    )
}

export default PriorityChip;