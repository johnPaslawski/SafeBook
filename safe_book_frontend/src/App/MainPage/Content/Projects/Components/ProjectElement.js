import { Link } from 'react-router-dom';
import './../../Content.css'

const ProjectElement = () => {
    return(
        <Link to="/projects/1" className="project-elem" style={{backgroundImage: "url(/lak192.jpg)"}}>
            <div className="project-elem-content">
                <div className="project-elem-title">Tytuł cos tam cos tam</div>
            </div>
        </Link>
    );
}

export default ProjectElement;