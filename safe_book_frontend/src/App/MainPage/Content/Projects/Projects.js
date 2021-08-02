import "./../Content.css";
import ProjectElement from "./Components/ProjectElement";

const Projects = () => {
    return(
        <div className="projects title-content-grid">
            <div className="title-content-title projects-title">Projekty</div>
            <div className="title-content-content projects-list">
                <ProjectElement />
                <ProjectElement />
                <ProjectElement />
                <ProjectElement />
                <ProjectElement />
            </div>
        </div>
    );
}

export default Projects;