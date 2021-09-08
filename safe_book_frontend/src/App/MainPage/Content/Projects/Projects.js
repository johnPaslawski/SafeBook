import ProjectElement from "./Components/ProjectElement";
import projects from "./Projects.module.css";
import Calendar from 'react-calendar'
import './Calendar.css';

const Projects = (props) => {

    // const renderProjects = () => (props.projects.map( project => <ProjectElement projectData={project} key={project.id}/>));
    const onChangeDate = date => console.log(date);
    
    return(
        <div className={projects.content}>
            <Calendar onChange={onChangeDate} hover={new Date(2021, 8, 11)} selectRange={true} locale="pl-PL"/>
            <ProjectElement />
            <ProjectElement />
            <ProjectElement />
            {/* {props.projects.length > 0 ? renderProjects() : <div>Loading...</div>} */}
        </div>
    );
}

export default Projects;