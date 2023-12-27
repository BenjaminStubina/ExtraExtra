
import { Link } from "react-router-dom";
import { useHamburger } from "../hooks/useHamburger";
import { Hamburger, HamburgerIcon, HamburgerHelper, NavItem, NavList, NavWrapper, Title, Wrapper } from "./ui/Navigation";

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

function NewsItem({ before = ``, after = ``, children }) {

    return (
        // <div className="">

        <p className={`

            w-full
            md:text-[1px]
            md:tracking-[-1px]
            md:text-transparent

            before:content-[var(--before)]
            before:hidden
            md:before:inline
            before:text-base
            before:tracking-normal
            before:text-gray-700
            before:hover:text-black

            after:content-[var(--after)]
            after:hidden
            md:after:inline
            after:text-base
            after:tracking-normal
            after:text-gray-700
            after:hover:text-black

            `}
            style={{
                '--before': `"${before}"`,
                '--after': `"${after}"`
            }}
        >{children}</p>
        // </div>
    );
}

export default function Header({ props, children, ...rest }) {

    const header = useHamburger();

    return (
        <>
            <Wrapper
                className={`bg-gray-200 shadow-lg border-b-4 border-double border-gray-600`}
                position='relative'
            >

                <HamburgerHelper
                    className={`order-last ${`md:order-first`} mt-40 ${`md:mt-0`}`}
                    isExpanded={header.isExpanded}
                    position='absolute md:relative'
                >
                    <NavWrapper
                        className={`px-4 py-3 _gap-2 gap-1 border border-gray-600 rounded-sm bg-gray-100 ${`md:bg-inherit md:border-none _md:items-end md:ml-auto`}`}
                    >
                        <p
                            className={`hidden md:inline uppercase text-sm font-medium`}>
                            Top Stories:
                        </p>

                        <NavList>

                            <NavItem
                                as={Link}
                                to='/about'
                                id='1'
                                className={` hover:underline font-medium text-gray-700 hover:text-black ${`md:normal-case`} `}>
                                <NewsItem
                                    before="Meet the team"
                                    after='……………2A'
                                >
                                    About ExtraExtra
                                </NewsItem>
                            </NavItem>

                            <NavItem
                                as={Link}
                                to='/links'
                                id='2'
                                className={`hover:underline font-medium text-gray-700 hover:text-black ${`md:`} `}>
                                <NewsItem
                                    before="Bill C-18 in the news"
                                    after='…3B'
                                >
                                    Resources
                                </NewsItem>
                            </NavItem>

                            {/* <NavItem as={Link} to='' id='3' className={`_capitalize font-medium text-gray-700 hover:text-black ${`md:uppercase md:hidden`}`}>secret ig mode</NavItem> */}

                        </NavList>
                    </NavWrapper>
                </HamburgerHelper>

                <Title
                    as='div'
                    className={`inline-flex items-center justify-center grow p-2 min-w-max ${`md:flex-col-reverse`}`}>
                    <HeaderDate className={`text-sm w-max`} />
                    <h2 className={`text-3xl md:text-4xl shrink-0 grow text-center`}>
                        <Link to='/'>
                            Extra! Extra!
                        </Link>
                    </h2>
                </Title>

                <Hamburger
                    className={`border-gray-600 hover:border-black text-gray-600 hover:text-black`}
                    onClick={header.toggleHamburger}
                    Icon={HamburgerIcon}
                />

                <p aria-label='Decorative Text' className={`hidden border border-black px-6 py-2 text-center capitalize md:inline font-medium text-sm w-40`}>"bridging the gap in canada's news landscape"</p>
            </Wrapper>

        </>
    );
}
