import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import guardianicon from "../../media/guardian-logo.jpeg"
import petworkicon from "../../media/petwork-logo.png"
import covidicon from "../../media/covid-logo.png"
import employeeicon from "../../media/employee-logo.png"
import guardianscreen from "../../media/guardian-screenshot.png"
import petworkscreen from "../../media/petwork-screenshot.png"
import employeescreen from "../../media/employee-screenshot.png"
import covidscreen from "../../media/covid-screenshot.png"
import "./Cards.scss";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    filter: 'grayscale(50%)'
  },
}));

function Cards() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(-1);
  const projects = [
      {
          title: "GUARDIAN",
          information: "A fullstack application geared towards the Executive Protection Industry. Guardian allows EP teams to coordinate missions by allowing management and agents on the ground to stay up to date with mission information. Users can view all upcoming missions and the pertinent information for each mission. This includes, weather, an embedded map with pins at each location on the mission's iterinary, and a whiteboard for team members to leave notes",
          tools: "Third Party APIs, CORS, MongoDB, Mongoose, JWT, Node.js, Express.js, React.js, Material-UI, react-google-maps, react-date-range, bcrypt, dotenv",
          id: 1,
          icon: guardianicon,
          screenshot: guardianscreen,
      },
      {
          title: "THE SOCIAL PETWORK",
          information: "A fullstack application centered around bringing pets and their owners together. This social media-like application allows users to add their pets to a profile with generic information such as, age, breed, and hobbies. Other users can view this information to help decide whether they think another pet would be a good match for their pet. Users can also input their location which allows them to view pets in their area. Users can favorite pets and directly contact the owners to set up a playdate.",
          tools: "TOOLS: Third Party APIs, Handlebars, Express.js, Node.js, bcrypt, Express Sessions, MySQL, MySQL Workbench, Postman, Cloudinary, Sequelize, dotenv",
          id: 2,
          icon: petworkicon,
          screenshot: petworkscreen,
      },
      {
          title: "COVID-19 STATISTICS",
          information: "A predominantly front-end application that utilizes COVID statistics and geocoding API's to provide the user with current data on the COVID situation in a given area. Users can input their desired city and state code and view general statistics, nearby testing centers, and the contact information for the local health department. Additionally, users can also view a graphical representation of the COVID statistics over time. The searched cities are saved in a log which can be used to quickly view COVID information for previously searched locations. The searched cities log can also be cleared at any time.",
          tools: "Third Party APIs, jQuery, Chart.js, Moment.js, Materialize",
          id: 3,
          icon: covidicon,
          screenshot: covidscreen,
      },
      {
          title: "EMPLOYEE DIRECTORY",
          information: "This React.js application organizes a large directory of employees. The database of employees is retrieved from Random User API. The application uses React lifecycle methods to allow users to filter the directory by first name, last name, or date of birth. The user is also able to search for an employee's name in the search bar. The search bar also automatically provides a dropdown menu with the all the employee's name and autocomplete funcionality to help the user narrow down their search.",
          tools: "TOOLS: Third Party APIs, React.js, Axios, Moment.js",
          id: 4,
          icon: employeeicon,
          screenshot: employeescreen,
      },
  ]

  const handleExpandClick = (i) => {
    setExpanded(expanded === i ? -1 : i);
  };

  return (
    <div className="cards">
        {projects.map((project, i) => (
            <div className="map-card">
            <Card className="portfolio-card" key={project.id}>
            <CardHeader
            avatar={
                <Avatar aria-label="recipe" style={{backgroundColor:'black'}}>
                <img className="icon-img" src={project.icon} alt="project-logo"/>
                </Avatar>
            }
            action={
                <IconButton
                onClick={() => handleExpandClick(i)}
                aria-expanded={expanded === i}
                aria-label="show more"
                >
                <InfoOutlinedIcon className="info-icon" style={{color: 'white'}}/>
                </IconButton>
            }
            title={project.title}
            // subheader="September 14, 2016"
            />
            <CardMedia
            className={classes.media}
            image={project.screenshot}
            title="Project Image"
            />
            <CardContent>
            </CardContent>
            <Collapse in={expanded === i} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography className="expand-info" paragraph>
                    <h3>DESCRIPTION</h3>
                    {project.information}
                </Typography>
                <Typography className="expand-info" paragraph>
                    <h3>TOOLS</h3>
                    {project.tools}
                </Typography>
            </CardContent>
            </Collapse>
        </Card>
        </div>
        ))}
    </div>
  );
}

export default Cards;