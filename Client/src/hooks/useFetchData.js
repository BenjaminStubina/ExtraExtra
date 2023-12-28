import { useState, useEffect } from "react";

export function useFetchData(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                let response = await fetch(`${url}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                let data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        })();

    }, []);

    return { data, loading };
}