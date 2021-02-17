import { useState, useEffect } from 'react';
const useFetch = (url) => {


    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw error('Could not Fetch');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch error');
                    } else {
                        setError(err.message);
                        setIsLoading(false);
                    }

                })

        }, 1000);
        return () => abortCont.abort();
    }, [url])
    return { data, isLoading, error }
}

export default useFetch;