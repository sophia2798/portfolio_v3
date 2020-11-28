import React, { useState, useEffect } from 'react';
import "./Navbar.css";

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
                    ABOUT
                </div>
                <div className="nav-option">
                    PORTFOLIO
                </div>
                <div className="nav-option">
                    RESUME
                </div>
                <div className="nav-option">
                    CONTACT
                </div>
            </div>
        </div>
    )
}

export default Navbar