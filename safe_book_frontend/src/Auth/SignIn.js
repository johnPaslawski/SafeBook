import React from 'react';
import { UserManager, WebStorageStateStore } from 'oidc-client';


const SignIn = () => {
    var userManager = new UserManager({
        //loadUserInfo: true, // doesn't work?
        userStore: new WebStorageStateStore({ store: window.localStorage }),
        response_mode: "query" // PKCE
    });

    userManager.signinCallback().then(result => {
        window.location.href = "/";
    });

    return (
        <div>Hello hi</div>
    );
}

export default SignIn;