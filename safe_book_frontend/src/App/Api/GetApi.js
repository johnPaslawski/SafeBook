import { useEffect, useState } from "react";


const GetApi = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = AbortController();

        fetch(url, {signal: abortCont})
        .then( resp => {
            if (!resp.ok()){
                throw Error("Coud not fetch the data for that resource");
            }
            return resp.json();
        })
        .then( data =>{
            setData(data);
            setIsLoading(false);
            setError(null);
        })
        .catch( error =>{
            if (error.name === 'AbortError'){
                console.log(error.massage);
            }
            else{
                setIsLoading(false);
                setError(error.massage);
            }
        })

        return () => abortCont.abort();
    });

    return {data, isPending, error}
}

export default GetApi;