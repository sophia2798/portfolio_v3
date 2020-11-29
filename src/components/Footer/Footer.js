import React from 'react';
import "./Footer.css";
import logo from "../../media/reactlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <div className="footer" id="contact-hash">
            <div className="contact-info">
                <a target="_blank" href="https://github.com/sophia2798" className="contact-links"><FontAwesomeIcon className="contact-icon" icon={faGithub}/></a>
                <a target="_blank" href="https://www.facebook.com/sophia.jung.9" className="contact-links"><FontAwesomeIcon className="contact-icon" icon={faFacebook}/></a>
                <a target="_blank" href="https://www.linkedin.com/in/sophia2798/" className="contact-links"><FontAwesomeIcon className="contact-icon" id="linkedin-icon" icon={faLinkedin}/></a>
                <a target="_blank" className="contact-links"><FontAwesomeIcon className="contact-icon" icon={faEnvelope}/></a>
            </div>
            <p><small>CREATED BY SOPHIA JUNG &#169; 2020</small></p>
            <div style={{display:'flex', justifyContent:'center', marginTop:'0.4rem'}}>
                <p style={{paddingTop:'0.3rem'}}><small>MADE WITH</small></p>
                &nbsp;
                <img id="react-logo" src={logo} alt="react logo"/>
            </div>
            <div className="thankyou">
                <h2>THANK YOU FOR VIEWING MY PAGE! IF YOU WOULD LIKE TO GET IN TOUCH OR LEARN MORE ABOUT ME, FEEL FREE TO VISIT ANY OF THE LINKS BELOW!</h2>
            </div>
        </div>
    )
}

export default Footer
