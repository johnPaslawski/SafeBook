import Header from "./Header";
import { connect } from "react-redux";
import {setSearchBody, setNewSearch} from "./../../../redux/reducers/MainPage/mainPageHeaderReducer";
import { withRouter } from "react-router";
import { compose } from "redux";
import {useAuth} from '../../../Auth/AuthContext';
import React from "react";

// class HeaderContainerAPI extends React.Component{
//     componentDidMount() { this.getNews() }
// }

let mapStateToProps = (state) => {
    return {
        serchValue: state.mainPageHeader.newSearchBody,
        actualComponent: state.mainPageHeader.actualComponent
    }
}

const HeaderContainer = compose(
    withRouter,
    connect(mapStateToProps, { setSearchBody, setNewSearch, useAuth})
)(Header)

export default HeaderContainer;