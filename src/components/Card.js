import React from "react";
import { Paper, makeStyles } from "@material-ui/core/";
import engineer from "../images/engineer.jpg";
import { Favorite, Close } from "@material-ui/icons";
import { green, red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(3, 2),
    position: "relative",
    cursor: "pointer",
  },
  image: {
    display: "block",
    width: "100%",
    userSelect: "none"
  },
  button: {
    background: "none",
    position: "absolute",
    border: "1px solid grey",
    padding: theme.spacing(2),
    cursor: "pointer",
    borderRadius: "50%",
    boxShadow: "0 0 5px #ccc",
  },
  swipeLeft: {
    left: theme.spacing(4),
      color: red[400],
  },
  swipeRight: {
      right: theme.spacing(4),
      color: green[400],
  }
}));

const Adams = [
  {
    imageAlt: "Handsome man, sitting at a computer",
    imageName: "engineer",
    occupation: "Software Engineer",
  },
  {
    imageAlt: "Handsome man, arresting somebody",
    imageName: "police-officer",
    occupation: "Police Officer",
    matched: true
  }
];

function SignUpForm() {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.container}>
      <img
        src={engineer}
        alt={"Handsome man at the computer"}
        className={classes.image}
      />
      <button className={`${classes.button} ${classes.swipeLeft}`}>
        <Close />
      </button>
      <button className={`${classes.button} ${classes.swipeRight}`}>
        <Favorite />
      </button>
      <h3>Adam Ginther</h3>

      {Adams.map((i) => {
        return <p>{i.occupation}</p>;
      })}
    </Paper>
  );
}

export default SignUpForm;
