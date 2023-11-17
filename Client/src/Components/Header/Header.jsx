import AboutProject from '../About/AboutProject';
import AboutUs from '../About/AboutUs';
import { Button } from '@mui/material';
import { useState } from 'react';
import './ButtonStyle.scss';

const Header = () => {

    const [openAboutProject, setOpenAboutProject] = useState(false);
    const [openAboutUs, setOpenAboutUs] = useState(false);
    
    const handleOpenAboutProject = () => {
        setOpenAboutProject(true);
    }

    const handleCloseAboutProject = () => {
        setOpenAboutProject(false);
    }

    const handleOpenAboutUs = () => {
        setOpenAboutUs(true);
    }

    const handleCloseAboutUs = () => {
        setOpenAboutUs(false);
    }

    return (
        <section className='flex flex-col mt-4 md:mt-6'>
            <span className='text-2xl md:text-4xl lg:text-5xl font-bold self-center'>
                ExtraExtra
            </span>
            <p className='flex justify-center text-sm md:text-lg lg:text-2xl my-[16px] md:my-[20px] lg:my-[24px]'>
            Bridging the Gap in Canada's News Landscape
            </p>
            <div className='flex justify-center gap-4 md:gap-[100px] lg:gap-[200px] mb-4 md:mb-6'>
                <Button variant='outlined' color='secondary' className='Button' onClick={handleOpenAboutProject}>
                    About The Project
                </Button>
                <Button variant='outlined' color='secondary' onClick={handleOpenAboutUs}>
                    About The Devs
                </Button>
            </div>
            <AboutProject openAboutProject={openAboutProject} handleCloseAboutProject={handleCloseAboutProject} />
            <AboutUs openAboutUs={openAboutUs} handleCloseAboutUs={handleCloseAboutUs} /> 
        </section>
    )
}

export default Header;