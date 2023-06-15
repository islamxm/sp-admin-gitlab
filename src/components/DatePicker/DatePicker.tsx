import styles from './DatePicker.module.scss';
import {DatePicker as AntDatePicker} from 'antd';
import {FC, useEffect, useRef, useState} from 'react';
import dayjs from 'dayjs';
import { DatePickerProps, TimePickerProps } from 'antd';
import { DatePickerType } from 'antd/es/date-picker';
import TimePicker from './components/TimePicker/TimePicker';
import Button from '../Button/Button';
import { PickerProps } from 'antd/es/date-picker/generatePicker';
import { PickerDateProps } from 'antd/es/date-picker/generatePicker';

interface I {
    label?: string
}

const DatePicker:FC<any & I> = (props) => {
    const {label} = props
    // const pickerRef = useRef<any>(null)
    
    // const [open, setOpen] = useState(false)

    // const [mainInputFocused, setMainInputFocused] = useState(false)
    // const [timInputFocused, setTimeInputFocused] = useState(false)

    // useEffect(() => {
    //     if(pickerRef?.current) {
    //         document.addEventListener('click', (e) => {
    //             const target = e.target;
    //             const its_menu = target === pickerRef?.current || pickerRef?.current?.contains(target)
    //             if(!its_menu && open) {
    //                 setOpen(false)
    //             }
    //         })
    //     }
    // }, [pickerRef, open])

    // useEffect(() => {

    //     if(!mainInputFocused && !timInputFocused) {
    //         setOpen(false)
    //     } else setOpen(true)
    // }, [mainInputFocused, timInputFocused])

    return (
        <div className={styles.wrapper}>
            {label && <div className={styles.label}>{label}</div>}
            <div className={styles.main}>
                <AntDatePicker 
                    {...props}
                    showTime
                    // open={open}
                    // onFocus={() => {
                    //     setOpen(true)
                    //     setMainInputFocused(true)
                    //     setTimeInputFocused(false)
                    // }}
                    // onBlur={() => {
                    //     // console.log('main blur')
                    //     setMainInputFocused(false)
                    //     setTimeInputFocused(false)
                    //     // setMainInputFocused(false)
                    // }}
                    // renderExtraFooter={() => {
                    //     return (
                    //         <div onMouseDown={(e) => e.stopPropagation()}>
                    //             <TimePicker setFocus={setTimeInputFocused}/>
                    //             <div className={'dp-action'}>
                    //                 <Button
                    //                     onClick={() => console.log('clicked')}
                    //                     text='Готово'
                    //                     variant={'violet-outlined'}
                    //                     />
                    //             </div>
                    //         </div>
                    //     )
                    // }}
                    />
            </div>
        </div>
    )
}

export default DatePicker;