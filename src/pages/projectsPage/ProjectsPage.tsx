import styles from './ProjectsPage.module.scss';
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import ProjectItem from './components/ProjectItem/ProjectItem';
import {Row, Col} from 'antd';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import ProjectModal from '../../modals/ProjectModal/ProjectModal';

const ProjectsPage = () => {


    return (
        <div className={styles.wrapper}>

            <ProjectModal/>


            <Header title="Проекты">
                <Button
                    text='Создать новый проект'
                    />
            </Header>
            <ContentLayout>
                <div className={styles.body}>
                    <Row gutter={[12,12]}>
                        <Col span={12}>
                            <ProjectItem/>
                        </Col>
                        <Col span={12}>
                            <ProjectItem/>
                        </Col>
                        <Col span={12}>
                            <ProjectItem/>
                        </Col>
                        <Col span={12}>
                            <ProjectItem/>
                        </Col>
                    </Row>
                </div>
            </ContentLayout>
            
        </div>
        
    )
}


export default ProjectsPage;