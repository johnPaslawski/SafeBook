import * as React from 'react';
import { UserManager, WebStorageStateStore } from 'oidc-client';

const SignIn = () => {
    debugger;
    var userManager = new UserManager({
        userStore: new WebStorageStateStore({ store: window.localStorage }),
        response_mode: "query" // PKCE
    });

    userManager.signinCallback().then( result => {
        window.location.href = "/main";
    });
    return (
        <div >
            
        </div>
    );
};

export default SignIn;