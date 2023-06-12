import styles from './Header.module.scss';
import PageTitle from '../PageTitle/PageTitle';


const Header = ({
    children,
    title
}: {
    children?: React.ReactNode,
    title?: string
}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.in}>
                <PageTitle title={title}/>
                {children}
            </div>
        </div>
    )
}


export default Header;