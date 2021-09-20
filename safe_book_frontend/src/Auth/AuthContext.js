import React, { useContext, useState } from "react";
import { UserManager, WebStorageStateStore } from "oidc-client";

const config = {
    userStore: new WebStorageStateStore({ store: window.localStorage }),
    authority: "https://localhost:44312/",
    client_id: "SafeBook",
    //extraQueryParams: {custom_key: "custom_value",} // fun option to use
    response_type: "code",
    redirect_uri: "https://localhost:44366/signin",
    //silent_redirect_uri="", // TODO implement this!
    post_logout_redirect_uri: "https://localhost:44366/",
    //loadUserInfo: true, //supposed to load info from userInfo endpoint into id token but doesnt really?
    //clockSkew: 0, TODO apparently can be used here, check this sometime
    scope: "openid profile SafeBookApi PlaceholderScope"
};

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [userManager, setUserManager] = useState(new UserManager(config))
    
    return (
        <AuthContext.Provider value={userManager}>
            {children}
        </AuthContext.Provider>
    );
};