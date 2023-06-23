import styles from './ProjectItem.module.scss';
import Button from '../../../../components/Button/Button';
import {LuCopyCheck} from 'react-icons/lu'
import { useAppSelector } from '../../../../hooks/reduxHooks';
import IconButton from '../../../../components/IconButton/IconButton';
import {FiUsers} from 'react-icons/fi'
import {HiOutlinePlus} from 'react-icons/hi';
import { useEffect } from 'react';

const ProjectItem = ({
    id,
    members,
    tickets,
    title,
    onEmpEdit
}: {
    id: string,
    members: any[],
    tickets: string,
    title: string,
    onEmpEdit?: (...args: any[]) => any 
}) => {
    const {userData} = useAppSelector(s => s.mainReducer)

    

    return (
        <div className={styles.wrapper}>
            <div className={styles.prev}>
                {title[0]}
            </div>
            <div className={styles.body}>
                <div className={styles.title}>{title}</div>
                {
                    userData?.isAdmin === '1' && (
                        <div className={styles.admin_action}>
                            <div className={styles.members}>
                                <Button
                                    style={{padding: 0}}
                                    text={members?.length}
                                    beforeicon={<FiUsers/>}
                                    variant={'violet-simple'}
                                    />
                            </div>
                            <div className={styles.add_member}>
                                <Button
                                    onClick={() => onEmpEdit && onEmpEdit({project_id: id, members})}
                                    text='Добавить сотрудников'
                                    variant={'violet-light'}
                                    aftericon={<HiOutlinePlus/>}
                                    />
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={styles.action}>
                <div></div>
                <div className={styles.count}>
                    <Button beforeicon={<LuCopyCheck/>} text={tickets} variant={'violet-light'}/>
                </div>
            </div>
        </div>
    )
}


export default ProjectItem;