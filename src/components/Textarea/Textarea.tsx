import {FC} from 'react';
import { ITextarea } from './types';
import styles from './Textarea.module.scss';


const Textarea:FC<ITextarea> = (props) => {
    const {label, height, style} = props

    return (
        <div className={styles.wrapper}>
            {label && <div className={styles.label}>{label}</div>}
            <div className={styles.main}>
                <textarea {...props} style={{...style, height}}/>
            </div>
        </div>
    )
}

export default Textarea;