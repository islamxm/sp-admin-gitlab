import styles from './DialogPage.module.scss';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import IconButton from '../../components/IconButton/IconButton';
import {LuTrash2} from 'react-icons/lu';
import {HiOutlineLink} from 'react-icons/hi';
import ProjectHead from './components/ProjectHead/ProjectHead';
import LinkedStates from './components/LinkedStates/LinkedStates';
import ChatList from './components/ChatList/ChatList';
import Settings from './components/Settings/Settings';


const DialogPage = () => {

    return (
        <div className={styles.wrapper}>
            <Header
                title='Обсуждение'
                >
                <div className={styles.action}>
                    <div className={styles.action_item}>
                        <Button
                            beforeicon={<HiOutlineLink/>}
                            text='Создать связанную заявку'
                            variant={'violet-outlined'}
                            />
                    </div>
                    <div className={styles.action_item}>
                        <Button
                            text='Закрыть заявку'
                            />
                    </div>
                    <div className={styles.action_item}>
                        <IconButton
                            icon={<LuTrash2 color='var(--violet_1)'/>}
                            variant={'violet-fill'}
                            />
                    </div>
                </div>
            </Header>
            <ContentLayout>
                <div className={styles.body}>
                    <div className={styles.main}>
                        <div className={styles.head}><ProjectHead/></div>
                        <div className={styles.chat}>
                            <div className={styles.linked}>
                                <LinkedStates/>
                            </div>
                            <div className={styles.chatlist}>
                                <ChatList/>
                            </div>  
                        </div>
                    </div>
                    <div className={styles.side}>
                        <Settings/>
                    </div>
                </div>
            </ContentLayout>
        </div>
    )
}

export default DialogPage;