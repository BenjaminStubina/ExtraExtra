import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header">
            <div className="header__container">
                <NavLink to='/' className="logo__link">ExtraExtra</NavLink>
                <nav className="navbar__container">
                    <NavLink to='/project'>The Project</NavLink>
                    <NavLink to='/about'>About Us</NavLink>
                    {/* Make this a button */}
                    <NavLink to='/add'>Add a Source</NavLink>
                </nav>
            </div>
        </header>

    );
};

export default Navbar;