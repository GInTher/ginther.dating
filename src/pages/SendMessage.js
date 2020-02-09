import React from "react";
import { Helmet } from "react-helmet";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  makeStyles,
  TextField
} from "@material-ui/core/";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import Send from "@material-ui/icons/Send";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { sendMessages } from "../data/sendMessages";
import { pink, grey } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  toolbarContainer: {
    marginBottom: theme.spacing(2)
  },
  backLink: {
    color: pink[500]
  },
  gridContainer: {
    justifyContent: "center"
  },
  contentContainer: {
    margin: "0 auto"
  },
  image: {
    borderRadius: "50%",
    maxWidth: "40px",
    display: "inline-block"
  },
  toolbar: {
    justifyContent: "space-between",
    width: "100%",
    display: "flex",
    alignItems: "center",
    margin: "0 auto"
  },
  highlightedText: {
    color: pink[500],
    fontWeight: 700
  },
  receivedMessagesContainer: {
    display: "inline-flex",
    flexDirection: "column",
    width: "100%"
  },
  messagesContainer: {
    padding: theme.spacing(0, 2),
    display: "inline-block"
  },
  userMessage: {
    background:
      "linear-gradient(90deg, rgba(251,110,63,1) 0%, rgba(252,70,226,1) 100%)",
    color: "#fff",
    display: "inline-block",
    padding: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginBottom: 0,
    borderRadius: theme.spacing(1)
  },
  sendMessageToolbar: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 2),
    position: "fixed",
    left: 0,
    right: 0,
    bottom: theme.spacing(3),
    paddingBottom: isMobile ? theme.spacing(2) : theme.spacing(2),
    maxWidth: "670px",
    borderTop: `1px solid ${grey[400]}`,
    margin: "0 auto",
    background: "#fff"
  },
  sendButton: {
    background: "none",
    border: 0,
    cursor: "pointer",
    margin: theme.spacing(0, 1)
  },
  sendIcon: {
    fontSize: "36px",
    transition: "0.2s"
  },
  sentReceipt: {
    color: grey[400],
    fontSize: "12px",
    marginTop: theme.spacing(0.5),
    textAlign: "right"
  },
  sendMessageContainer: {
    display: "flex",
    height: isMobile ? "60vh" : "80vh",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  },
  sendMessageImage: {
    display: "block",
    maxWidth: isMobile ? theme.spacing(20) : theme.spacing(40),
    borderRadius: "50%",
    border: `3px solid ${pink[500]}`,
    marginBottom: theme.spacing(2)
  },
  paragraph: {
    margin: theme.spacing(0.5, 2),
    textAlign: "center"
  },
  textField: {
    width: "100%"
  }
}));

function SendMessage(props) {
  const classes = useStyles();

  const [messages, setMessages] = React.useState([]);
  const [typedMessage, setTypedMessage] = React.useState("");

  const chooseRandomMessage = Math.round(Math.random() * sendMessages.length);
  const textInput = React.createRef();

  const handleSubmit = () => {
    // TODO: Find a better way of selecting this
    textInput.current.querySelector("input").value = "";
    textInput.current.value = "";
    typedMessage !== "" &&
      setMessages([...messages, sendMessages[chooseRandomMessage]]);
  };

  function getCurrentTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? " PM" : " AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  return (
    <>
      <Helmet>
        <title>Ginther | Message your {props.occupation}</title>
      </Helmet>
      {/* Weird spacing probably has to do with spacing prop in grid */}
      <AppBar
        position="static"
        color="default"
        className={classes.toolbarContainer}
      >
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} lg={6}>
            <Toolbar>
              <div className={classes.toolbar}>
                <Link to={"/messages"} className={classes.backLink}>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                  >
                    <ArrowBackIos />
                  </IconButton>
                </Link>
                <Typography variant="h6" className={classes.title}>
                  Adam Ginther
                </Typography>
                <img
                  src={props.imageSrc}
                  alt={props.imageAlt}
                  className={classes.image}
                />
              </div>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          lg={6}
          justify={"center"}
          className={classes.contentContainer}
        >
          <div className={classes.receivedMessagesContainer}>
            {messages.map((obj, index) => {
              return (
                <div key={index} className={classes.messagesContainer}>
                  <p className={classes.userMessage}>{obj}</p>
                  <div className={classes.sentReceipt}>
                    {index === messages.length - 1 && (
                      <>Sent at {getCurrentTime(new Date())}</>
                    )}
                  </div>
                </div>
              );
            })}
            {!messages.length > 0 && (
              <div className={classes.sendMessageContainer}>
                <img
                  className={classes.sendMessageImage}
                  src={props.imageSrc}
                  alt={props.imageAlt}
                />
                <p className={classes.paragraph}>
                  Send a message to your {props.occupation}{" "}
                  <span role="img" aria-label="Winking face">
                    😉
                  </span>
                </p>
                <p className={classes.paragraph}>
                  <span className={classes.highlightedText}>
                    Please, don't leave me hanging...
                  </span>
                </p>
              </div>
            )}
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6} justify={"center"}>
          <form
            autocomplete="off"
            className={classes.sendMessageToolbar}
            onSubmit={e => e.preventDefault()}
          >
            <TextField
              label="Send a message"
              placeholder="I'm waiting..."
              autocomplete="false"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              autoFocus={!isMobile}
              ref={textInput}
              // value={setTypedMessage ? "" : undefined}
              onChange={e => {
                setTypedMessage(e.target.value);
              }}
              onFocus={document.addEventListener("keydown", event => {
                if (event.key === "Enter") {
                  // textInput.current.querySelector("input").value = "";
                  document.querySelector("input.MuiInputBase-input").value = "";
                  setMessages([...messages, sendMessages[chooseRandomMessage]]);
                }

                return;
              })}
            />
            <button
              className={classes.sendButton}
              onClick={handleSubmit}
              disabled={
                !typedMessage
              }
              type="button"
            >
              <Send
                color={typedMessage ? "primary" : "disabled"}
                className={classes.sendIcon}
              />
            </button>
          </form>
        </Grid>
      </Grid>
    </>
  );
}

export default SendMessage;
