import React from 'react';
import "./Header.sass";
import Typing from "react-typing-animation";
import logo from "../../media/logo.png";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 20}px, ${y / 20}px, 0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px, ${y / 8}px, 0)`;

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

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 }}));

    return (
        <div className="header-container" id="header-hash" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y)})}>
            <animated.div className="header-background" style={{ transform: props.xy.interpolate(trans1) }}/>
            <div className="header-content">
                <animated.div className="typing-comp" style={{ transform: props.xy.interpolate(trans2) }}>
                    <TypingComponent/>
                    <div id="logo-container">
                    <img src={logo} alt="logo" id="logo"/>
                    </div>
                </animated.div>
            </div>
        </div>
    )
}

export default Header