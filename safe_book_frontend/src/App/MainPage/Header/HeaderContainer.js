import Header from "./Header";
import { connect } from "react-redux";
import {newMainPageHeaderSearchBodyActionCreator} from "./../../../redux/reducers/MainPage/mainPageHeaderReducer";

let mapStateToProps = (state) => {
    return {
        serchValue: state.mainPageHeader.newSearchBody
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeSearchBody: (body) => {
            dispatch(newMainPageHeaderSearchBodyActionCreator(body))
        }
    }
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer;