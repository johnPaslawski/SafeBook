import React from "react";
import { connect } from "react-redux";
import Projects from "./Projects";
import {setMainPageProjects} from '../../../../redux/reducers/MainPage/mainPageProjectsReducer';
import axios from "axios";

class ProjectsApiComponent extends React.Component{

    componentDidMount(){
        axios.get(`https://localhost:44325/api/Projects?like=${this.props.like}`)
        .then( responce => this.props.setMainPageProjects(responce.data))
    }

    render(){
        return(
            <Projects projects={this.props.projects}/>
        );
    }
}

const mapStateToProps = (state) => ({
    projects: state.mainPageProjects.projects,
    like: state.mainPageHeader.newSearchBody
})

const mapDispatchToProps = (dispatch) => ({
    setMainPageProjects : (projects) => dispatch(setMainPageProjects(projects))
})

const ProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectsApiComponent);

export default ProjectsContainer;