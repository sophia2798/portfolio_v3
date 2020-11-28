import React from 'react';
import "./Header.css";
import Typing from "react-typing-animation";

function Header() {
    const TypingComponent = () => (
        <Typing speed={150}>
            <h1 className="welcome">WELCOME</h1>
            <div className="subheader">
            <Typing.Speed ms={80}/>
            <h1>MY NAME IS SOPHIA JUNG</h1>
            <Typing.Speed ms={60}/>
            <h2><span style={{color:'#d5dbda'}}><span className="tag">&lt;</span> DEVELOPER <span className="tag">&gt;</span></span> <span style={{color:'#d5dbda'}}><span className="tag">&lt;</span> DESIGNER <span className="tag">&gt;</span></span> <span style={{color:'#d5dbda'}}><span className="tag">&lt;</span> DREAMER <span className="tag">&gt;</span></span></h2>
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
                </article>
            </div>
        </div>
    )
}

export default Header
