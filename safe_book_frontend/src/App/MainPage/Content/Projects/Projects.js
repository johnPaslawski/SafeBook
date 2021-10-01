import ProjectElement from "./Components/ProjectElement";
import projects from "./Projects.module.css";

const Projects = (props) => {

    const renderProjects = () => (props.projects.map( project => <ProjectElement projectData={project} key={project.id}/>));
    return(
        <div className={projects.content}>
            {props.loading ? <div>Loading...</div> : props.projects.length > 0 ? renderProjects() : <div>Niema danych :)</div>}
        </div>
    );
}

export default Projects;