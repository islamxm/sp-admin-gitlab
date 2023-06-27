import styles from './ChatItem.module.scss';
import {FC, useEffect} from 'react';
import dialogActiveTypes from '../../../../../../utils/dialogActiveTypes';
import PriorityChip from '../../../../../../components/PriorityChip/PriorityChip';
import moment from 'moment';



interface I {
    action_type: '1' | '2' | '3' | '4' | '5',
    date: string,
    employee_id: string,
    id: string,
    message?: string,
    replied_message: string,
    urgency_back_color?: string,
    urgency_text_color?: string,
    urgency_title?: string
    
    reps?: any[],
    members?: any[]
}




const ChatItem:FC<I> = ({
    action_type,
    date,
    employee_id,
    id,
    message,
    replied_message,
    urgency_back_color,
    urgency_text_color,
    urgency_title,
    
    reps,
    members
}) => {

    if(action_type === dialogActiveTypes.startWorking) {
        return (    
            <div className={styles.wrapper}>
                <div className={styles.badge}>
                    <span className={styles.username}>{members?.find(i => i.id == employee_id)?.name}</span>
                    <span className={styles.ex}>
                        &nbsp;начал(а) работать над задачей&nbsp;
                    </span>
                    <span className={styles.ex}> • {moment(date).fromNow()}</span>
                </div>
            </div>
        )
    }

    if(action_type === dialogActiveTypes.stopWorking) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.badge}>
                    <span className={styles.username}>{members?.find(i => i.id == employee_id)?.name}</span>
                    <span className={styles.ex}>
                        &nbsp;завершил(а) работать над задачей&nbsp;
                    </span>
                    <span className={styles.ex}> • {moment(date).fromNow()}</span>
                </div>
            </div>
        )
    }

    if(action_type === dialogActiveTypes.changeUrgency) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.badge}>
                    <span className={styles.username}>{members?.find(i => i.id == employee_id)?.name}</span>
                    <span className={styles.ex}>
                        &nbsp;добавил(а) статус&nbsp;
                    </span>
                    <div style={{display: 'inline-block', margin:'0 5px'}}>
                    <PriorityChip color_bg={urgency_back_color} color_text={urgency_text_color} title={urgency_title}/>
                    </div>
                    <span className={styles.ex}> • {moment(date).fromNow()}</span>
                </div>
            </div>
        )
    }
    

    if(action_type === dialogActiveTypes.message) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.head}>
                    <span className={styles.username}>{members?.find(i => i.id == employee_id)?.name}</span>
                    <span className={styles.ex}> • {moment(date).fromNow()}</span>
                    <div className={styles.message}>{message}</div>
                </div>
                {
                    (reps && reps?.length > 0) && (
                        <>
                            <div className={styles.reps}>
                                Ответы {reps?.length}
                            </div>
                            <div className={styles.reps_body}>
                                <div className={styles.reps_body_in}>

                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        )
    }

    if(action_type === dialogActiveTypes.changeAssignee) {
        return (
            <div className={styles.wrapper}>
            <div className={styles.badge}>
                <span className={styles.username}>{members?.find(i => i.id == employee_id)?.name}</span>
                <span className={styles.ex}>
                    &nbsp;присвоил(а) задачу сотруднику&nbsp;
                </span>
                <span className={styles.username}>{members?.find(i => i.id == message)?.name}</span>
                <span className={styles.ex}> • {moment(date).fromNow()}</span>
            </div>
        </div>
        )
    }

    return null
}


export default ChatItem;