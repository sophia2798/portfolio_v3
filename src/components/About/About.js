import React from 'react';
import "./About.css";
import bioImg from "../../media/bioimg.JPG";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";

function About() {
    return (
        <div className="about-container" id="about-hash">
            <section className="short-bio">
                <img className="bio-pic" src={bioImg} alt="bio picture"/>
                <div className="bio-content">
                    <h1><span style={{color:'white'}}><span className="tag">&lt;</span> DEVELOPER <span className="tag">&gt;</span></span> <span style={{color:'white'}}><span className="tag">&lt;</span> DESIGNER <span className="tag">&gt;</span></span> <span style={{color:'white'}}><span className="tag">&lt;</span> DREAMER <span className="tag">&gt;</span></span></h1>
                    <h1 id="bio-small-h1">
                        <span style={{color:'white'}}><span className="tag">&lt;</span> DEVELOPER <span className="tag">&gt;</span></span>
                        <br/>
                        <span style={{color:'white'}}><span className="tag">&lt;</span> DESIGNER <span className="tag">&gt;</span></span>
                        <br/>
                        <span style={{color:'white'}}><span className="tag">&lt;</span> DREAMER <span className="tag">&gt;</span></span>
                    </h1>
                    <p>Hello, nice to meet you! I'm Sophia and I am a full-stack web developer with experience managing project teams and GitHub work flow. I graduated from the University of Washington in 2020 with a B.S. in Applied Physics. I am comfortable with both back-end and front-end work and always welcome the opportunity to learn from any challenge!<br/><br/>If I'm not coding, you can find me with my nose in a good book, spending time with my dogs, listening to music, playing the piano, or tinkering with my PC build!<br/><br/>I am passionate about working with people and would love to help you turn your next big idea into a reality!</p>
                </div>
            </section>
            <div className="blend">
            </div>
            <Skills/>
            <Footer/>
        </div>
    )
}

export default About
