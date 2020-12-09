import React from 'react';
import "./Strips.scss";
import { useSpring, animated } from 'react-spring';
import guardianicon from "../../media/guardian-logo.jpeg"
import petworkicon from "../../media/petwork-logo.png"
import covidicon from "../../media/covid-logo.png"
import employeeicon from "../../media/employee-logo.png"
import guardianscreen from "../../media/guardian-screenshot.png"
import petworkscreen from "../../media/petwork-screenshot.png"
import employeescreen from "../../media/employee-screenshot.png"
import covidscreen from "../../media/covid-screenshot.png"
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';

const interp = i => r => `translate3d(${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0, 0)`

function Strips() {
    const { radians } = useSpring({
        to: async next => {
          while (1) await next({ radians: 2 * Math.PI })
        },
        from: { radians: 0 },
        config: { duration: 3500 },
        reset: true,
    });
    const projects = [
        {
            title: "GUARDIAN",
            information: "A fullstack application geared towards the Executive Protection Industry. Guardian allows EP teams to coordinate missions by allowing management and agents on the ground to stay up to date with mission information. Users can view all upcoming missions and the pertinent information for each mission. This includes, weather, an embedded map with pins at each location on the mission's iterinary, and a whiteboard for team members to leave notes",
            tools: "Third Party APIs, CORS, MongoDB, Mongoose, JWT, Node.js, Express.js, React.js, Material-UI, react-google-maps, react-date-range, bcrypt, dotenv",
            id: 1,
            icon: guardianicon,
            screenshot: guardianscreen,
            repo: "https://github.com/sophia2798/guardian_frontend",
            deploy: "https://sj-guardian-react.herokuapp.com/",
        },
        {
            title: "THE SOCIAL PETWORK",
            information: "A fullstack application centered around bringing pets and their owners together. This social media-like application allows users to add their pets to a profile with generic information such as, age, breed, and hobbies. Other users can view this information to help decide whether they think another pet would be a good match for their pet. Users can also input their location which allows them to view pets in their area. Users can favorite pets and directly contact the owners to set up a playdate.",
            tools: "TOOLS: Third Party APIs, Handlebars, Express.js, Node.js, bcrypt, Express Sessions, MySQL, MySQL Workbench, Postman, Cloudinary, Sequelize, dotenv",
            id: 2,
            icon: petworkicon,
            screenshot: petworkscreen,
            repo: "https://github.com/sophia2798/social_petwork",
            deploy: "https://secret-meadow-51163.herokuapp.com/",
        },
        {
            title: "COVID-19 STATISTICS",
            information: "A predominantly front-end application that utilizes COVID statistics and geocoding API's to provide the user with current data on the COVID situation in a given area. Users can input their desired city and state code and view general statistics, nearby testing centers, and the contact information for the local health department. Additionally, users can also view a graphical representation of the COVID statistics over time. The searched cities are saved in a log which can be used to quickly view COVID information for previously searched locations. The searched cities log can also be cleared at any time.",
            tools: "Third Party APIs, jQuery, Chart.js, Moment.js, Materialize",
            id: 3,
            icon: covidicon,
            screenshot: covidscreen,
            repo: "https://github.com/sophia2798/covid_stats",
            deploy: "https://sophia2798.github.io/covid_stats/",
        },
        {
            title: "EMPLOYEE DIRECTORY",
            information: "This React.js application organizes a large directory of employees. The database of employees is retrieved from Random User API. The application uses React lifecycle methods to allow users to filter the directory by first name, last name, or date of birth. The user is also able to search for an employee's name in the search bar. The search bar also automatically provides a dropdown menu with the all the employee's name and autocomplete funcionality to help the user narrow down their search.",
            tools: "TOOLS: Third Party APIs, React.js, Axios, Moment.js",
            id: 4,
            icon: employeeicon,
            screenshot: employeescreen,
            repo: "https://github.com/sophia2798/employee_directory",
            deploy: "https://sj-employee-directory.herokuapp.com/",
        },
    ]
    return (
        <div className="strips">
            {projects.map((project, i) => (
                <div key={i} className="strip-item">
                    <animated.div className="strip-content" style={{ transform: radians.interpolate(interp(i)) }}>
                        <div className="project-pic" style={{ background: `url(${project.screenshot})` }}></div>
                        <div className="project-info">
                            <h1>{project.title}</h1>
                            <h3>DESCRIPTION</h3>
                            <p>{project.information}</p>
                            <h3>TOOLS</h3>
                            <p>{project.tools}</p>
                        </div>
                    </animated.div>
                </div>
            ))}
        </div>
    )
}

export default Strips
