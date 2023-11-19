import { Dialog } from '@mui/material'
import './ModalStyle.scss';
import Techlist from '../TechList/Techlist';
import github from '../../Assets/Images/techIcons/github.png'
import linkedin from '../../Assets/Images/techIcons/123.png'


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
                <p className=''>ExtraExtra was created, designed, and developed in Toronto by Benjamin Stubina and Benny Goldman. Benjamin and Benny are recent coding bootcamp grads seeking job opportunities.</p> 
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
                    <ul className='flex flex-col 1sm:flex-row gap-2 1sm:gap-[50px]'>
                        <li>Benjamin Stubina
                            <ul className='flex flex-col'>
                                <li>
                                    <a className='flex gap-2 items-center' href="https:github.com/BenjaminStubina" target="_">
                                        <img src={github} className="w-[24px] md:w-[30px] xl:w-[40px]" />   
                                        <p className=''>
                                            Github
                                        </p>
                                    </a></li>
                                <li>
                                    <a className='flex gap-2 items-center' href="https:www.linkedin.com/in/benjamin-stubina/" target="_">
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
                                    <a className='flex gap-2 items-center' href="https:github.com/bennygoldman" target="_">
                                        <img src={github} className="w-[24px] md:w-[30px] xl:w-[40px]" />
                                        <p className=''>
                                            Github 
                                        </p>
                                    </a></li>
                                <li>
                                    <a className='flex gap-2 items-center' href="https:www.linkedin.com/in/bennygoldman/" target="_">
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
    )
}

export default AboutUs