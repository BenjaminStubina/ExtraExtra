import { useDialog } from "../../hooks/useDialog";

export default function Modal({ Content, children, ...rest }) {

    const { isOpen, toggleDialog } = useDialog();
    const btnClass = '';
    const popClass = '';

    return (

        <>
            <ModalButton
                className={btnClass}
                onClick={toggleDialog}
            >
                {children}
            </ModalButton>

            <ModalDialog
                className={popClass}
                isOpen={isOpen}
                Content={Content} />
        </>

    );
}

export function ModalDialog({ className, isOpen, Content, ...rest }) {
    // might want to change the width of the div to something smaller in order to show page behind it - or add a margin
    return (
        isOpen && (
            <div className={`w-full  p-6 flex flex-col gap-2 ${className || ''}`}>
                {Content && <Content />}
            </div>
        )
    );
}

export function ModalButton({ className, onClick, children, as: Component = 'button', ...rest }) {

    return (

        <Component
            className={`${className || ''}`}
            onClick={onClick}
            {...rest}
        >
            {children}
        </Component>

    );
}

export function PopoverButton({ popovertarget, className, children, ...rest }) {

    return (

        <button
            popovertarget={popovertarget}
            className={`${className || ''}`}
            {...rest}
        >
            {children}
        </button>

    );
}

export function PopoverBox({ id, className, popover = 'auto', Content, children, ...rest }) {

    return (

        <div
            id={id}
            className={`w-2/3 rounded-md text-center border backdrop:bg-[rgba(0,0,0,0.6)] ${className || ''}`}
            popover={popover}
            {...rest}
        >
            {Content && <Content />}
        </div>

    );
}

// Dialog Stuff
/* V1 - based on Kevin Powell*/
/*
function Dialog({ id, children }) {

    return (

        <dialog
            id={id}
            className={`p-[1em] max-w-[50ch] backdrop:bg-purple-500 backdrop:opacity-20`}
        >
            {children}
        </dialog>
    );
}

function OpenButton({ modalId }) {

    return (

        <button
            onClick={() => {
                document.getElementById(modalId).showModal();
            }}
        >
            open modal
        </button>

    );
}

export function CloseButton({ modalId }) {
    return (

        <button
            onClick={() => {
                document.getElementById(modalId).close();
            }}
        >
            close modal
        </button>

    );
}

export default function TestSection() {

    return (

        <>
            <h1>hello</h1>
            <p>1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, mollitia.</p>
            <p>2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, mollitia.</p>
            <OpenButton
                modalId='modal' />
            <Dialog
                id='modal'
            >
                <p>6 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, mollitia.</p>
                <p>7 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, mollitia.</p>
                <CloseButton
                    modalId='modal'
                />
            </Dialog>
        </>

    );
}
*/
/* */

/* V2 - GPT "more React-y" */
/*
import { useRef, useEffect, useState } from 'react';

function Dialog({ id, children, isOpen, onClose }) {
    const dialogRef = useRef(null);

    // Effect to control the visibility of the dialog
    useEffect(() => {
        if (isOpen) {
            dialogRef.current.showModal();
        } else if (dialogRef.current.open) {
            dialogRef.current.close();
        }
    }, [isOpen]);

    return (
        <dialog
            ref={dialogRef}
            id={id}
            className={`p-[1em] max-w-[50ch] backdrop:bg-purple-500 backdrop:opacity-20`}
            onClose={onClose}
        >
            {children}
        </dialog>
    );
}

function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

export default function TestSection() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openModal = () => setIsDialogOpen(true);
    const closeModal = () => setIsDialogOpen(false);

    return (
        <>
            <h1>hello</h1>
            <p>1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, mollitia.</p>
            <p>2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, mollitia.</p>
            <Button onClick={openModal}>open modal</Button>
            <Dialog
                id='modal'
                isOpen={isDialogOpen}
                onClose={closeModal}
            >
                <p>6 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, mollitia.</p>
                <p>7 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, mollitia.</p>
                <Button onClick={closeModal}>close modal</Button>
            </Dialog>
        </>
    );
}
*/
/* */

/* V3 - GPT React without hooks */
/*
import PropTypes from 'prop-types';

function Dialog({ id, children }) {
    return (
        <dialog
            id={id}
            className={`p-[1em] max-w-[50ch] backdrop:bg-purple-500 backdrop:opacity-20`}
        >
            {children}
        </dialog>
    );
}

Dialog.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node
};

function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node
};

export default function TestSection() {
    const handleOpen = () => {
        document.getElementById('modal').showModal();
    };

    const handleClose = () => {
        document.getElementById('modal').close();
    };

    return (
        <>
            <h1>hello</h1>
            <p>1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, mollitia.</p>
            <p>2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, mollitia.</p>
            <Button onClick={handleOpen}>open modal</Button>
            <Dialog id='modal'>
                <p>6 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, mollitia.</p>
                <p>7 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, mollitia.</p>
                <Button onClick={handleClose}>close modal</Button>
            </Dialog>
        </>
    );
}
*/
/* */