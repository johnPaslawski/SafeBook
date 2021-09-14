import { connect } from "react-redux";
import { compose } from "redux";
import News from "./News";
import React from "react";
import { setLastNewsIndex, setCurNews, getNewsAndProjects } from '../../../../redux/reducers/MainPage/mainPageNewsReducer';
import {addProjectsType} from '../../../../redux/reducers/MainPage/mainPageProjectsReducer';

class NewsApiComponent extends React.Component{

    getNews() { this.props.getNewsAndProjects(this.props.like, addProjectsType) }

    componentDidMount() { this.getNews() }

    componentDidUpdate(prevProps) { this.props.like !== prevProps.like && this.getNews() }

    render(){
        return(
            
            <News
                allNews={this.props.allNews} lastIndex={this.props.lastIndex}
                curNews={this.props.curNews} setCurNews={this.props.setCurNews}
                setLastNewsIndex={this.props.setLastNewsIndex} loading={this.props.loading}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return{
        curNews: state.mainPageNews.curNews,
        allNews: state.mainPageNews.news,
        like: state.mainPageHeader.newSearchBody,
        lastIndex: state.mainPageNews.lastNewsIndex,
        newSearch: state.mainPageHeader.newSearch,
        loading: state.mainPageNews.loading
    }
}

const NewsContainer = compose(
    connect( mapStateToProps, { setLastNewsIndex, setCurNews, getNewsAndProjects })
)(NewsApiComponent)

export default NewsContainer;