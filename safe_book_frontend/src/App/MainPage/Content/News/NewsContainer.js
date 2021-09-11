import { connect } from "react-redux";
import News from "./News";
import React from "react";
import { newsApi } from "../../../../api/MainPageApi";
import { sortObjectsArrayByDate } from "../../../../dataManager/dataManager";
import {
    setNews, addNewsType, setLastNewsIndex, setCurNews, setLoading
} from '../../../../redux/reducers/MainPage/mainPageNewsReducer';
import {addProjectsType} from '../../../../redux/reducers/MainPage/mainPageProjectsReducer';
import {setNewSearch} from '../../../../redux/reducers/MainPage/mainPageHeaderReducer'

class NewsApiComponent extends React.Component{

    getNews(){ //like, setNewsType, setLoading, setProjectsType=undefined
        this.props.setLoading(true);
        newsApi.getAllNews(this.props.like, addNewsType, addProjectsType)
        .then(data => {
            this.props.setLoading(false);
            let sortedArray = sortObjectsArrayByDate(data);
            this.props.setNews(sortedArray);
        })
    }

    componentDidMount(){
        this.getNews();
    }

    componentDidUpdate(prevProps){
        if(this.props.like !== prevProps.like){
            this.getNews();
        }
    }

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

const NewsContainer = connect(mapStateToProps, {
    setNews, setLastNewsIndex, setCurNews, setNewSearch, setLoading
})(NewsApiComponent);

export default NewsContainer;