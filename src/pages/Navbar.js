import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";
import logo from './logo_transparent.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 1150) {
            setShowMenu(false);
        }
    };
    return (
        <header className="header">
            <nav className="nav container">
                <NavLink to="/" className="nav__logo" style={{ display: "flex", alignItems: "center" }}>
                    <img src={logo} alt="Logo" className="nav__logo-icon" />
                    <span style={{ color: "#FF00F8", fontFamily: "sans-serif", fontWeight: "530" , fontSize: "35px"}}>DisruptAI</span>
                </NavLink>

                <div
                    className={`nav__menu ${showMenu ? "show-menu" : ""}`}
                    id="nav-menu"
                >
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                to="/about"
                                className="nav__link"
                                onClick={closeMenuOnMobile}
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                to="/contact"
                                className="nav__link"
                                onClick={closeMenuOnMobile}
                            >
                                Inquiry Form
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                to="/notes"
                                className="nav__link"
                                onClick={closeMenuOnMobile}
                            >
                                Beta App
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/notes" className="nav__link nav__cta">
                                Get Started
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                        <IoClose />
                    </div>
                </div>

                <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                    <IoMenu />
                </div>
            </nav>
        </header>
    );
};


export default Navbar;