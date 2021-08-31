import { connect } from "react-redux";
import News from "./News";
import {setMainPageNewsActionCreator} from '../../../../redux/reducers/MainPage/mainPageNewsReducer';

const mapStateToProps = (state) => {
    return{
        news: state.mainPageNews.mainPageNews,
        like: state.mainPageHeader.newSearchBody
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onFetchNews: (body) => {
            dispatch(setMainPageNewsActionCreator(body));
        }
    }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;