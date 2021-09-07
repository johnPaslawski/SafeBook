import { connect } from "react-redux";
import News from "./News";
import React from "react";
import * as axios from "axios";
import {
    setMainPageNewsActionCreator, addNewsType, setLastNewsIndexActionCreator, setMainPageCurNewsActionCreator
} from '../../../../redux/reducers/MainPage/mainPageNewsReducer';
import {addProjectsType} from '../../../../redux/reducers/MainPage/mainPageProjectsReducer';

class NewsApiComponent extends React.Component{

    getNews(){
        axios.get(`https://localhost:44325/api/News?like=${this.props.like}`)
        .then( response => {
            let newsWithType = this.props.setNewsType(response.data);
            this.projectsFetch(newsWithType);
        });
    }

    projectsFetch(dataBefore){
        axios.get(`https://localhost:44325/api/Projects?like=${this.props.like}`)
        .then( response => {
            let projectsWithType = this.props.setProjectsType(response.data);
            let combinedArrays = this.combineArrays(dataBefore, projectsWithType);
            this.props.onFetchNews(combinedArrays);
        });
    }

    combineArrays(mainArray, secondaryArray){
        let combinedArray = mainArray.concat(secondaryArray);
        return this.sortArrayByDate(combinedArray);
    }

    sortArrayByDate(array){
        for(let j = 0; j < array.length; j++){
            for(let i = 0; i < array.length; i++){
                if(i+1 <= array.length - 1 && array[i].creationDate < array[i+1].creationDate){
                    let save = array[i];
                    array[i] = array[i+1];
                    array[i+1] = save;
                }
            }
        }
        return array;
    }

    componentDidMount(){
        this.getNews();
    }

    render(){
        return(
            <News
                allNews={this.props.allNews} lastIndex={this.props.lastIndex}
                curNews={this.props.curNews} onChangeCurNews={this.props.onChangeCurNews}
                setLastIndex={this.props.setLastIndex}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return{
        curNews: state.mainPageNews.curNews,
        allNews: state.mainPageNews.news,
        like: state.mainPageHeader.newSearchBody,
        lastIndex: state.mainPageNews.lastNewsIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onFetchNews: body => {
            dispatch(setMainPageNewsActionCreator(body));
        },
        setLastIndex: body => {
            dispatch(setLastNewsIndexActionCreator(body))
        },
        onChangeCurNews: body => {
            dispatch(setMainPageCurNewsActionCreator(body))
        },
        setProjectsType:  body => {return addProjectsType(body)},
        setNewsType: body => {return addNewsType(body)}
    }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(NewsApiComponent);

export default NewsContainer;