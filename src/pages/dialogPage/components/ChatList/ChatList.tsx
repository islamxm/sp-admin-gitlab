import styles from './ChatList.module.scss';
import {FC} from 'react';
import ChatItem from './components/ChatItem/ChatItem';
interface I {
    list?: any[],
    reps?: any[],
    members?: any[]
}

const ChatList:FC<I> = ({
    list,
    reps,
    members
}) => {

    return (
        <div className={styles.wrapper}>
            {
                list?.map((i) => (
                    <div className={styles.item}>
                        <ChatItem
                            {...i}

                            reps={reps?.filter(f => f.replied_message === i.id)}
                            members={members}
                            />
                    </div>

                ))
            }    
        </div>
    )
}

export default ChatList;