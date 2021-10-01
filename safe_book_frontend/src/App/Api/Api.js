import { useCallback, useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { useAuth, userManagerInstance } from "../../Auth/AuthContext";
import { NETWORK_ERROR, DEFAULT_ERROR } from "../../userMessages";

export const axiosClient = () => {
    const client = axios.create();
    const isRefreshing = { status: false };
    userManagerInstance.getUser().then(user => client.defaults.headers.common["Authorization"] = `Bearer ${user?.access_token}`);
    addTokenRefresh(client, userManagerInstance, isRefreshing);
    return client;
}

export const useApi = (url, config) => {
    const isRefresing =  { status: false};

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const auth = useAuth();
    const cancelTokenSource = axios.CancelToken.source();

    addTokenRefresh(axios, auth, isRefresing);

    useEffect(() => {
        auth.getUser().then(user => {
            axios(url, { ...config, cancelToken: cancelTokenSource.token, headers: { 'Authorization': `Bearer ${user?.access_token}` }})
            .then(response => {
                setData(response.data);
                setIsLoading(false);
                setError(null);
                isRefresing.status = false;
                return config?.method ? response : response.data
            }) // TODO try to replicate login required error!!! seems to be resolved, but make sure.
            .catch(error => {
                if (axios.isCancel(error)) {
                    console.log('Aborted: ', error.message);
                } else {
                    if (error.message === "login_required") auth.signinRedirect(); //  TODO add user message and redirect after a second. maybe move this to interceptors.
                    setErrorMessage(error, setError);
                    setIsLoading(false);
                    console.log(error.message);
                }
            });
        });
    }, [url]); // TODO check if we should pass dependencies as hook parameters

    return { data, isLoading, error }
}

// export const usePost = (url, config) => { // TODO check this!!!!! with AddUserDetails copy
//     const isRefreshing = { status: false };
//     const [response, setResponse] = useState({ data: null, error: null, isLoading: false });
//     const auth = useAuth();
//     const cancelTokenSource = axios.CancelToken.source();

//     addTokenRefresh(auth, isRefreshing);

//     const callApi = useCallback((payload) => {
//         auth.getUser().then(user => {
//             setResponse(previousState => ({...previousState, isLoading: true}));
//             axios.post(url, payload, {...config, cancelToken: cancelTokenSource.token, headers: { 'Authorization': `Bearer ${user?.access_token}` }})
//             .then(response => setResponse({ data: response.data, isLoading: false, error: null}))
//             .catch(error => setResponse({ data: null, isLoading: false, error}))
//         })
//     }, [])
//     return [response, callApi];
// }

const addTokenRefresh = (client, auth, isRefreshing) => {
    // axios http middleware. token refresh. DO NOT use oidc-client-js automaticSilentRenew flag, it's deprecated and buggy.
    client.interceptors.response.use(
        function(response) { return response; },
        async function(error) {
            if (error.response) {
                const axiosConfig = error.response?.config;
                
                // if error response is 401 try to refresh token
                if (error.response?.status === 401) {
                    
                    // if already refreshing don't make another request
                    if (!isRefreshing.status) {
                        console.log("refreshing...")
                        // maybe catch required login here? something like session expired?
        
                        isRefreshing.status = true;
        
                        // do the refresh
                        return auth.signinSilent().then(user => {
                            // update the http request and axios client
                            client.defaults.headers.common["Authorization"] = "Bearer " + user.access_token;
                            axiosConfig.headers["Authorization"] = "Bearer " + user.access_token;
        
                            // retry the http request
                            isRefreshing.status = false;
                            return client(axiosConfig);
                        }); // TODO Iss 4 make this signinSilentCallback() - needs a dedicated silenSignIn page in SPA
                    }
                }
            }

            return Promise.reject(error)
        }
    );
}

function setErrorMessage(err, setError) {
    switch (err.message) {
        case "Network Error":
            setError(NETWORK_ERROR);
            break;
        default:
            setError(DEFAULT_ERROR);
    }
}
