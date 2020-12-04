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
import icon from "../../media/guardian-logo.jpeg"
import "./Cards.scss";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

function Cards() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(-1);
  const projects = [
      {
          title: "GUARDIAN",
          information: "Application for EP industry",
          id: 1
      },
      {
          title: "THE SOCIAL PETWORK",
          information: "Social media for pets",
          id: 2
      },
      {
          title: "COVID-19 STATISTICS",
          information: "Page for local COVID-19 data",
          id: 3
      },
  ]

  const handleExpandClick = (i) => {
    setExpanded(expanded === i ? -1 : i);
  };

  return (
    <div className="cards">
        {projects.map((project, i) => (
            <div className="test">
            <Card className="portfolio-card" key={project.id}>
            <CardHeader
            avatar={
                <Avatar aria-label="recipe" style={{backgroundColor:'black'}}>
                <img className="icon-img" src={icon} alt="project-logo"/>
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
            image="https://t4.ftcdn.net/jpg/02/91/24/27/360_F_291242770_z3XC7rJB1Mvc5jVMsEY9Dx2xMrX4sxUi.jpg"
            title="Project Image"
            />
            <CardContent>
            </CardContent>
            <Collapse in={expanded === i} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography className="expand-info" paragraph>ACTIVITIES LIST</Typography>
            </CardContent>
            </Collapse>
        </Card>
        </div>
        ))}
    </div>
  );
}

export default Cards;