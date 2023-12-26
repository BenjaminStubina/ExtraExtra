import { useState, useEffect } from "react";

export function useFetchData(url, source) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {

                let response = await fetch(`${url}${source}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                let fetchData = await response.json();
                setData(fetchData);
                setLoading(false);
            }
            catch (error) {
                console.log('Error fetching data', error);
            }
        })();
    }, [source]);

    return { data, loading };
}