import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

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
                <p>SOPHIA <span className="last">JUNG</span></p>
            </div>
            <div className="nav-right">
                <div className="nav-option">
                    <Link to="#" id="about">ABOUT</Link>
                </div>
                <div className="nav-option">
                    <Link to="#" id="portfolio">PORTFOLIO</Link>
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