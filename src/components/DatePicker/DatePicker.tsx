import styles from './DatePicker.module.scss';
import {DatePicker as AntDatePicker} from 'antd';
import {FC} from 'react';
import dayjs from 'dayjs';
import { DatePickerProps } from 'antd';
import TimePicker from './components/TimePicker/TimePicker';

const DatePicker:FC<DatePickerProps> = (props) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <AntDatePicker 
                    {...props}
                    renderExtraFooter={() => {
                        return <TimePicker/>
                    }}
                    />
            </div>
        </div>
    )
}

export default DatePicker;