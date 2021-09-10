import React from "react";
import { connect } from "react-redux";
import Projects from "./Projects";
import {setMainPageProjects, setLoading} from '../../../../redux/reducers/MainPage/mainPageProjectsReducer';
import * as axios from "axios";

class ProjectsApiComponent extends React.Component{

    componentDidMount(){
        this.getProjects();
    }

    getProjects = () => {
        this.props.setLoading(true);
        axios.get(`https://localhost:44325/api/Projects?like=${this.props.like}`)
        .then( responce => {
            this.props.setMainPageProjects(responce.data);
            this.props.setLoading(false);
        });
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