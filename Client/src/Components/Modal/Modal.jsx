import { useState } from "react";

export default function Modal({ props, children, ...rest }) {
    const { buttonText } = props;
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <dialog>

            </dialog>
            <button onClick={handleClick}>{buttonText}</button>
        </>
    );
}