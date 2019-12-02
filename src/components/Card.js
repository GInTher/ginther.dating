import React from "react";
import { makeStyles } from "@material-ui/core/";
import MatchedDialog from "./MatchedDialog";
import { Favorite, Close } from "@material-ui/icons";
import { green, grey, red } from "@material-ui/core/colors";
import { Adams } from "../data/adams";
import { rejectedMessages } from "../data/rejectedMessages";

const useStyles = makeStyles(theme => ({
  // TODO: Backdrop is so dark because of all the modals being overlayed on top of each other
  container: {
    position: "relative",
  },
  card: {
    // boxShadow: `0 0 10px ${grey[500]}`,
    minHeight: "400px",
    marginTop: theme.spacing(1),
    position: "absolute",
    cursor: "pointer",
    textAlign: "center",
    borderRadius: theme.spacing(2),
    left: 0,
    right: 0,
    margin: "0 auto",
    maxWidth: "400px",
    background: "#fff",
    userSelect: "none",
    // TODO: Add willChange
    // willChange: 
    transition: "0.2s opacity",
    "&:first-child": {
      zIndex: 3
    },
    "&:nth-child(2)": {
      top: theme.spacing(3),
      zIndex: 2,
      opacity: 0.9,
      transform: "scale(0.95)",
      background: "#eee",
    },
    "&:nth-child(3)": {
      top: theme.spacing(6),
      zIndex: 1,
      opacity: 0.5,
      transform: "scale(0.89)",
      backround: "#ddd",
    }
  },
  name: {
    marginBottom: 0,
  },
  occupation: {
    margin: theme.spacing(1, 0, 3),
  },
  image: {
    borderRadius: theme.spacing(2, 2, 0, 0),
    display: "block",
    width: "100%",
    pointerEvents: "none"
  },
  burst: {
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%",
  },
  button: {
    background: "#fff",
    position: "absolute",
    border: `1px solid ${grey[400]}`,
    padding: theme.spacing(2),
    cursor: "pointer",
    borderRadius: "50%",
    boxShadow: `0 0 4px ${grey[500]}`,
    transform: "translateY(-50%)"
  },
  swipeLeft: {
    left: theme.spacing(4),
    color: red[400]
  },
  swipeRight: {
    right: theme.spacing(4),
    color: green[400],
    "& svg": {
      fill: "linear-gradient(90deg, rgba(251,110,63,1) 0%, rgba(252,70,226,1) 100%)",
    }
  },
}));

function SignUpForm() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const swipeRight = (index) => {
    Adams[index].matched = true;
    setOpen(true);
  };

  const swipeLeft = () => {
    // TODO: Sometimes this returns undefined
    alert(rejectedMessages[Math.round(Math.random() * rejectedMessages.length)]);
  };

  const renderCards = Adams.map((obj, index) => {
    return obj.matched ? <MatchedDialog imageSrc={obj.imageSrc} imageAlt={obj.imageAlt} occupation={obj.occupation} open={open} /> : (
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
          onClick={() => swipeRight(index)}
        >
          <Favorite />
        </button>
        <h3 className={classes.name}>Adam Ginther</h3>
        <p className={classes.occupation}>{obj.occupation}</p>
      </div>
    );
  });

  return <div className={classes.container}>{renderCards}</div>;
}

export default SignUpForm;
