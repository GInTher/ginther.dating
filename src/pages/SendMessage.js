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
// import Navigation from "../components/Navigation";
import { pink } from "@material-ui/core/colors";
import engineer from "../images/occupations/engineer.jpg";

const useStyles = makeStyles(theme => ({
  backLink: {
    color: pink[500]
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
  messagesContainer: {
    padding: theme.spacing(0, 2)
  },
  userMessage: {
    // TODO: Use https://cssgradient.io/ to find a better gradient
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
    margin: "0 auto",
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
  }
}));

function SendMessage() {
  const classes = useStyles();

  const [messages, setMessages] = React.useState([]);
  const [typedMessage, setTypedMessage] = React.useState("");

  const handleSubmit = () => {
    typedMessage !== "" && setMessages([...messages, typedMessage]);
  };

  return (
    <>
      <Helmet>
        <title>Ginther | Send Message</title>
      </Helmet>
      <AppBar position="static" color="default">
        <Grid container spacing={3} justify={"center"}>
          <Grid item xs={12} lg={6} justify={"center"}>
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
                  className={classes.image}
                  src={engineer}
                  alt="Handsome man"
                />
              </div>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
      <Grid container spacing={3} justify={"center"}>
        <Grid item xs={12} lg={6} justify={"center"}>
          {messages.map(i => {
            return (
              <div key={i} className={classes.messagesContainer}>
                <p className={classes.userMessage}>{i}</p>
              </div>
            );
          })}
        </Grid>
      </Grid>
      <Grid container spacing={3} justify={"center"}>
        <Grid item xs={12} lg={6} justify={"center"}>
          <div className={classes.sendMessageToolbar}>
            <TextField
              id="outlined-textarea"
              label="Send a message"
              autoFocus
              placeholder="I'm waiting..."
              className={classes.textField}
              margin="normal"
              variant="outlined"
              fullWidth
              onChange={e => {
                setTypedMessage(e.target.value);
              }}
            />
            <button className={classes.sendButton} onClick={handleSubmit}>
              <Send
                color={typedMessage && "primary"}
                className={classes.sendIcon}
              />
            </button>
          </div>
        </Grid>
      </Grid>
      {/* <Navigation /> */}
    </>
  );
}

export default SendMessage;
