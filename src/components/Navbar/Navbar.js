import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        })
    }, [])

    return (
        <div className={`navbar-container ${show && 'nav-grey'}`}>
            <div className="nav-left">
                <HashLink to="/#header-hash">SOPHIA <span className="last">JUNG</span></HashLink>
            </div>
            <div className="nav-right">
                <div className="nav-option">
                    <HashLink to="/#about-hash" id="about">ABOUT</HashLink>
                </div>
                <div className="nav-option">
                    <HashLink to="/#portfolio-hash" id="portfolio">PORTFOLIO</HashLink>
                </div>
                <div className="nav-option">
                    <Link to="#" id="resume">RESUME</Link>
                </div>
                <div className="nav-option">
                    <Link to="#" id="contact">CONTACT</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar