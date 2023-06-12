import styles from './Input.module.scss';
import {FC} from 'react'
import { IInput } from './types';

const Input:FC<IInput> = (props) => {
    const {
        label
    } = props


    return (
        <div className={styles.wrapper}>
            {
                label && <div className={styles.label}>{label}</div>
            }
            <input {...props} className={styles.input}/>
        </div>
    )
}

export default Input;