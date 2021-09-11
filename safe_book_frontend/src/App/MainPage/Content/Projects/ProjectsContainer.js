import React from "react";
import { connect } from "react-redux";
import Projects from "./Projects";
import {setMainPageProjects, setLoading} from '../../../../redux/reducers/MainPage/mainPageProjectsReducer';
import {projectsApi} from "../../../../api/MainPageApi";

class ProjectsApiComponent extends React.Component{

    componentDidMount(){
        this.getProjects();
    }

    getProjects = () => {
        this.props.setLoading(true);
        projectsApi.getAllProjects(this.props.like)
        .then( data => {
            this.props.setMainPageProjects(data);
            this.props.setLoading(false);
        })
    }

    componentDidUpdate(prevProps){
        prevProps.like !== this.props.like && this.getProjects();
    }

    render(){
        return(
            <Projects projects={this.props.projects} loading={this.props.loading}/>
        );
    }
}

const mapStateToProps = (state) => ({
    projects: state.mainPageProjects.projects,
    like: state.mainPageHeader.newSearchBody,
    loading: state.mainPageProjects.loading
})

const ProjectsContainer = connect(mapStateToProps, {setMainPageProjects, setLoading} )(ProjectsApiComponent);

export default ProjectsContainer;