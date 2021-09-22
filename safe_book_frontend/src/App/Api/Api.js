import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { useAuth } from "../../Auth/AuthContext";

export const useGet = (url) => {
    const abortConst = new AbortController();

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const auth = useAuth();
    const cancelTokenSource = axios.CancelToken.source();

    useEffect(() => {
        auth.getUser().then(user => {
            axios.get(url, { cancelToken: cancelTokenSource.token, headers: { 'Authorization': `Bearer ${user?.access_token}` }})
            .then(res => {
                setData(res.data);
                setIsLoading(false);
                setError(null);
                return res.data;
            })
            .catch((err) => {
                if (axios.isCancel(err)) {
                    console.log('Aborted: ', err.message);
                } else {
                    setError(err.message);
                    setIsLoading(false);
                    console.log(err.message);
                }
            });
        });
    }, [url]);

    return { data, isLoading, error }
}
