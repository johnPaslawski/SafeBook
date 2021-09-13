import Header from "./Header";
import { connect } from "react-redux";
import {setSearchBody, setNewSearch} from "./../../../redux/reducers/MainPage/mainPageHeaderReducer";
import { withRouter } from "react-router";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        serchValue: state.mainPageHeader.newSearchBody,
        actualComponent: state.mainPageHeader.actualComponent
    }
}

const HeaderContainer = compose(
    withRouter,
    connect(mapStateToProps, { setSearchBody, setNewSearch})
)(Header)

export default HeaderContainer;