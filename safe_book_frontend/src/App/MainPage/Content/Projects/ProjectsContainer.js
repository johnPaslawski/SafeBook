import React from "react";
import { connect } from "react-redux";
import Projects from "./Projects";
import { getProjects} from '../../../../redux/reducers/MainPage/mainPageProjectsReducer';
import { compose } from "redux";

class ProjectsApiComponent extends React.Component{

    componentDidMount() { this.getProjects() }

    getProjects = () => { this.props.getProjects(this.props.like) }

    componentDidUpdate(prevProps) { prevProps.like !== this.props.like && this.getProjects() }

    render(){ return( <Projects projects={this.props.projects} loading={this.props.loading}/> ) }
}

const mapStateToProps = (state) => ({
    projects: state.mainPageProjects.projects,
    like: state.mainPageHeader.newSearchBody,
    loading: state.mainPageProjects.loading
})

const ProjectsContainer = compose(
    connect( mapStateToProps, { getProjects} )
)(ProjectsApiComponent)

export default ProjectsContainer;