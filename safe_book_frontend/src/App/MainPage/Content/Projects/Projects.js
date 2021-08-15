import "./../Content.css";
import ProjectElement from "./Components/ProjectElement";
import useGetApi from "../../../Api/useGetApi";

const Projects = (props) => {

    const {data, isPadding, error} = useGetApi(`/api/Projects?like=${props.like}`);
    
    return(
        <div className="projects title-content-grid main-content">
            <div className="title-content-title projects-title">
                <h1>Projekty</h1>
            </div>
            <div className="title-content-content projects-list">
                {isPadding && <div>Loading...</div>}
                {data && data.map( project => <ProjectElement projectData={project} key={project.id}/>)}
            </div>
        </div>
    );
}

export default Projects;