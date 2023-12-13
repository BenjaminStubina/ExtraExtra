import './ModalStyle.scss';
import { Dialog } from '@mui/material';
import TechList from '../TechList/TechList';
import DevList from '../DevList/DevList';
import { devs as devArray, shortStack as shortStackArray } from '../../utils/constants';


const AboutUs = ({ openAboutUs, handleCloseAboutUs }) => {
    return (
        <Dialog sx={{
            "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                    // width: "80%",
                    width: "fit-content",
                    // maxWidth: "1200px",
                },
            },
        }} open={openAboutUs} onClose={handleCloseAboutUs}
            className='w-full'
        >
            <section className='w-full p-6 flex flex-col gap-2'>
                {/* <div className='flex flex-col gap-2'> */}
                <p className=''>ExtraExtra was created in Toronto by Benjamin Stubina and Benny Goldman.</p>
                {/* <p className=''>We're career-switchers, bootcamp grads, and available to work.</p> */}
                {/* </div> */}

                <DevList
                    className=""
                    array={devArray}
                >
                    {/* Connect with us: */}
                </DevList>


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

/*
const AboutUs = ({ openAboutUs, handleCloseAboutUs }) => {
    return (
        <Dialog sx={{
            "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                    width: "80%",
                    maxWidth: "1200px",
                },
            },
        }} open={openAboutUs} onClose={handleCloseAboutUs} className='w-full'>
            <section className='text-[20px] md:text-[22px] xl:text-[32px] p-4 md:p-6 xl:p-8 gap-2 md:gap-4 xl:gap-6'>
                <p className='text-[22px] md:text-[24px] xl:text-[34px] underline'>
                    About:
                </p>
                <p>ExtraExtra was created in Toronto by Benjamin Stubina and Benny Goldman.</p>
                <p>We're career-switchers, bootcamp grads, and available for hire.</p>
                <div className='flex flex-col gap-2 md:gap-4 my-2 md:my-4 xl:my-6'>
                    <p className='text-[22px] md:text-[24px] xl:text-[34px] underline'>
                        Techstack:
                    </p>
                    <Techlist />
                </div>
                <div className='flex flex-col gap-2 xl:gap-4 my-2 md:my-4 xl:my-6'>
                    <p className='text-[22px] md:text-[24px] xl:text-[34px] underline'>
                        Get in touch:
                    </p>
                    <ul className='flex flex-col xs:flex-row gap-2 xs:gap-[50px]'>
                        <li>Benjamin Stubina
                            <ul className='flex flex-col'>
                                <li>
                                    <a className='flex gap-2 items-center' href="https://github.com/BenjaminStubina" target="_">
                                        <img src={github} className="w-[24px] md:w-[30px] xl:w-[40px]" />
                                        <p className=''>
                                            Github
                                        </p>
                                    </a></li>
                                <li>
                                    <a className='flex gap-2 items-center' href="https://www.linkedin.com/in/benjamin-stubina/" target="_">
                                        <img src={linkedin} className="w-[24px] md:w-[30px] xl:w-[40px]" />
                                        <p className=''>
                                            LinkedIn
                                        </p>
                                    </a></li>
                            </ul>
                        </li>
                        <li>Benny Goldman
                            <ul className='flex flex-col'>
                                <li>
                                    <a className='flex gap-2 items-center' href="https://github.com/bennygoldman" target="_">
                                        <img src={github} className="w-[24px] md:w-[30px] xl:w-[40px]" />
                                        <p className=''>
                                            Github
                                        </p>
                                    </a></li>
                                <li>
                                    <a className='flex gap-2 items-center' href="https://www.linkedin.com/in/bennygoldman/" target="_">
                                        <img src={linkedin} className="w-[24px] md:w-[30px] xl:w-[40px]" />
                                        <p className=''>
                                            LinkedIn
                                        </p>
                                    </a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        </Dialog>
    );
};
*/