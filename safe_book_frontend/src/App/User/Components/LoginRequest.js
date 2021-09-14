import { getAuth } from "../../../redux/reducers/Authentication/authenticationReducer";
import React from "react";
import { connect } from "react-redux";

class LoginRequest extends React.Component{

    componentDidMount(){
        debugger;
        this.props.getAuth();
    }

    render(){
        return(
            <div></div>
        );
    }
}

const mapStateToProps = (state) =>({

})

export default connect(mapStateToProps, {getAuth} )(LoginRequest)