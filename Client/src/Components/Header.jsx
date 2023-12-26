
import { Link } from "react-router-dom";
import { useHamburger } from "../hooks/useHamburger";
import { Hamburger, HamburgerHelper, NavItem, NavList, Title, Wrapper } from "./ui/Navigation";
import { PopoverButton, PopoverBox } from "./ui/Modal";

function HeaderDate({ className }) {
    const date = new Date();
    const options = {
        long: {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        },
        short: {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
        }
    };
    return (
        <div className={`${className || ''}`}>
            <p className={`w-full hidden ${`md:inline`}`}>
                {date.toLocaleDateString('en-us', options.long)}
            </p>
            <p className={`w-full ${`md:hidden`}`}>
                {date.toLocaleDateString('en-us', options.short)}
            </p>
        </div>
    );
}

export default function Header({ props, children, ...rest }) {

    const header = useHamburger();

    return (

        <Wrapper
            className={`bg-gray-200 shadow-lg border-b-4 border-double border-gray-600 static`}>

            <HamburgerHelper
                className={`order-last ${`md:order-first`}`} isExpanded={header.isExpanded}>
                {/* PUT THE ABSOLUTE ON THE HELPER INSTEAD OF THE NAVLIST AND THANK ME LATER */}
                {/* IT WILL FIX YOUR MARGIN WOES */}
                {/* IT WILL FIX YOUR MARGIN WOES */}
                {/* PUT THE ABSOLUTE ON THE HELPER INSTEAD OF THE NAVLIST AND THANK ME LATER */}
                <NavList
                    className={`absolute w-full max-w-screen-sm px-4 py-3  gap-2 border border-red-600 bg-white ${`md:relative md:bg-inherit md:items-end md:w-1/2 md:ml-auto md:pl-0 md:pr-2  _md:border-0`}`}>

                    <NavItem as={Link} to='/about' id='1' className={`capitalize hover:underline font-medium text-gray-700 hover:text-black ${`md:uppercase`} `}>About the Project</NavItem>

                    <NavItem as={Link} to='/links' id='2' className={`capitalize hover:underline font-medium text-gray-700 hover:text-black ${`md:uppercase`} `}>Resources</NavItem>

                    {/* <NavItem as={Link} to='' id='3' className={`_capitalize font-medium text-gray-700 hover:text-black ${`md:uppercase md:hidden`}`}>secret ig mode</NavItem> */}

                </NavList>

            </HamburgerHelper>

            <Title
                as='div'
                className={`inline-flex items-center grow p-2 ${`md:flex-col-reverse`}`}>
                <HeaderDate className={`text-sm w-max`} />
                <Link to='/'>
                    <h2 className={`text-4xl shrink-0 grow text-center`}>Extra! Extra!</h2>
                </Link>
            </Title>

            <Hamburger
                className={`border-gray-600 hover:border-black text-gray-600 hover:text-black`}
                onClick={header.toggleHamburger} />

            <p aria-label='Decorative Text' className={`hidden border border-black px-6 py-2 text-center capitalize md:inline font-medium text-sm w-40`}>"bridging the gap in canada's news landscape"</p>

        </Wrapper>

    );
}
