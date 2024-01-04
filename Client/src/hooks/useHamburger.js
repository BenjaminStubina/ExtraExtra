import { useState } from "react";

export function useHamburger() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleHamburger = () => { setIsExpanded(!isExpanded); };

    return { isExpanded, toggleHamburger };
}