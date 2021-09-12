import Header from "./Header";
import { connect } from "react-redux";
import {setSearchBody, setNewSearch} from "./../../../redux/reducers/MainPage/mainPageHeaderReducer";
import { withRouter } from "react-router";

let mapStateToProps = (state) => {
    return {
        serchValue: state.mainPageHeader.newSearchBody,
        actualComponent: state.mainPageHeader.actualComponent
    }
}

let HeaderContainerWithUrl = withRouter(Header);

const HeaderContainer = connect(mapStateToProps, { setSearchBody, setNewSearch})(HeaderContainerWithUrl)

export default HeaderContainer;