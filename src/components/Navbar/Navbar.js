import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faFileAlt, faComment, faFolderOpen} from "@fortawesome/free-solid-svg-icons";

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
        <div className="navbar-container">
            <div className={`regular-navbar ${show && 'nav-grey'}`}>
                <div className="nav-left">
                    <HashLink id="sophia" to="/#header-hash">SOPHIA <span className="last">JUNG</span></HashLink>
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
                        <HashLink to="/#contact-hash" id="contact">CONTACT</HashLink>
                    </div>
                </div>
            </div>
            <div className="mobile-nav">
                <div className="mobile-nav-option">
                    <HashLink to="/#header-hash" style={{display:'flex',flexDirection:'column'}}><span><FontAwesomeIcon className="mobile-icon" icon={faHome} /></span>HOME</HashLink>
                </div>
                <div className="mobile-nav-option">
                    <HashLink to="/#about-hash" style={{display:'flex',flexDirection:'column'}}><span><FontAwesomeIcon className="mobile-icon" icon={faUser} /></span>ABOUT</HashLink>
                </div>
                <div className="mobile-nav-option">
                    <HashLink to="/#portfolio-hash" style={{display:'flex',flexDirection:'column'}}><span><FontAwesomeIcon className="mobile-icon" icon={faFolderOpen} /></span>PORTFOLIO</HashLink>
                </div>
                <div className="mobile-nav-option">
                    <Link to="#" style={{display:'flex',flexDirection:'column'}}><span><FontAwesomeIcon className="mobile-icon" icon={faFileAlt} /></span>RESUME</Link>
                </div>
                <div className="mobile-nav-option">
                    <HashLink to="/#contact-hash" style={{display:'flex',flexDirection:'column'}}><span><FontAwesomeIcon className="mobile-icon" icon={faComment} /></span>CONTACT</HashLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar