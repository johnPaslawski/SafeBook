import { getAuth } from "../../../redux/reducers/Authentication/authenticationReducer";
import React from "react";

const LoginRequest = () => {
    getAuth();
    return (
        <div></div>
    );
}

export default LoginRequest;