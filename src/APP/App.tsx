import styles from './App.module.scss';
import MainWrapper from '../components/MainWrapper/MainWrapper';
import { Routes, Route } from 'react-router-dom';
import ProjectsPage from '../pages/projectsPage/ProjectsPage';
import StatesPage from '../pages/statesPage/StatesPage';
import EmpsPage from '../pages/empsPage/EmpsPage';
import ChartPage from '../pages/chartPage/ChartPage';
import CreateStatePage from '../pages/craeteStatePage/CreateStatePage';
import BlacklistPage from '../pages/blackListPage/BlacklistPage';
import DialogPage from '../pages/dialogPage/DialogPage';
import AuthPage from '../pages/authPage/AuthPage';
import { Provider } from 'react-redux';
import store from '../store/store';
import PrivateRoute from '../hoc/PrivateRoute';
const App = () => {

    return (
        <Provider store={store}>
            <MainWrapper>
                <Routes>
                    <Route path='/auth' element={<AuthPage/>}/>
                    <Route path='/' element={<PrivateRoute><ProjectsPage/></PrivateRoute>}/>
                    <Route path='/projects' element={<PrivateRoute><ProjectsPage/></PrivateRoute>}/>
                    <Route path='/states' element={<PrivateRoute><StatesPage/></PrivateRoute>}/>
                    <Route path='/states/create' element={<PrivateRoute><CreateStatePage/></PrivateRoute>}/>
                    <Route path='/states/dialog/:id' element={<PrivateRoute><DialogPage/></PrivateRoute>}/>
                    <Route path='/employees' element={<PrivateRoute><EmpsPage/></PrivateRoute>}/>
                    <Route path='/employees/blacklist' element={<PrivateRoute><BlacklistPage/></PrivateRoute>}/>
                    <Route path='/chart' element={<PrivateRoute><ChartPage/></PrivateRoute>}/>
                </Routes>
            </MainWrapper>
        </Provider>
    )
}

export default App;