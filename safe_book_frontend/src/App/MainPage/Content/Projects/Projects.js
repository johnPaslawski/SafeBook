import "./../Content.css";
import ProjectElement from "./Components/ProjectElement";
import { useGet as useGetApi } from "../../../Api/Api";

const Projects = () => {

    const {data, isPadding, error} = useGetApi("/api/Projects");
    
    return(
        <div className="projects title-content-grid">
            <div className="title-content-title projects-title">Projekty</div>
            <div className="title-content-content projects-list">
                {data && data.map( project => <ProjectElement projectData={project}/>)}
            </div>
        </div>
    );
}

export default Projects;