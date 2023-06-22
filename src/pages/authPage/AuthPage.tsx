import styles from './AuthPage.module.scss';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import { Row, Col } from 'antd';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import LOCAL_STORAGE from '../../utils/localStorage';
import {useState} from 'react';
import ApiService from '../../service/ApiService';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { main_tokenSet, main_updateUserData } from '../../store/slices/mainSlice';
import { useNavigate } from 'react-router-dom';

const service = new ApiService()

const AuthPage = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [load, setLoad] = useState(false)

    const onLogin = () => {
        if(login && password) {
            setLoad(true)
            service.login({login, password}).then(res => {
                console.log(res)
                if(res?.token) {
                    dispatch(main_tokenSet(res?.token))
                    dispatch(main_updateUserData({
                        isAdmin: res?.is_admin,
                        name: res?.name,
                        role: res?.role
                    }))
                    LOCAL_STORAGE.setItem('sochipark-gitlab-token', res?.token)
                    LOCAL_STORAGE.setItem('sochipark-gitlab-userdata', JSON.stringify({
                        isAdmin: res?.is_admin,
                        name: res?.name,
                        role: res?.role
                    }))
                    navigate('/', {replace: true})
                }
            }).finally(() => {
                setLoad(false)
            })
        }
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.form}>
                    <Row gutter={[20,20]}>
                        <Col span={24}><h2 className={styles.title}>Авторизация</h2></Col>
                        <Col span={24}>
                            <Input
                                placeholder='Логин'
                                value={login}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)}
                                />
                        </Col>
                        <Col span={24}>
                            <Input
                                placeholder='Пароль'
                                value={password}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                />
                        </Col>
                        <Col span={24}>
                            <Button
                                text='Вход'
                                onClick={onLogin}
                                fill
                                disabled={!(login && password)}
                                />
                        </Col>
                    </Row>
                </div>
        </div>
    )
}


export default AuthPage;