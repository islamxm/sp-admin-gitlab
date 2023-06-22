import styles from './ProjectsPage.module.scss';
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import ProjectItem from './components/ProjectItem/ProjectItem';
import {Row, Col} from 'antd';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import ProjectModal from '../../modals/ProjectModal/ProjectModal';
import {useEffect, useState} from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import ApiService from '../../service/ApiService';


const service = new ApiService()


const ProjectsPage = () => {
    const {token, userData} = useAppSelector(s => s.mainReducer)
    const [addProjectModal, setAddProjectModal] = useState(false)
    const [list, setList] = useState<any[]>([])

    const getProjects = () => {
        if(token) {
            service.getProjects(token).then(res => {
                console.log(res)
                if(res?.error === false) {
                    setList(res?.projects)
                }
            })
        }
    }


    useEffect(() => {
        getProjects()
    }, [token])



    return (
        <div className={styles.wrapper}>

            <ProjectModal
                onUpdate={getProjects}
                open={addProjectModal}
                onCancel={() => setAddProjectModal(false)}
                />


            <Header title="Проекты">
                {
                    userData?.isAdmin === '1' && (
                        <Button
                            text='Создать новый проект'
                            onClick={() => setAddProjectModal(true)}
                            />
                    )
                }
            </Header>
            <ContentLayout>
                <div className={styles.body}>
                    <Row gutter={[12,12]}>
                        {
                            list?.map((item) => (
                                <Col span={12}>
                                    <ProjectItem {...item}/>
                                </Col>
                            ))
                        }
                        
                    </Row>
                </div>
            </ContentLayout>
            
        </div>
        
    )
}


export default ProjectsPage;