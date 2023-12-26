/* INSTRUCTIONS FOR USE BELOW */

export function Hamburger({ onClick, className }) {

    return (

        <div className={`md:hidden shrink-0`}>
            <button
                onClick={onClick}
                className={`p-2 m-2 border rounded ${className || ''}`}>
                <svg className={`fill-current h-4 w-4`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
        </div>

    );
}

export function HamburgerHelper({ className, isExpanded, children, ...rest }) {

    return (

        <div
            className={`w-full flex-grow md:flex md:items-center md:w-auto ${className || ''} ${isExpanded ? '' : 'hidden'}`}
            {...rest}
        >
            {children}
        </div>

    );
}

export function NavItem({ className, href, id, children, as: Component = `a`, ...rest }) {
    return (
        <Component
            className={`${className || ''}`}
            id={id}
            href={href}
            {...rest}
        >
            {children}
        </Component>
    );
}

export function NavList({ className, children, ...rest }) {

    return (

        <ul
            className={`flex flex-col ${className || ''}`}
        >
            {children && children.map(child => (
                <li
                    //                                 //
                    //    refactor to accept any key   //
                    //                                  //
                    // key={child.props.popovertarget}
                    key={child.props.id}
                    //                                  //
                    //                                  //
                    {...rest}
                >
                    {child}
                </li>
            ))}
        </ul >

    );
}

export function Title({ className, children, as: Component = 'h2', ...rest }) {

    return (

        <Component
            className={`${className || ''}`}

        >
            {children}
        </Component>

    );
}

export function Wrapper({ className, children, ...rest }) {

    return (
        <header className={`flex ${className || ''}`}>
            <nav
                className={`container p-2 inline-flex items-center _flex-col flex-wrap justify-center ${`md:flex-row-reverse md:max-w-2xl lg:max-w-4xl xl:max-w-5xl`}`}
                {...rest}
            >
                {children}
            </nav>
        </header>

    );

}

// How to build a nav:
// 1. Create a Header component
// 2. Import the {Components, You, Need} from './Navigation'
// 3. At minimum, {Wrapper} must be imported
// 4. `className` prop allows for custom styling.

// To add a collapsible mobile menu:
// a. Import {useHamburger, Hamburger, HamburgerHelper}
// b. const {isExpanded, toggleHamburger} = useHamburger()
// c. Place <Hamburger onClick={toggleHamburger}> inside <Wrapper>, before or after <Title>.
// d. Place <HamburgerHelper> around your <NavList> </HamburgerHelper>

// Etc.
// *. NavItem is <a> by default. Override with `as={Elem}`. It takes two props: `href='str'`; {children}
// %. Title is <h2> by default. Override with `as={Elem}`. It takes {children}

// Basic example
// export function Header() {
//  const { isExpanded, toggleHamburger } = useHamburger();
// <Wrapper>
// <Hamburger onClick={toggleHamburger}>
// <Title>Website Name</Title>
// <HamburgerHelper isExpanded={isExpanded}>
// <NavList>
// <NavItem href="#">Item 1</NavItem>
// <NavItem href="##">Item 2</NavItem>
// </NavList>
// </HamburgerHelper>
// </Wrapper>
// }
