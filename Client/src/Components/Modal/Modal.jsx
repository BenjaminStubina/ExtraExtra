import { useState } from "react";
import ModalButton from "../ModalButton/ModalButton";
import ModalPopover from "../ModalPopover/ModalPopover";


export default function Modal({ props, ...rest }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <ModalButton
                onClick={handleClick}
                className=''
                {...rest}
            >
                {children}
            </ModalButton>
            <ModalPopover
                open={isOpen}
                onClose={handleClick}
            >
                {children}
            </ModalPopover>
        </>
    );
}

{/* <dialog> */ }

{/* </dialog> */ }
{/* <button onClick={handleClick}>{buttonText}</button> */ }

/* <button className='text-[fae0e4] w-48 xs:w-60 md:w-72 text-sm xs:text-lg md:text-2xl bg-[#e01e37] hover:bg-[#c1121f'>About The Project</button> */