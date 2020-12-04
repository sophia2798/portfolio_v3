import React from 'react';
import "./Portfolio.css";
import Slider from "../Slider/Slider";
import Cards from "../Cards/Cards";

function Portfolio() {

    return (
        <div className="portfolio-container" id="portfolio-hash">
            <h1>PORTFOLIO</h1>
            {/* <Slider/> */}
            <section className="card-container">
            <Cards/>
            </section>
        </div>
    )
}

export default Portfolio
