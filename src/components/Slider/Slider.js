import React, { useState, useEffect } from 'react';
import "./Slider.css";
import covid from "../../media/covid.gif";
import employeedirectory from "../../media/employeedirectory.gif";
import guardian from "../../media/guardian.gif";
import passwordgenerator from "../../media/passwordgenerator.gif";
import planner from "../../media/planner.gif";
import petwork from "../../media/petwork.gif";


function Slider() {
    const [counter, setCounter] = useState(1);

    const countSlider = (num) => {
        let nextNum = num + 1;
        if (nextNum > 6) {
            nextNum = 1;
        }
        setCounter(nextNum);
        console.log(counter);
    };

    const countDownSlider = (num) => {
        let nextNum = num - 1;
        if (nextNum < 1) {
            nextNum = 6;
        }
        setCounter(nextNum);
    };

    // useEffect(() => {
    //     console.log(counter)
    // },[]);

    return (
        <div className="slider">
            <div className="slider-container">
                <h1 onClick={() => countDownSlider(counter)} style={{left:'10%'}}>&lt;</h1>
                <img style={(counter === 1) ? {opacity: 1} : {opacity: 0}} src={guardian} alt="guardian gif" className="slider-img"/>
                <img style={(counter === 2) ? {opacity: 1} : {opacity: 0}} src={covid} alt="covid gif" className="slider-img"/>
                <img style={(counter === 3) ? {opacity: 1} : {opacity: 0}} src={petwork} alt="petwork gif" className="slider-img"/>
                <img style={(counter === 4) ? {opacity: 1} : {opacity: 0}} src={employeedirectory} alt="employee directory gif" className="slider-img"/>
                <img style={(counter === 5) ? {opacity: 1} : {opacity: 0}} src={passwordgenerator} alt="password gif" className="slider-img"/>
                <img style={(counter === 6) ? {opacity: 1} : {opacity: 0}} src={planner} alt="planner gif" className="slider-img"/>
                <h1 onClick={() => countSlider(counter)} style={{right:'10%'}}>&gt;</h1>
            </div>
            <div className="slider-info">
                <div style={(counter === 1) ? {opacity: 1} : {opacity: 0}} className="slider-info-block">
                <h3>GUARDIAN</h3>
                <br/>
                <p>A fullstack application geared towards the Executive Protection Industry. Guardian allows EP teams to coordinate missions by allowing management and agents on the ground to stay up to date with mission information. Users can view all upcoming missions and the pertinent information for each mission. This includes, weather, an embedded map with pins at each location on the mission's iterinary, and a whiteboard for team members to leave notes.</p>
                <br/>
                <p>TOOLS: Third Party APIs, CORS, MongoDB, Mongoose, JWT, Node.js, Express.js, React.js, Material-UI, react-google-maps, react-date-range, bcrypt, Postman, dotenv</p>
                </div>
                <div style={(counter === 2) ? {opacity: 1} : {opacity: 0}} className="slider-info-block">
                <h3>COVID STATISTICS</h3>
                <br/>
                <p>A predominantly front-end application that utilizes COVID statistics and geocoding API's to provide the user with current data on the COVID situation in a given area. Users can input their desired city and state code and view general statistics, nearby testing centers, and the contact information for the local health department. Additionally, users can also view a graphical representation of the COVID statistics over time. The searched cities are saved in a log which can be used to quickly view COVID information for previously searched locations. The searched cities log can also be cleared at any time.</p>
                <br/>
                <p>TOOLS: Third Party APIs, jQuery, Chart.js, Moment.js, Materialize</p>
                </div>
                <div style={(counter === 3) ? {opacity: 1} : {opacity: 0}} className="slider-info-block">
                <h3>THE SOCIAL PETWORK</h3>
                <br/>
                <p>A fullstack application centered around bringing together pets and pet owners. This social media centered application allows users to add their pets to a profile with generic information about the pet. The user can also input their location which allows them to view pets in their area. Users can favorite pets and directly contact the owners to set up a playdate.</p>
                <br/>
                <p>TOOLS: Third Party API's, Handlebars, Express.js, Node.js, bcrypt, Express Sessions, MySQL, MySQL Workbench, Postman, Cloudinary, Sequelize, dotenv</p>
                </div>
                <div style={(counter === 4) ? {opacity: 1} : {opacity: 0}} className="slider-info-block">
                <h3>EMPLOYEE DIRECTORY</h3>
                <br/>
                <p>This React.js application organizes a large directory of employees. The application allows users to filter the directory by first name, last name, or date of birth. It also allows the user to search for an employee's name in the search bar. The search bar also automatically provides a dropdown menu with the existing employee's name to help the user narrow down their search.</p>
                <p>TOOLS: Third Party APIs, React.js, Axios, Moment.js</p>
                </div>
                <div style={(counter === 5) ? {opacity: 1} : {opacity: 0}} className="slider-info-block">
                <h3>PASSWORD GENERATOR</h3>
                <br/>
                <p>This applications allows a user to create a randomly generated password. They can choose any combination of preset parameters, such as length and inclusion of special characters, lowercase letters, or uppercase letters. After generating the password, the user can copy the password to their clipboard.</p>
                <br/>
                <p>TOOLS: HTML, CSS, JavaScript, DOM Manipulation</p>
                </div>
                <div style={(counter === 6) ? {opacity: 1} : {opacity: 0}} className="slider-info-block">
                <h3>WORK DAY PLANNER</h3>
                <br/>
                <p>A simple planner application that allows a user to track their activites for a workday. The planner automatically color codes the hourly blocks depending on its past, present, or future status. Users may update the information in the planner at any time and save it to local storage.</p>
                <br/>
                <p>TOOLS: HTML, CSS, JavaScript, DOM Manipulation, localStorage, Moment.js, jQuery</p>
                </div>
            </div>
        </div>
    )
}

export default Slider
