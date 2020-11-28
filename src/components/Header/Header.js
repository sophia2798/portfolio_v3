import React from 'react';
import "./Header.css";
import Typing from "react-typing-animation";

function Header() {
    const TypingComponent = () => (
        <Typing speed={100}>
            <h1 className="welcome">WELCOME! <br/><br/> MY NAME IS SOPHIA JUNG</h1>
        </Typing>
    );

    return (
        <div className="header-container">
            <div className="header-background">
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
                <div className="circle circle4"></div>
                <div className="circle circle5"></div>
                <div className="circle circle6"></div>
                <div className="circle circle7"></div>
            </div>
            <div className="header-content">
                <article className="typing-comp">
                    <TypingComponent/>
                </article>
            </div>
            <div className="blend"></div>
        </div>
    )
}

export default Header
