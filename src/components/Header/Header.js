import React from 'react';
import "./Header.css";
import Typing from "react-typing-animation";

function Header() {
    const TypingComponent = () => (
        <Typing speed={100}>
            <h1>WELCOME! <br/> MY NAME IS SOPHIA JUNG</h1>
        </Typing>
    );

    return (
        <div className="header-container">
            <TypingComponent/>
        </div>
    )
}

export default Header
