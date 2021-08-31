import { useEffect, useState } from "react";


const useGetApi = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect((url) => {
        const abortCont = new AbortController();

        fetch(url, {signal : abortCont.signal})
        .then( resp => {
            if (!resp.ok){
                throw Error("Coud not fetch the data for that resource");
            }
            return resp.json();
        })
        .then( data => {
            setData(data);
            setIsLoading(false);
            setError(null);
        })
        .catch( error => {
            if(error.name === "AbortError"){
                console.log("Fetch aborted")
            }
            else{
                setIsLoading(false);
                setError(error.massage);
            }
        })

        return () => abortCont.abort();
    }, []);
    return {data, isPending, error}
}

export default useGetApi;