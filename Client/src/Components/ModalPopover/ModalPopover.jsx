import { Dialog } from '@mui/material';

export default function ModalPopover({ open, onClose, children, ...rest }) {
    return (
        <Dialog sx={{
            "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                    width: "fit-content",
                },
            },
        }}
            open={open}
            onClose={onClose}
            className='w-full'
        >
            <section className='w-full p-6 flex flex-col gap-2' {...rest}>
                {children}
            </section>
        </Dialog>
    );
}