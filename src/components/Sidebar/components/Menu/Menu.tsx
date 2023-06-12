import styles from './Menu.module.scss';
import MenuItem from '../MenuItem/MenuItem';
import {FC, useEffect} from 'react';
import { ISidebarMenu } from '../../types';
import { useLocation } from 'react-router-dom';
const Menu:FC<ISidebarMenu> = ({list}) => {
    const {pathname} = useLocation()


    return (
        <div className={styles.wrapper}>
            {list?.map((item, index) => (
                <MenuItem
                    key={index}
                    {...item}
                    isActive={(item?.link && pathname?.includes(item?.link)) ? true : false}
                    />
            ))}
        </div>
    )
}

export default Menu;