import styles from './TimePicker.module.scss';
import { useState } from 'react';

const TimePicker = ({
    onSave,
    setFocus
}: {
    onSave?: (...args: any[]) => any,
    setFocus?: (...args: any[]) => any
}) => {

    const [hoursFirst, setHoursFirst] = useState(0)
    const [hoursSecond, setHoursSecond] = useState(0) 

    const [minutesFirst, setMinutesFirst] = useState(0)
    const [minutesSecond, setMinutesSecond] = useState(0)



    return (
        <div className={styles.wrapper}>
            <div className={styles.label}>Время</div>
            <div className={styles.body}>
                <div className={styles.part}>
                    <input 
                        onFocus={() => setFocus && setFocus(true)}
                        // onBlur={() => setFocus && setFocus(false)}
                        value={hoursFirst}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setHoursFirst(Number(e.target.value))}
                        type="number" />    
                    <input 
                        value={hoursSecond}
                        onFocus={() => setFocus && setFocus(true)}
                        // onBlur={() => setFocus && setFocus(false)}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setHoursSecond(Number(e.target.value))}
                        type="number" />    
                </div>    
                <span>:</span>
                <div className={styles.part}>
                    <input 
                        value={minutesFirst}
                        onFocus={() => setFocus && setFocus(true)}
                        // onBlur={() => setFocus && setFocus(false)}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setMinutesFirst(Number(e.target.value))}
                        type="number" />    
                    <input 
                        value={minutesSecond}
                        onFocus={() => setFocus && setFocus(true)}
                        // onBlur={() => setFocus && setFocus(false)}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setMinutesSecond(Number(e.target.value))}                        
                        type="number" />    
                </div>    
            </div>        
        </div>
    )
}

export default TimePicker;