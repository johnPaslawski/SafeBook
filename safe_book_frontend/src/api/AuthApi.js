import * as axios from "axios";
import { UserManager, WebStorageStateStore, User } from 'oidc-client';


const CONFIG = {
    userStore: new WebStorageStateStore({ store: window.localStorage }), // use local storage instead of session storage
    authority: "https://localhost:44324/",
    client_id: "client_id_js",
    response_type: "code", // instead of "id_token token" because of PKCE
    redirect_uri: "https://localhost:44366/home/signin",
    post_logout_redirect_uri: "https://localhost:44366/Home/Index",
    scope: "openid MyApiOne Blob my.api.claim my.scope" // TODO Iss1, not-todo: Iss3
};
var refreshing = false;
const userManager = new UserManager(CONFIG); // TODO this is probably not the best place to initiate UserManager?


axios.interceptors.response.use(
    response => { return response },
    async error => {
        var userInStore = await userManager.getUser().then(user => user != null);
        console.error("axios intercepted error: ", error.response); // TODO delete this
        
        var axiosConfig = error.response.config;
        
        // if error response is 401 try to refresh token
        if (error.response.status === 401 /*&& userInStore*/) {
            console.error("access token expired");
            
            // if already refreshing don't make another request
            if (!refreshing) {
                console.log("starting token refresh"); // TODO delete this

                // maybe catch required login here? something like session expired?

                refreshing = true;

                // do the refresh
                return userManager.signinSilent().then(user => {
                    console.log("new user: ", user) // TODO delete this

                    // update the http request and axios client
                    axios.defaults.headers.common["Authorization"] = "Bearer " + user.access_token;
                    axiosConfig.headers["Authorization"] = "Bearer " + user.access_token;

                    // retry the http request
                    refreshing = false;
                    return axios(axiosConfig);
                }); // TODO Iss 4 make this signinSilentCallback() - needs a dedicated silenSignIn page in SPA
            }
        }

        return Promise.reject(error)
    }
);

let instance = axios.create({
    baseUrl: "UrlToLogin"
})


export const authApi = {
    auth : (setUserManager) => {
        debugger;
        setUserManager(userManager);
        userManager.signinRedirect();
        userManager.getUser().then(user => {
            console.log("user:", user); // TODO delete this
            if(user) {
                axios.defaults.headers.common["Authorization"] = "Bearer " + user.access_token;
            }
        });
    }
}
