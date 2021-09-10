import Header from "./Header";
import { connect } from "react-redux";
import {newMainPageHeaderSearchBodyActionCreator, setNewSearch} from "./../../../redux/reducers/MainPage/mainPageHeaderReducer";
import { withRouter } from "react-router";

let mapStateToProps = (state) => {
    return {
        serchValue: state.mainPageHeader.newSearchBody,
        actualComponent: state.mainPageHeader.actualComponent
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeSearchBody: (body) => {
            dispatch(newMainPageHeaderSearchBodyActionCreator(body))
        },
        setNewSearch: (body) =>  {dispatch(setNewSearch(body))} 
    }
};

let HeaderContainerWithUrl = withRouter(Header);

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerWithUrl)

export default HeaderContainer;