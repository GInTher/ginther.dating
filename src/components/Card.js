import React from "react";
import { makeStyles } from "@material-ui/core/";
import MatchedDialog from "./MatchedDialog";
import useForceUpdate from "use-force-update";
import { Favorite, Close, Star } from "@material-ui/icons";
import { green, grey, blue, red } from "@material-ui/core/colors";
import { Adams } from "../data/adams";
import { rejectedMessages } from "../data/rejectedMessages";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import superLikeAudio from "../audio/super-like.mp3";

function SignUpForm() {
  const isSmallPhone = useMediaQuery("(max-width:350px)");

  const useStyles = makeStyles(theme => ({
    container: {
      position: "relative"
    },
    card: {
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
      top: isSmallPhone ? "-70px" : 0,

      "&:first-child": {
        zIndex: 3
      },
      "&:nth-child(2)": {
        top: isSmallPhone ? "-52px" : theme.spacing(3),
        zIndex: 2,
        opacity: 0.9,
        transform: "scale(0.95)",
        background: "#eee",
        pointerEvents: "none"
      },
      "&:nth-child(3)": {
        top: isSmallPhone ? "-30px" : theme.spacing(6),
        zIndex: 1,
        opacity: 0.5,
        transform: "scale(0.89)",
        background: "#ddd",
        pointerEvents: "none"
      }
    },
    name: {
      marginBottom: 0,
      marginTop: theme.spacing(4)
    },
    occupation: {
      margin: theme.spacing(0.5, 0, 3)
    },
    image: {
      borderRadius: theme.spacing(2, 2, 0, 0),
      background: grey[300],
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
    superLike: {
      color: blue[400],
      padding: theme.spacing(1),
      marginLeft: "auto",
      marginRight: "auto",
      left: 0,
      right: 0,
      maxWidth: theme.spacing(5.5),
      transform: "translateY(-60%)"
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
      },

      "&:focus": {
        textDecoration: "underline"
      }
    },
    nameLink: {
      color: "#fff",
      fontWeight: 800,
      textDecoration: "underline",
      marginLeft: theme.spacing(0.5),

      "&:hover": {
        textDecoration: "underline"
      },

      "&:focus": {
        textDecoration: "underline"
      }
    },
    madeWithLoveContainer: {
      textAlign: "center",
      marginTop: theme.spacing(10),
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    heartIcon: {
      fontSize: "35px",
      display: "inline-block",
      margin: theme.spacing(0, 1)
    }
  }));

  const forceUpdate = useForceUpdate();
  const classes = useStyles();

  // Do not set state to Adams, otherwise it will bug out
  const [matched, setMatched] = React.useState();

  const swipeRight = index => {
    Adams[index].matched = true;
    setMatched(true);
    // TODO: Pass down props properly instead of using forceUpdate
    forceUpdate();
  };

  const superLike = index => {
    swipeRight(index);
    let audio = new Audio(superLikeAudio);
    audio.play();
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
        <picture>
          <source
            type="image/webp"
            srcSet={obj.imageSrcWebp}
            loading={index < 3 && "eager"}
          />
          <img
            src={obj.imageSrc}
            alt={obj.imageAlt}
            className={classes.image}
            loading={index < 3 && "eager"}
            height={isMobile ? 360 : 400}
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
          className={`${classes.button} ${classes.superLike}`}
          onClick={() => superLike(index)}
          name={"Super Like"}
        >
          <Star />
          {/* <audio>
            <source src="../audio/super-like.mp3" type="audio/mpeg" />
          </audio> */}
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

      {/* <h3>Is that not enough for you?</h3>
      <p>
        Then why don't you share me with your friends?{" "}
        <span role="img" aria-label="Winking face">
          😉
        </span>
      </p> */}

      <h3 className={classes.madeWithLoveContainer}>
        (Made with{" "}
        <span role="img" aria-label="Love" className={classes.heartIcon}>
          💖
        </span>{" "}
        by{"  "}
        <a
          href="https://www.instagram.com/instagintheram/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.nameLink}
        >
          Adam Ginther)
        </a>
      </h3>
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
