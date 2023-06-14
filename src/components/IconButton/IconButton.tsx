import styles from './IconButton.module.scss';
import {FC} from 'react';
import { IIconButton, iconButtonTypes } from './types';


const switchVariant = (variant?: iconButtonTypes) => {
    switch(variant) {
        case 'danger-simple':
            return styles.danger_simple
        case 'violet-fill':
            return styles.violet_fill
        case 'violet-outline':
            return styles.violet_outline
        case 'violet-simple':
            return styles.violet_simple
    }
}

const IconButton:FC<IIconButton> = (props) => {

    const {icon, variant} = props

    return (
        <button {...props} className={`${styles.wrapper} ${switchVariant(variant)}`}>
            {icon}
        </button>
    )
}


export default IconButton;