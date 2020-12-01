import React from 'react';
import "./Header.sass";
import Typing from "react-typing-animation";
import logo from "../../media/logo.png";

function Header() {
    const TypingComponent = () => (
        <Typing speed={150}>
            <h1 className="welcome">WELCOME</h1>
            <div className="subheader">
            <Typing.Speed ms={60}/>
            <h1>MY NAME IS SOPHIA JUNG</h1>
            </div>
        </Typing>
    );

    return (
        <div className="header-container" id="header-hash">
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
                    <div id="logo-container">
                    <img src={logo} alt="logo" id="logo"/>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Header