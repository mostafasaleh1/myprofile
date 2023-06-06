import React, { useState } from "react";
import Language from "../../languages/language/Language";
import { Routes, Route } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { CgMenu } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { navLinksData } from "../Data";
import { isRTL } from "../../languages/language/RTL";
import "./navbar.css";


const Navbar = () => {
    const [isTheMenuOpen, setIsTheMenuOpen] = useState(false);

    let handleMenu = () => {
        setIsTheMenuOpen(!isTheMenuOpen)
    }

    return (
        <React.Fragment>
            {isTheMenuOpen ? <IoClose className={`menu-icon ${isRTL() ? "menu-icon-rtl" : "menu-icon-left"}`} onClick={handleMenu} /> : <CgMenu className={`menu-icon ${isRTL() ? "menu-icon-rtl" : "menu-icon-left"}`} onClick={handleMenu} />}
            <nav className={isTheMenuOpen ? `new-navbar on-top-items ${isRTL() ? "new-navbar-right new-navbar-on-right" : "new-navbar-left new-navbar-on-left"}` : `new-navbar on-top-items ${isRTL() ? "new-navbar-right" : "new-navbar-left"}`}>
                <div className="new-nav-links-container">
                    {
                        navLinksData.map(navLink => <NavLink key={navLink.key} to={navLink.link} className="new-navbar-link" title={navLink.title} ><div className="new-navbar-icons">{navLink.icon} {navLink.textContent}</div></NavLink>)
                    }
                    <div className="new-nav-language-bar-container">
                        {/* Adding translation component only to translated pages */}
                        <Routes>
                            <Route exact path="/myprofile/" Component={Language} />
                        </Routes>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;