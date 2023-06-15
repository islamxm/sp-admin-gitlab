import Button from '../../../../components/Button/Button';
import styles from './LinkedStates.module.scss';
import {BsPlusLg} from 'react-icons/bs';
import {useState, useRef, useEffect} from 'react';
import {HiOutlineLink} from 'react-icons/hi';
import {FiChevronDown} from 'react-icons/fi'
import IconButton from '../../../../components/IconButton/IconButton';


const LinkedStates = () => {
    const [isOpen, setIsOpen] = useState(false)
    const bodyRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if(bodyRef?.current) {
            if(isOpen) {
                setHeight(bodyRef?.current?.scrollHeight)
            } else setHeight(0)
        }
    }, [isOpen, bodyRef])


    return (
        <div className={`${styles.wrapper} ${isOpen ? styles.open : ''}`}>
            <div className={styles.head}>
                <div className={styles.label}>
                    <div  className={styles.title}>
                    Связанные заявки <span>3</span>
                    </div>
                    <div className={styles.icon}>
                        <IconButton
                            onClick={() => setIsOpen(s => !s)}
                            icon={<FiChevronDown/>}
                            />
                    </div>
                </div>
                <div className={styles.action}>
                    <Button
                        text='Добавить'
                        variant={'violet-simple'}
                        beforeIcon={<BsPlusLg/>}
                        />
                </div>
            </div>
            <div className={styles.body} ref={bodyRef} style={{height}}>
                <div className={styles.in}>
                    <div className={styles.item}>
                        <Button
                            beforeIcon={<HiOutlineLink/>}
                            variant={'violet-simple'}
                            text='Электронный документооборот'
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinkedStates;