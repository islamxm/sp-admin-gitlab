import { CSSProperties, ReactNode } from 'react';
import styles from './ContentLayout.module.scss';



const ContentLayout = ({
    children,
    style
}: {
    children?: ReactNode,
    style?: CSSProperties
}) => {

    return (
        <div className={styles.wrapper} style={style}>
            {children}
        </div>
    )
}

export default ContentLayout;