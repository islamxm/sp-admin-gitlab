import styles from './Button.module.scss';
import {FC} from 'react'
import { IButton, buttonVariants } from './types';
import { PulseLoader } from 'react-spinners';

const switchVariant = (variant: buttonVariants) => {
    switch(variant) {
        case 'violet-fill':
            return styles.violet_fill
        case 'violet-outlined':
            return styles.violet_outlined
        case 'violet-light':
            return styles.violet_light
        case 'violet-simple':
            return styles.violet_simple
        default:
            return styles.violet_fill
    }
}


const Button:FC<IButton> = (props) => {
    const {variant = 'violet-fill', text, aftericon, beforeicon, fill, load} = props



    return (
        <button 
            {...props}
            type='button'
            className={`${styles.wrapper} ${switchVariant(variant)} ${fill ? styles.fill : ''} ${load ? styles.load : ''}`}>
            {
                load && <div className={styles.loader}>
                    <PulseLoader color='#fff'/>
                </div>
            }
            {
                beforeicon && <div className={`${styles.icon} ${styles.icon_before}`}>{beforeicon}</div>
            }

            {
                text && <div className={styles.text}>{text}</div>
            }

            {
                aftericon && <div className={`${styles.icon} ${styles.icon_after}`}>{aftericon}</div>
            }

        </button>
    )
}


export default Button;