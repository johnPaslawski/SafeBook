import * as React from 'react';

const SignIn = () => {
    debugger;
    var userManager = new Oidc.UserManager({
        userStore: new Oidc.WebStorageStateStore({ store: window.localStorage }),
        response_mode: "query" // PKCE
    });

    userManager.signinCallback().then(result => {

        window.location.href = "/";
    });
    return (
        <div style="visibility:hidden">
            
        </div>
    );
};

export default SignIn;