import styles from './App.module.scss';
import MainWrapper from '../components/MainWrapper/MainWrapper';
import { Routes, Route } from 'react-router-dom';
import ProjectsPage from '../pages/projectsPage/ProjectsPage';
import StatesPage from '../pages/statesPage/StatesPage';
import EmpsPage from '../pages/empsPage/EmpsPage';
import ChartPage from '../pages/chartPage/ChartPage';



const App = () => {

    return (
        <>
            <MainWrapper>
                <Routes>
                    <Route path='/' element={<ProjectsPage/>}/>
                    <Route path='/projects' element={<ProjectsPage/>}/>
                    <Route path='/states' element={<StatesPage/>}/>
                    <Route path='/employees' element={<EmpsPage/>}/>
                    <Route path='/chart' element={<ChartPage/>}/>
                </Routes>
            </MainWrapper>
        </>
    )
}

export default App;