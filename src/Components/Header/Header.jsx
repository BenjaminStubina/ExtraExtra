import AboutProject from '../About/AboutProject';
import AboutUs from '../About/AboutUs';
import { Button } from '@mui/material';
import { useState } from 'react';

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
        <section className='flex flex-col mt-4'>
            <span className='text-2xl md:text-3xl lg:text-5xl font-bold self-center'>
                ExtraExtra
            </span>
            <p className='text-sm md:text-lg lg:text-2xl my-[16px] md:my-[20px] lg:my-[24px]'>
            Bridging the Gap in Canada's Media Landscape
            </p>
            <Button variant='text' onClick={handleOpenAboutProject}>
                About The Project
            </Button>
            <Button variant='text' onClick={handleOpenAboutUs}>
                About The Devs
            </Button>
            <AboutProject openAboutProject={openAboutProject} handleCloseAboutProject={handleCloseAboutProject} />
            <AboutUs openAboutUs={openAboutUs} handleCloseAboutUs={handleCloseAboutUs} /> 
        </section>
    )
}

export default Header;