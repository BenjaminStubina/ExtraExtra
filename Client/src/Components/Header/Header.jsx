import { useHamburger, useDialog } from "../../utils/hooks";
import { Hamburger, HamburgerHelper, NavItem, NavList, Title, Wrapper } from "../Navigation/Navigation";
import { ModalDialog, ModalButton } from "../Modal/Modal";
import AboutUs from "../../content/AboutUs";
import AboutTheProject from "../../content/AboutTheProject";

export default function Header() {

    const { isExpanded, toggleHamburger } = useHamburger();
    const project = useDialog();
    const team = useDialog();

    const style = {
        header: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }
    };

    return (
        <>
            <header style={style.header}>
                <Wrapper className={`bg-stone-200 border-b border-slate-700`}>
                    <Hamburger onClick={toggleHamburger}
                        className='
                    text-slate-700
                    border-slate-700
                    hover:text-red-900
                    hover:border-red-900
                    ' />
                    <Title
                        className='text-slate-800 font-bold text-3xl tracking-wider'>
                        🗞️ExtraExtra🗞️</Title>
                    <HamburgerHelper isExpanded={isExpanded}>
                        <NavList className='md:gap-2 md:justify-end'>
                            <NavItem
                                as={ModalButton}
                                onClick={project.toggleDialog}
                                id='project'
                                className='capitalize md:uppercase
                            md:bg-red-600
                            md:hover:bg-red-700
                            md:text-white
                            md:py-2
                            md:px-4
                            md:rounded
                             md:transition md:duration-300 md:ease-in-out
                             md:shrink-0
                            '>
                                about the project</NavItem>
                            <NavItem
                                as={ModalButton}
                                onClick={team.toggleDialog}
                                id='team'
                                className='capitalize md:uppercase
                            md:bg-red-600
                            md:hover:bg-red-700
                            md:text-white
                            md:py-2
                            md:px-4
                            md:rounded
                             md:transition md:duration-300 md:ease-in-out
                             md:shrink-0
                            '>
                                about us</NavItem>
                        </NavList>
                    </HamburgerHelper>
                </Wrapper>
            </header>
            <ModalDialog
                Content={AboutTheProject}
                isOpen={project.isOpen}
            />
            <ModalDialog
                Content={AboutUs}
                isOpen={team.isOpen}
            />
        </>
    );
};