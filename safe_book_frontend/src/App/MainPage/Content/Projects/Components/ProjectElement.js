import { Link } from 'react-router-dom';
import projects from '../Projects.module.css'

const ProjectElement = (props) => {
    return(
        <div className={`${projects.project}`}>
            <div className={`${projects.projectPhoto}`}>
                <Link to={`/main/element/projects/${props.projectData.id}`}>
                    <img alt="" src={process.env.PUBLIC_URL + "/" + props.projectData.imageName}/>
                </Link>
            </div>
            <div className={`${projects.projectContent}`}>
                <div className={`${projects.projectTitle}`}>
                    <Link to={`/main/element/projects/${props.projectData.id}`}>
                        {props.projectData.title}
                    </Link>
                </div>
                <div className={`${projects.projectDescription}`}>
                    {props.projectData.description}
                </div>
                <div className={`${projects.projectAdditional}`}>
                    <div className={`${projects.projectDate}`}>{props.projectData.creationDate.split("T")[0]}</div>
                    <div className={`${projects.projectShow}`}>
                        <Link to={`/main/element/projects/${props.projectData.id}`}>Show</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectElement;