import { useEffect } from "react";
import { useState } from "react";

const useHrmsApi = (url) => {
    const abortConst = new AbortController();

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, { signal: abortConst.signal })
            .then(res => {
                console.log('To jest RESPONSE:');
                console.log(res);

                if (!res.ok) {
                    throw Error('Error-Nie Mogę Pobrać Danych')
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                setData(data)
                setIsLoading(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name === 'Abort error') {
                    console.log('Abortowano');
                } else {
                    setError(err.message);
                    setIsLoading(false);
                    console.log(err.message);
                }
            });

        return () => {
            console.log('cleanup after apiGET')
        }
    }, []);

    return { data, isLoading, error }
}

export default useHrmsApi;