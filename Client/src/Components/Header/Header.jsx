import AboutProject from '../About/AboutProject';
import AboutUs from '../About/AboutUs';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';

const Header = () => {

    const [isProjectOpen, setIsProjectOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleProjectClick = () => { setIsProjectOpen(!isProjectOpen); };
    const handleClick = () => { setIsOpen(!isOpen); };

    const theme = createTheme({
        palette: {
            primary: {
                main: '#e01e37',
                light: '#ff5d8a',
                dark: '#c1121f',
                contrastText: '#fae0e4'
            }
        },
    });

    return (
        <section className='flex flex-col mt-4 md:mt-6'>
            <hgroup className='flex flex-col items-center mb-4'>
                <h1 className='text-[32px] md:text-[48px] Xmd:text-[64px] font-bold self-center'>
                    🗞️ExtraExtra🗞️
                </h1>
                <p className='Xflex Xjustify-center text-[18px] md:text-[24px] Xmd:text-[32px] Xmy-[16px] Xmd:my-[20px] Xlg:my-[24px]'>
                    Bridging the Gap in Canada's News Landscape
                </p>
            </hgroup>
            <div className='flex flex-col md:flex-row items-center gap-0 Xlg:gap-[50px] lg:gap-[100px] mb-4 md:mb-6'>
                <ThemeProvider theme={theme}>
                    <Button
                        sx={{
                            fontFamily: 'News',
                            width: { xs: 200, sm: 230, md: 290 },
                            fontSize: { xs: 14, sm: 18, md: 22 },
                            height: { xs: 45, sm: 60, md: 60 }
                        }}
                        variant='contained' color='primary' className='Button'
                        onClick={handleProjectClick}
                    >
                        <p className='pt-1'>
                            About The Project
                        </p>
                    </Button>
                </ThemeProvider>
                {/* <button className='text-[fae0e4] w-48 xs:w-60 md:w-72 text-sm xs:text-lg md:text-2xl bg-[#e01e37] hover:bg-[#c1121f'>About The Project</button> */}
                <ThemeProvider theme={theme}>
                    <Button
                        sx={{
                            fontFamily: 'News',
                            width: { xs: 200, sm: 230, md: 290 },
                            fontSize: { xs: 14, sm: 18, md: 22 },
                            height: { xs: 45, sm: 60, md: 60 }
                        }}
                        variant='contained' color='primary'
                        onClick={handleClick}
                    >
                        <p className='pt-1'>
                            About The Devs
                        </p>
                    </Button>
                </ThemeProvider>
            </div>
            <AboutProject
                open={isProjectOpen}
                onClose={handleProjectClick}
            />
            <AboutUs
                open={isOpen}
                onClose={handleClick}
            />
        </section>
    );
};

export default Header;