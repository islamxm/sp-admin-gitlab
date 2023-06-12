import styles from './Sidebar.module.scss';
import Menu from './components/Menu/Menu';
import menuList from './data/menuList';


const Sidebar = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.in}>
                <div className={styles.logo}></div>
                <div className={styles.menu}>
                    <Menu list={menuList}/>     
                </div>
            </div>
        </div>
    )
}


export default Sidebar;