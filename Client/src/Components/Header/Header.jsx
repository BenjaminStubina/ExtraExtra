import AboutProject from '../About/AboutProject';
import AboutUs from '../About/AboutUs';
import { Button, createTheme, ThemeProvider } from '@mui/material';
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

    const theme = createTheme({
        palette: {
            primary: {
                main: '#e01e37',
                light: '#ff5d8a',
                dark:'#c1121f', 
                contrastText: '#fae0e4'
            }
        },
        typography: {
            button: {
                fontFamily: 'News',
            }
        }
    })

    return (
        <section className='flex flex-col mt-4 md:mt-6'>
            <span className='text-[32px] md:text-[48px] 2sm:text-[64px] font-bold self-center'>
                ExtraExtra
            </span>
            <p className='flex justify-center text-[18px] md:text-[24px] 2sm:text-[32px] my-[16px] md:my-[20px] 2lg:my-[24px]'>
            Bridging the Gap in Canada's News Landscape
            </p>
            <div className='flex flex-col 2lg:flex-row items-center gap-4 2lg:gap-[50px] lg:gap-[100px] mb-4 md:mb-6'>
                <ThemeProvider theme={theme}>
                    <Button sx = {{
                        padding: 0,
                        width: {xs: 200, sm: 230, md: 290},
                        fontSize: {xs: 14, sm: 18, md: 22},
                        height: {xs: 45, sm: 60, md: 60}
                    }} variant='contained' color='primary' className='Button' onClick={handleOpenAboutProject}>
                        <p className='pt-1'>
                            About The Project  
                        </p>
                    </Button>
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                    <Button sx = {{
                        width: {xs: 200, sm: 230, md: 290},
                        fontSize: {xs: 14, sm: 18, md: 22},
                        height: {xs: 45, sm: 60, md: 60},
                    }} variant='contained' color='primary' onClick={handleOpenAboutUs}>
                        <p className='pt-1'>
                            About The Devs
                        </p>
                    </Button>
                </ThemeProvider>
            </div>
            <AboutProject openAboutProject={openAboutProject} handleCloseAboutProject={handleCloseAboutProject} />
            <AboutUs openAboutUs={openAboutUs} handleCloseAboutUs={handleCloseAboutUs} /> 
        </section>
    )
}

export default Header;