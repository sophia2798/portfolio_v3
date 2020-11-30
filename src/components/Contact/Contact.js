import React, { useState } from 'react';
import "./Contact.css";
import axios from "axios";

function Contact() {
    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        message: ""
    });


    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setContactForm({
          ...contactForm,
          [name]: value,
        });
    };

    const handleSubmit = event => {
        event.preventDefault();

        axios.post('https://sj-portfolio-backend.herokuapp.com/send', contactForm).then(response => {
            console.log(response)
        }).catch(err => console.log(err));

        setContactForm ({
            name: "",
            email: "",
            message: ""
        })
    }

    return (
        <div className="contact">
            {/* <h1 id="contact-header">CONTACT</h1> */}
            <div className="aside">
                <h3 id="form-h3">I'D LOVE TO HEAR ABOUT YOUR IDEAS ! FEEL FREE TO FILL OUT THE CONTACT FORM TO SEND ME AN EMAIL OR YOU CAN REACH OUT VIA MY GITHUB, FACEBOOK, OR LINKEDIN!</h3>
            </div>
            <div className="contact-blend"></div>
            <div className="contact-form-container">
                <h3 style={{color:'#272727',textAlign:'center'}}>CONTACT FORM</h3>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div id="name-email">
                    <div className="label" style={{marginRight: "4%"}}>
                    <label htmlFor="name">FULL NAME</label>
                    <input value={contactForm.name} onChange={handleInputChange} type="text" id="name" name="name"/>
                    </div>
                    <div className="label">
                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <input value={contactForm.email} onChange={handleInputChange} type="text" id="email" name="email"/>
                    </div>
                    </div>
                    <div id="message-label">
                    <label htmlFor="message">MESSAGE</label>
                    <textarea value={contactForm.message} onChange={handleInputChange} type="text" id="message" name="message"/>
                    </div>
                    <input type="submit" id="contact-btn" value="SEND"/>
                </form>
            </div>
        </div>
    )
}

export default Contact
