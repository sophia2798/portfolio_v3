import React from 'react';
import "./Header.css";
import Typing from "react-typing-animation";

function Header() {
    const TypingComponent = () => (
        <Typing speed={150}>
            <h1 className="welcome">WELCOME</h1>
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
                    <div className="subheader">
                        <h1>MY NAME IS SOPHIA JUNG</h1>
                        <h2><span className="tag">&lt;</span> FULL-STACK WEB DEVELOPER <span className="tag">&gt;</span></h2>
                    </div>
                </article>
            </div>
            <div className="blend"></div>
        </div>
    )
}

export default Header
