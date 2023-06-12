import styles from './MenuItem.module.scss';
import { Link } from 'react-router-dom';
import {FC} from 'react';
import { ISidebarMenuItem } from '../../types';

const MenuItem:FC<ISidebarMenuItem> = ({
    icon,
    label,
    count,
    isActive,
    link,
    targetBlank
}) => {

    return (
        <Link className={`${styles.wrapper} ${isActive ? styles.active : ''}`} to={link ? link : '/'} target={targetBlank ? '_blank' : '_self'}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.label}>
                {label}
            </div>
            {
                count && <div className={styles.count}>{count}</div>
            }
        </Link>
    )
}   


export default MenuItem;