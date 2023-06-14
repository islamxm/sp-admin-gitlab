import styles from './Input.module.scss';
import {FC} from 'react'
import { IInput } from './types';

const Input:FC<IInput> = (props) => {
    const {
        label,
        beforeIcon
    } = props


    return (
        <div className={`${styles.wrapper} ${beforeIcon ? styles.beforeIcon : ''}`}>
            {
                label && <div className={styles.label}>{label}</div>
            }
            <div className={styles.main}>
                {
                    beforeIcon && <div className={styles.before}>{beforeIcon}</div>
                }
                <input {...props} className={styles.input}/>
            </div>
            
        </div>
    )
}

export default Input;