import { ReactNode } from 'react';
import styles from './ContentLayout.module.scss';



const ContentLayout = ({
    children
}: {
    children?: ReactNode
}) => {

    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default ContentLayout;