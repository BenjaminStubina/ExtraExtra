import { useDialog } from "../../utils/hooks";

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
