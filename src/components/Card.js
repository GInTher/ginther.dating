import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/";
import { Favorite, Close } from "@material-ui/icons";
import { green, grey, red } from "@material-ui/core/colors";
import { Adams } from "../data/adams";
import { rejectedMessages } from "../data/rejectedMessages";

const useStyles = makeStyles(theme => ({
  container: {
    position: "relative",
    height: "80vh"
  },
  card: {
    // boxShadow: `0 0 10px ${grey[500]}`,
    border: `1px solid ${grey[500]}`,
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    position: "absolute",
    cursor: "pointer",
    textAlign: "center",
    borderRadius: theme.spacing(2),
    maxWidth: "500px",
    background: "#fff",
    userSelect: "none",
    // TODO: Add willChange
    // willChange: 
    transition: "0.2s opacity",
    "&:first-child": {
      zIndex: 3
    },
    "&:nth-child(2)": {
      top: -theme.spacing(1),
      zIndex: 2
    },
    "&:nth-child(3)": {
      top: -theme.spacing(2),
      zIndex: 1
    }
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
    color: green[400]
  }
}));

function SignUpForm() {
  const classes = useStyles();

  const [matched, setMatched] = useState(false);

  const swipeRight = () => {
    console.log("Hello");
    Adams[0].matched = true;
    setMatched(true);
  };
  
  const swipeLeft = () => {
    // TODO: Sometimes this returns undefined
    alert(rejectedMessages[Math.round(Math.random() * rejectedMessages.length)]);
  };

  const renderCards = Adams.map((obj, index) => {
    return obj.matched ? null : (
      <div className={classes.card} key={index}>
        <img src={obj.imageSrc} alt={obj.imageAlt} className={classes.image} />
        <button
          className={`${classes.button} ${classes.swipeLeft}`}
          onClick={swipeLeft}
        >
          <Close />
        </button>
        <button
          className={`${classes.button} ${classes.swipeRight}`}
          onClick={swipeRight}
        >
          <Favorite />
        </button>
        <h3>Adam Ginther</h3>
        <p>{obj.occupation}</p>
      </div>
    );
  });

  return <div className={classes.container}>{renderCards}</div>;
}

export default SignUpForm;
