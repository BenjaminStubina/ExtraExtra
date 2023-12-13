import './ModalStyle.scss';
import { Dialog } from '@mui/material';
import TechList from '../TechList/TechList';
import DevList from '../DevList/DevList';
import { devs as devArray, shortStack as shortStackArray } from '../../utils/constants';


const AboutUs = ({ open, onClose }) => {
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
            <section className='w-full p-6 flex flex-col gap-2'>
                <p className=''>ExtraExtra was created in Toronto by Benjamin Stubina and Benny Goldman.</p>

                <DevList
                    className=""
                    array={devArray}
                >Get in touch:</DevList>


                <TechList
                    className="w-full"
                    array={shortStackArray}
                >
                    Built with:
                </TechList>
            </section>
        </Dialog>
    );
};

export default AboutUs;
