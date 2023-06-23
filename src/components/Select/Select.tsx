import { ISelect } from "./types"; 
import {Select as AntSelect} from 'antd';
import styles from './Select.module.scss'
import {FC} from 'react';

const Select:FC<ISelect> = (props) => {
    const {label, fill} = props

    return (
        <div className={`${styles.wrapper} ${fill ? styles.fill : ''}`}>
            {label && <div className={styles.label}>{label}</div>}
            <div className={styles.body}>
                <AntSelect
                    {...props}
                    
                    />
            </div>
        </div>
    )
}

export default Select;