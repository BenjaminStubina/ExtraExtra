/* INSTRUCTIONS FOR USE BELOW */

export function Hamburger({ onClick, className, Icon }) {

    return (

        <div className={`shrink-0 md:hidden`}>
            <button
                onClick={onClick}
                className={`p-2 m-2 border rounded ${className || ''}`}>
                <Icon
                    className={`fill-current`}
                    width='16'
                    height='16'
                />
            </button>
        </div>

    );
}

export function HamburgerIcon({ className, ...rest }) {
    return (
        <svg
            {...rest}
            className={`${className || ''}`}
            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
    );

}

// add error checking for position
// make sure it matches a tailwind class
export function HamburgerHelper({ className, isExpanded, position, children, ...rest }) {

    return (

        <div
            className={`min-w-[320px] w-full ${`md:flex md:items-center  md:min-w-0 md:w-auto`} ${className || ''} ${isExpanded ? '' : 'hidden'} ${position ? position : ''}`}
            {...rest}
        >
            {children}
        </div>

    );
}

export function NavItem({ className, id, children, as: Component = `a`, ...rest }) {
    return (
        <Component
            className={`${className || ''}`}
            id={id}
            {...rest}
        >
            {children}
        </Component>
    );
}

export function NavList({ className, children, ...rest }) {

    return (

        <ul
            className={` ${className || ''}`}
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

export function NavWrapper({ className, children, ...rest }) {

    return (
        <div className={`flex flex-col ${className || ''}`}>
            {children}
        </div>
    );
}
export function Title({ className, children, as: Component = 'h2', ...rest }) {

    return (

        <Component
            className={`${className || ''}`}
            {...rest}
        >
            {children}
        </Component>

    );
}

// add error checking for position
// make sure it matches a tailwind class
export function Wrapper({ className, position, children, ...rest }) {

    return (
        <header className={`_min-w-[375px] w-full flex ${className || ''}`}>
            <nav
                className={`container p-2 inline-flex flex-wrap  min-w-[320px] max-w-full items-center justify-center ${`md:flex-row-reverse md:min-w-0 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl`} ${position ? position : ''}`}
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
// a. Import {useHamburger, Hamburger, HamburgerIcon, HamburgerHelper}
// b. const header = useHamburger()
// c. Place <Hamburger onClick={header.toggleHamburger}> inside <Wrapper>, before or after <Title>.
// d. Place <HamburgerHelper> around your <NavList> </HamburgerHelper>

// Etc.
// &. Wrapper && HamburgerHelper take a `position` prop
// %. Title is <h2> by default. Override with `as={Elem}`. It takes {children}
// *. NavItem is <a> by default. Override with `as={Elem}`. It takes two props: `id={any}`; {children}

// Basic example
// export function Header() {
//  const header = useHamburger();
// <Wrapper position='relative'>
// <HamburgerHelper
//      isExpanded={header.isExpanded}
//      position='absolute'>
// <NavList>
// <NavItem id=1 href="#">Item 1</NavItem>
// <NavItem id=2 href="##">Item 2</NavItem>
// </NavList>
// </HamburgerHelper>
// <Title>Website Name</Title>
// <Hamburger onClick={header.toggleHamburger}>
// </Wrapper>
// }
