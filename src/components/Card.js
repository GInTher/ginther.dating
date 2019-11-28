import React from "react";
import { Paper, makeStyles } from "@material-ui/core/";
import { Favorite, Close } from "@material-ui/icons";
import { green, grey, red } from "@material-ui/core/colors";
import { Adams } from "../data/adams";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    position: "relative",
    cursor: "pointer",
    textAlign: "center",
    borderRadius: theme.spacing(2),
  },
  image: {
    borderRadius: theme.spacing(2),
    display: "block",
    width: "100%",
    pointerEvents: "none"
  },
  button: {
    background: "#fff",
    position: "absolute",
    border: "1px solid grey",
    padding: theme.spacing(2),
    cursor: "pointer",
    borderRadius: "50%",
    boxShadow: `0 0 10px ${grey[100]}`,
    transform: "translateY(-50%)"
  },
  swipeLeft: {
    left: theme.spacing(4),
    color: red[400]
  },
  swipeRight: {
    right: theme.spacing(4),
    color: green[400],
  }
}));

const setMatched = () => {
  console.log("It was a match!");
}

const setDeclined = () => {
  console.log("It was not a match :(");
}

function SignUpForm() {
  const classes = useStyles();

  return Adams.map(i => {
    return !i.matched ? (
      <Paper elevation={3} className={classes.container} key={i.occupation}>
        <img
          src={i.imageSrc}
          alt={i.imageAlt}
          className={classes.image}
        />
        <button className={`${classes.button} ${classes.swipeLeft}`}>
          <Close onClick={setDeclined} />
        </button>
        <button className={`${classes.button} ${classes.swipeRight}`}>
          <Favorite onClick={setMatched} />
        </button>
        <h3>Adam Ginther</h3>
        <p>{i.occupation}</p>
      </Paper>
    ) : null;
  });
}

export default SignUpForm;
