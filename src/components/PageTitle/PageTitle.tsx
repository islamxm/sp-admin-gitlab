import styles from './PageTitle.module.scss';
import {FC} from 'react';
import { IPageTitle } from './types';

const PageTitle:FC<IPageTitle> = ({
    title   
}) => {

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{title}</h2>
        </div>
    )
}

export default PageTitle;