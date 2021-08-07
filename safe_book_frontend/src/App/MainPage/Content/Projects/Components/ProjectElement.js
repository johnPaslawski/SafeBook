import { Link } from 'react-router-dom';
import './../../Content.css'

const ProjectElement = (props) => {
    return(
        <Link to="/projects/1" className="project-elem" style={{backgroundImage: `url(/${props.projectData.imageName})`}}>
            <div className="project-elem-content">
                <div className="project-elem-title">{props.projectData.title}</div>
            </div>
        </Link>
    );
}

export default ProjectElement;