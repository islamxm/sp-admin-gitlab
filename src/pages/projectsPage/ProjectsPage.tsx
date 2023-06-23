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
import ProjectEmpModal from '../../modals/ProjectEmpModal/ProjectEmpModal';

const service = new ApiService()


const ProjectsPage = () => {
    const {token, userData} = useAppSelector(s => s.mainReducer)
    const [addProjectModal, setAddProjectModal] = useState(false)
    const [editProjectEmpModal, setEditProjectEmpModal] = useState(false)    
    const [list, setList] = useState<any[]>([])

    const [selected, setSelected] = useState<any>(null)

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


    const onEditEmp = (data: any) => {
        console.log(list[3])
        console.log(data)
        setSelected(data)
        setEditProjectEmpModal(true)
    }

    const onEmpEditClose = () => {
        setSelected(null)
        setEditProjectEmpModal(false)
    }

    

    


    


    return (
        <div className={styles.wrapper}>

            <ProjectModal
                onUpdate={getProjects}
                open={addProjectModal}
                onCancel={() => setAddProjectModal(false)}
                />

            <ProjectEmpModal
                data={selected}
                open={editProjectEmpModal}
                onUpdate={getProjects}
                onCancel={onEmpEditClose}
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
                                <Col span={12} key={item.id}>
                                    <ProjectItem 
                                        {...item}
                                        onEmpEdit={onEditEmp}
                                        />
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