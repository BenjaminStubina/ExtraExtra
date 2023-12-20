import { useState, useEffect } from "react";

export function useDialog() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDialog = () => {
        setIsOpen(!isOpen);
    };

    return { isOpen, toggleDialog };
}

export function useHamburger() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleHamburger = () => { setIsExpanded(!isExpanded); };

    return { isExpanded, toggleHamburger };
}

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
                // console.log('fetchData is array: ', Array.isArray(fetchData));
                // setData(fetchData);
                let parseData = await JSON.parse(fetchData);
                // console.log('parseData is array: ', Array.isArray(parseData));
                setData(parseData);
                setLoading(false);
            }
            catch (error) {
                console.log('Error fetching data', error);
            }
        })();
    }, [source]);

    return { data, loading };
}