import Header from "./Header";
import { connect } from "react-redux";
import {setSearchBody, setNewSearch} from "./../../../redux/reducers/MainPage/mainPageHeaderReducer";
import { withRouter } from "react-router";
import { compose } from "redux";
import { getAuth } from "../../../redux/reducers/Authentication/authenticationReducer";
import React from "react";

class UserApiComponent extends React.Component {

    componentDidMount() {
        this.props.getAuth("HERE COMES ID");
    }

    render() {
        return <Header searchValue={this.props.searchValue} actualComponent={this.props.actualComponent}
        setSearchBody={this.props.setSearchBody} setNewSearch={this.props.setNewSearch}
        getAuth={this.props.getAuth} userManager={this.props.userManager}></Header>
    }
}

let mapStateToProps = (state) => {
    return {
        serchValue: state.mainPageHeader.newSearchBody,
        actualComponent: state.mainPageHeader.actualComponent,
        user: state.users.user,
        userManager: state.authentication.userManager
    }
}

const HeaderContainer = compose(
    withRouter,
    connect(mapStateToProps, { setSearchBody, setNewSearch, getAuth})
)(UserApiComponent)

export default HeaderContainer;