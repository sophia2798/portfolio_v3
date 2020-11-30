import React from 'react';
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    return (
        <div className="contact">
            {/* <h1 id="contact-header">CONTACT</h1> */}
            <div className="aside">
                <h3 id="form-h3">I'D LOVE TO HEAR ABOUT YOUR IDEAS ! FEEL FREE TO FILL OUT THE CONTACT FORM TO SEND ME AN EMAIL OR YOU CAN REACH OUT VIA MY GITHUB, FACEBOOK, OR LINKEDIN!</h3>
            </div>
            <div className="contact-blend"></div>
            <div className="contact-form-container">
                <h3 style={{color:'#272727',textAlign:'center'}}>CONTACT FORM</h3>
                <form className="contact-form">
                    <div id="name-email">
                    <div className="label" style={{marginRight: "4%"}}>
                    <label htmlFor="name">FULL NAME</label>
                    <input type="text" id="name"/>
                    </div>
                    <div className="label">
                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <input type="text" id="email"/>
                    </div>
                    </div>
                    <div id="message-label">
                    <label htmlFor="message">MESSAGE</label>
                    <textarea type="text" id="message"/>
                    </div>
                    <input type="submit" id="contact-btn" value="SEND"/>
                </form>
            </div>
        </div>
    )
}

export default Contact
