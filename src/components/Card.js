import React from "react";
import { makeStyles } from "@material-ui/core/";
import MatchedDialog from "./MatchedDialog";
import useForceUpdate from "use-force-update";
import { Favorite, Close } from "@material-ui/icons";
import { green, grey, red } from "@material-ui/core/colors";
import { Adams } from "../data/adams";
import { rejectedMessages } from "../data/rejectedMessages";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  container: {
    position: "relative"
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
    "&:first-child": {
      zIndex: 3
    },
    "&:nth-child(2)": {
      top: theme.spacing(3),
      zIndex: 2,
      opacity: 0.9,
      transform: "scale(0.95)",
      background: "#eee",
      pointerEvents: "none"
    },
    "&:nth-child(3)": {
      top: theme.spacing(6),
      zIndex: 1,
      opacity: 0.5,
      transform: "scale(0.89)",
      background: "#ddd",
      pointerEvents: "none"
    }
  },
  name: {
    marginBottom: 0
  },
  occupation: {
    margin: theme.spacing(1, 0, 3)
  },
  image: {
    borderRadius: theme.spacing(2, 2, 0, 0),
    display: "block",
    width: "100%",
    minHeight: "280px",
    pointerEvents: "none"
  },
  burst: {
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%"
  },
  button: {
    background: "#fff",
    position: "absolute",
    border: `1px solid ${grey[400]}`,
    padding: theme.spacing(2),
    cursor: "pointer",
    borderRadius: "50%",
    boxShadow: `0 0 4px ${grey[400]}`,
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
      fill:
        "linear-gradient(90deg, rgba(251,110,63,1) 0%, rgba(252,70,226,1) 100%)"
    }
  },
  rotateRight: {
    transform: "rotate(-30deg) scale(0.8)",
    transition: "1s",
    opacity: 0,
    cursor: "w-resize",
    zIndex: 10
  },
  completeContainer: {
    color: "#fff"
  },
  link: {
    color: "#fff",
    fontWeight: 800,
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline"
    }
  }
}));

function SignUpForm() {
  const forceUpdate = useForceUpdate();
  const classes = useStyles();

  const [matched, setMatched] = React.useState(false);

  const swipeRight = index => {
    Adams[index].matched = true;
    setMatched(true);
    // TODO: Pass down props properly instead of using forceUpdate
    forceUpdate();
    localStorage.setItem(Adams[index].occupation, true);
  };

  const swipeLeft = () => {
    alert(
      rejectedMessages[Math.floor(Math.random() * rejectedMessages.length)]
    );
  };

  const renderCards = Adams.map((obj, index) => {
    return obj.matched ? (
      <MatchedDialog
        imageSrc={obj.imageSrc}
        imageSrcWebp={obj.imageSrcWebp}
        imageAlt={obj.imageAlt}
        occupation={obj.occupation}
        matched={matched}
      />
    ) : (
      <div
        className={`${classes.card}`}
        key={index}
        onTouchMove={() => swipeRight(index)}
        onDragStart={() => swipeRight(index)}
        draggable={true}
      >
        {/* <img
            src={obj.imageSrc}
            alt={obj.imageAlt}
            className={classes.image}
            loading={index < 3 && "eager"}
          /> */}
        <picture>
          <source
            type="image/webp"
            srcSet={obj.imageSrcWebp}
            alt={obj.imageAlt}
            loading={index < 3 && "eager"}
          />
          <img
            src={obj.imageSrc}
            alt={obj.imageAlt}
            className={classes.image}
            loading={index < 3 && "eager"}
          />
        </picture>
        <button
          className={`${classes.button} ${classes.swipeLeft}`}
          onClick={swipeLeft}
          name="Swipe Left"
        >
          <Close />
        </button>
        <button
          className={`${classes.button} ${classes.swipeRight}`}
          onClick={() => swipeRight(index)}
          name={"Swipe Right"}
        >
          <Favorite />
        </button>
        <h3 className={classes.name}>Adam Ginther</h3>
        <p className={classes.occupation}>{obj.occupation}</p>
      </div>
    );
  });

  const renderCompleteMessage = (
    <div className={classes.completeContainer}>
      <h3>Okay... you may have swiped right a little bit too much.</h3>
      <p>
        And that's totally okay. I probably would have swiped right just as
        much. So why don't you just get on with it and{" "}
        <Link to={"/messages"} className={classes.link}>
          start messaging me?{" "}
        </Link>
      </p>

      {/* <p>
        But also if you'd like, you can{" "}
        <Link
          className={classes.link}
          onClick={() => {
            window.location.reload(true);
          }}
        >
          go here to swipe all over again.
        </Link>
      </p> */}

      <h3>Is that not enough for you?</h3>
      <p>
        Then why don't you share me with your friends?{" "}
        <span role="img" aria-label="Winking face">
          😉
        </span>
      </p>
    </div>
  );

  return (
    <div className={classes.container}>
      {Adams[Adams.length - 1].matched !== undefined
        ? renderCompleteMessage
        : renderCards}
    </div>
  );
}

export default SignUpForm;
