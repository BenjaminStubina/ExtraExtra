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

// export function useAltFetch() {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch(`http://localhost:8080/?publication=all`)
//             .then((res) => res.json())
//             .then((data) => {
//                 setData(data);
//                 setLoading(false);

//             });
//     }, []);

//     return (data, loading);
// }