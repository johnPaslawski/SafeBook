import "./../Content.css";

import FacebookSide from "../Sidebars/FacebookSide";

const Projects = () => {
    return(
        <div className="projects">
            <div className="content-side">
                <div className="projects-list">
                    Projects list
                </div>
                <FacebookSide />
            </div>
        </div>
    );
}

export default Projects;