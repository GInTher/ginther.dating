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
import { pink, grey } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
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
    marginTop: theme.spacing(3),
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
    bottom: theme.spacing(1),
    maxWidth: "670px",
    margin: "0 auto"
  },
  sendButton: {
    background: "none",
    border: 0,
    cursor: "pointer",
    marginLeft: theme.spacing(2)
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
    height: "80vh",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  },
  sendMessageImage: {
    display: "block",
    maxWidth: "200px",
    borderRadius: "50%",
    border: `3px solid ${pink[500]}`,
    marginBottom: theme.spacing(5)
  },
  paragraph: {
    margin: theme.spacing(0.5, 0),
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

  const handleSubmit = () => {
    typedMessage !== "" && setMessages([...messages, typedMessage]);
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
        <title>Ginther | Message the {props.occupation}</title>
      </Helmet>
      {/* Weird spacing probably has to do with spacing prop in grid */}
      <AppBar position="static" color="default">
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
            {messages.map(i => {
              return (
                <div key={i} className={classes.messagesContainer}>
                  <p className={classes.userMessage}>{i}</p>
                  <div className={classes.sentReceipt}>
                    Sent at {getCurrentTime(new Date())}
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
          <div className={classes.sendMessageToolbar}>
            <TextField
              id="outlined-textarea"
              label="Send a message"
              placeholder="I'm waiting..."
              className={classes.textField}
              autoComplete={false}
              margin="normal"
              variant="outlined"
              onChange={e => {
                setTypedMessage(e.target.value);
              }}
              onFocus={e => {
                document.addEventListener("keydown", event => {
                  if (event.key === "Enter") {
                    setMessages([...messages, "Hello"]);
                  }
                });
              }}
              // onBlur={(e) => document.removeEventListener(e, "keydown")}
            />
            <button
              className={classes.sendButton}
              onClick={handleSubmit}
              disabled={!typedMessage}
            >
              <Send
                color={typedMessage ? "primary" : "disabled"}
                className={classes.sendIcon}
              />
            </button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default SendMessage;
