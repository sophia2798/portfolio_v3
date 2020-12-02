import React, { useState, useEffect } from 'react';
import "./Slider.css";
import covid from "../../media/covid.gif";
import employeedirectory from "../../media/employeedirectory.gif";
import guardian from "../../media/guardian.gif";
import passwordgenerator from "../../media/passwordgenerator.gif";
import planner from "../../media/planner.gif";
import petwork from "../../media/petwork.gif";
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';


function Slider() {
    const [counter, setCounter] = useState(1);
    const [opacity, setOpacity] = useState(false);

    const countSlider = (num) => {
        let nextNum = num + 1;
        if (nextNum > 6) {
            nextNum = 1;
        }
        setCounter(nextNum);
        setOpacity(false);
        console.log(counter);
    };

    const countDownSlider = (num) => {
        let nextNum = num - 1;
        if (nextNum < 1) {
            nextNum = 6;
        }
        setCounter(nextNum);
        setOpacity(false);
    };

    const toggleOpacity = () => {
        setOpacity(!opacity);
        console.log(opacity);
    };

    // useEffect(() => {
    //     console.log(counter)
    // },[]);

    return (
        <div className="slider">
            <div className="slider-container">
                <div className="slide-img-container">
                    <img style={(counter === 1) ? {opacity: 1} : {opacity: 0}} src={guardian} alt="guardian gif" className="slider-img"/>
                    <div style={(opacity && counter === 1) ? {opacity:1} : {opacity:0}} className="overlay" onClick={toggleOpacity}>
                        <h3>GUARDIAN</h3>
                        <br/>
                        <p>A fullstack application geared towards the Executive Protection Industry. Guardian allows EP teams to coordinate missions by allowing management and agents on the ground to stay up to date with mission information. Users can view all upcoming missions and the pertinent information for each mission. This includes, weather, an embedded map with pins at each location on the mission's iterinary, and a whiteboard for team members to leave notes.</p>
                        <br/>
                        <p>TOOLS: Third Party APIs, CORS, MongoDB, Mongoose, JWT, Node.js, Express.js, React.js, Material-UI, react-google-maps, react-date-range, bcrypt, Postman, dotenv</p>
                    </div>
                </div>
                <div className="slide-img-container">
                    <img style={(counter === 2) ? {opacity: 1, borderColor:'#b1a296'} : {opacity: 0}} src={covid} alt="covid gif" className="slider-img"/>
                    <div style={(opacity && counter === 2) ? {opacity:1} : {opacity:0}} className="overlay" onClick={toggleOpacity}>
                        <h3>COVID STATISTICS</h3>
                        <br/>
                        <p>A predominantly front-end application that utilizes COVID statistics and geocoding API's to provide the user with current data on the COVID situation in a given area. Users can input their desired city and state code and view general statistics, nearby testing centers, and the contact information for the local health department. Additionally, users can also view a graphical representation of the COVID statistics over time. The searched cities are saved in a log which can be used to quickly view COVID information for previously searched locations. The searched cities log can also be cleared at any time.</p>
                        <br/>
                        <p>TOOLS: Third Party APIs, jQuery, Chart.js, Moment.js, Materialize</p>
                    </div>
                </div>
                <div className="slide-img-container">
                    <img style={(counter === 3) ? {opacity: 1, borderColor:'#739a95'} : {opacity: 0}} src={petwork} alt="petwork gif" className="slider-img"/>
                    <div style={(opacity && counter === 3) ? {opacity:1} : {opacity:0}} className="overlay" onClick={toggleOpacity}>
                        <h3>THE SOCIAL PETWORK</h3>
                        <br/>
                        <p>A fullstack application centered around bringing pets and their owners together. This social media-like application allows users to add their pets to a profile with generic information such as, age, breed, and hobbies. Other users can view this information to help decide whether they think another pet would be a good match for their pet. Users can also input their location which allows them to view pets in their area. Users can favorite pets and directly contact the owners to set up a playdate.</p>
                        <br/>
                        <p>TOOLS: Third Party APIs, Handlebars, Express.js, Node.js, bcrypt, Express Sessions, MySQL, MySQL Workbench, Postman, Cloudinary, Sequelize, dotenv</p>
                    </div>
                </div>
                <div className="slide-img-container">
                    <img style={(counter === 4) ? {opacity: 1} : {opacity: 0}} src={employeedirectory} alt="employee directory gif" className="slider-img"/>
                    <div style={(opacity && counter === 4) ? {opacity:1} : {opacity:0}} className="overlay" onClick={toggleOpacity}>
                        <h3>EMPLOYEE DIRECTORY</h3>
                        <br/>
                        <p>This React.js application organizes a large directory of employees. The database of employees is retrieved from Random User API. The application uses React lifecycle methods to allow users to filter the directory by first name, last name, or date of birth. The user is also able to search for an employee's name in the search bar. The search bar also automatically provides a dropdown menu with the all the employee's name and autocomplete funcionality to help the user narrow down their search.</p>
                        <br/>
                        <p>TOOLS: Third Party APIs, React.js, Axios, Moment.js</p>
                    </div>
                </div>
                <div className="slide-img-container">
                    <img style={(counter === 5) ? {opacity: 1, borderColor:'#b1a296'} : {opacity: 0}} src={passwordgenerator} alt="password gif" className="slider-img"/>
                    <div style={(opacity && counter === 5) ? {opacity:1} : {opacity:0}} className="overlay" onClick={toggleOpacity}>
                        <h3>PASSWORD GENERATOR</h3>
                        <br/>
                        <p>This applications allows a user to create a randomly generated password. They can choose any combination of preset parameters, such as length and inclusion of special characters, lowercase letters, or uppercase letters. After generating the password, the user can copy the password to their clipboard.</p>
                        <br/>
                        <p>TOOLS: HTML, CSS, JavaScript, DOM Manipulation</p>
                    </div>
                </div>
                <div className="slide-img-container">
                    <img style={(counter === 6) ? {opacity: 1, borderColor:'#739a95'} : {opacity: 0}} src={planner} alt="planner gif" className="slider-img"/>
                    <div style={(opacity && counter === 6) ? {opacity:1} : {opacity:0}} className="overlay" onClick={toggleOpacity}>
                        <h3>WORK DAY PLANNER</h3>
                        <br/>
                        <p>A simple planner application that allows a user to track their activites for a workday. The planner automatically color codes the hourly blocks depending on its past, present, or future status. Users may update the information in the planner at any time and save it to local storage.</p>
                        <br/>
                        <p>TOOLS: HTML, CSS, JavaScript, DOM Manipulation, localStorage, Moment.js, jQuery</p>
                    </div>
                </div>
            </div>
            <div className="slider-arrows">
                <h1 className="arrows" id="arrow-left" onClick={() => countDownSlider(counter)} style={{left:'10%'}}>&lt;</h1>
                <h1 className="arrows" id="arrow-right" onClick={() => countSlider(counter)} style={{right:'10%'}}>&gt;</h1>
            </div>
            <div className="slider-info">
                <h3>CLICK THE GIF TO VIEW MORE INFORMATION ABOUT THE PROJECT!</h3>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                    <section className="material-links"><a target="_blank" className="info-link" {...(counter === 1) ? {href: "https://sj-guardian-react.herokuapp.com/"} : (counter === 2) ? {href: "https://sophia2798.github.io/covid_stats/"} : (counter === 3) ? {href: "https://secret-meadow-51163.herokuapp.com/"} : (counter === 4) ? {href: "https://sj-employee-directory.herokuapp.com/"} :(counter === 5) ? {href: "https://sophia2798.github.io/password_generator/"} : (counter === 6) ? {href: "https://sophia2798.github.io/work_planner/"} : null} ><LanguageIcon className="material-icon"/></a>VIEW DEPLOYED PAGE</section>
                    <section className="material-links"><a target="_blank" className="info-link" {...(counter === 1) ? {href: "https://github.com/sophia2798/project3_frontend"} : (counter === 2) ? {href: "https://github.com/sophia2798/covid_stats"} : (counter === 3) ? {href: "https://github.com/sophia2798/social_petwork"} : (counter === 4) ? {href: "https://github.com/sophia2798/employee_directory"} :(counter === 5) ? {href: "https://github.com/sophia2798/password_generator"} : (counter === 6) ? {href: "https://github.com/sophia2798/work_planner"} : null} ><GitHubIcon className="material-icon"/></a>VIEW GITHUB REPO</section>
                </div>
            </div>
        </div>
    )
}

export default Slider
