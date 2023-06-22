import styles from './Menu.module.scss';
import MenuItem from '../MenuItem/MenuItem';
import {FC, useEffect} from 'react';
import { ISidebarMenu } from '../../types';
import { useLocation } from 'react-router-dom';
import Button from '../../../Button/Button';
import { main_tokenDelete } from '../../../../store/slices/mainSlice';
import { useAppDispatch } from '../../../../hooks/reduxHooks';
import LOCAL_STORAGE from '../../../../utils/localStorage';
import { useNavigate } from 'react-router-dom';


const Menu:FC<ISidebarMenu> = ({list}) => {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const dispatch = useAppDispatch()
    const onLogout = () => {
        dispatch(main_tokenDelete())
        LOCAL_STORAGE.removeItem('sochipark-gitlab-token')
        navigate('/auth', {replace: true})
    }   

    return (
        <div className={styles.wrapper}>
            {list?.map((item, index) => (
                <MenuItem
                    key={index}
                    {...item}
                    isActive={(item?.link && pathname?.includes(item?.link)) ? true : false}
                    />
            ))}
            <Button
                variant={'violet-outlined'}
                text='Выход'
                onClick={onLogout}
                />
        </div>
    )
}

export default Menu;