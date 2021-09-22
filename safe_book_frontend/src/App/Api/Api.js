import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { useAuth } from "../../Auth/AuthContext";

export const useGet = (url) => {
    var isRefresing =  { status: false};

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const auth = useAuth();
    const cancelTokenSource = axios.CancelToken.source();

    useTokenRefresh(auth, isRefresing);

    useEffect(() => {
        auth.getUser().then(user => {
            axios.get(url, { cancelToken: cancelTokenSource.token, headers: { 'Authorization': `Bearer ${user?.access_token}` }})
            .then(res => {
                setData(res.data);
                setIsLoading(false);
                setError(null);
                isRefresing = false;
                return res.data;
            }) // TODO catch login required error!!! IMPORTANT!
            // .catch((err) => {
            //     if (axios.isCancel(err)) {
            //         console.log('Aborted: ', err.message);
            //     } else {
            //         setError(err.message);
            //         setIsLoading(false);
            //         console.log(err.message);
            //     }
            // });
        });
    }, [url]);

    return { data, isLoading, error }
}

// export const usePost = (url) => {
//     const abortConst = new AbortController();

//     const [data, setData] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const auth = useAuth();
//     const cancelTokenSource = axios.CancelToken.source();

//     useEffect(() => {
//         auth.getUser().then(user => {
//             axios.post(url, { cancelToken: cancelTokenSource.token, headers: { 'Authorization': `Bearer ${user?.access_token}` }})
//             .then(res => {
//                 setData(res.data);
//                 setIsLoading(false);
//                 setError(null);
//                 return res.data;
//             })
//             .catch((err) => {
//                 if (axios.isCancel(err)) {
//                     console.log('Aborted: ', err.message);
//                 } else {
//                     setError(err.message);
//                     setIsLoading(false);
//                     console.log(err.message);
//                 }
//             });
//         });
//     }, [url]);

//     return { data, isLoading, error }
// }

const useTokenRefresh = (auth, isRefreshing) => {
    // axios http middleware. token refresh. DO NOT use oidc-client-js automaticSilentRenew flag, it's deprecated and buggy.
axios.interceptors.response.use(
    function(response) { return response; },
    async function(error) {
        //var userInStore = await userManager.getUser().then(user => user != null);
        console.error("axios intercepted error: ", error.response); // TODO delete this
        const axiosConfig = error.response.config;
        
        // if error response is 401 try to refresh token
        if (error.response.status === 401 /*&& userInStore*/) {
            console.error("access token expired");
            
            // if already refreshing don't make another request
            if (!isRefreshing.status) {
                console.log("starting token refresh"); // TODO delete this

                // maybe catch required login here? something like session expired?

                isRefreshing.status = true;

                // do the refresh
                return auth.signinSilent().then(user => {
                    console.log("new user: ", user) // TODO delete this

                    // update the http request and axios client
                    axios.defaults.headers.common["Authorization"] = "Bearer " + user.access_token;
                    axiosConfig.headers["Authorization"] = "Bearer " + user.access_token;

                    // retry the http request
                    isRefreshing.status = false;
                    return axios(axiosConfig);
                }); // TODO Iss 4 make this signinSilentCallback() - needs a dedicated silenSignIn page in SPA
            }
        }

        return Promise.reject(error)
    }
);
}