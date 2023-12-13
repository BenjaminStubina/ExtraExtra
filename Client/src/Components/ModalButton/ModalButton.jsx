import { Button, createTheme, ThemeProvider } from '@mui/material';


export default function ModalButton(props) {

    const { onClick, className, children, ...rest } = props;
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

        <ThemeProvider theme={theme}>
            <Button
                sx={{
                    fontFamily: 'News',
                    width: { xs: 200, sm: 230, md: 290 },
                    fontSize: { xs: 14, sm: 18, md: 22 },
                    height: { xs: 45, sm: 60, md: 60 }
                }}
                variant='contained'
                color='primary'
                onClick={onClick}
                className={className}
                {...rest}
            >
                <p className='pt-1'>
                    {children}
                </p>
            </Button>
        </ThemeProvider>

    );
}