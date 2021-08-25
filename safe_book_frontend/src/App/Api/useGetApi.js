import { useEffect, useState } from "react";


const useGetApi = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    // console.log("I am on api start");

    useEffect(() => {
        fetch(url)
        .then( resp => {
            if (!resp.ok){
                throw Error("Coud not fetch the data for that resource");
            }
            return resp.json();
        })
        .then( data => {
            console.log("I got data");
            setData(data);
            setIsLoading(false);
            setError(null);
        })
        .catch( error => {
            setIsLoading(false);
            setError(error.massage);

        })
    }, [url]);

    console.log("I am on api end return data\n" + data);
    return {data, isPending, error}
}

export default useGetApi;