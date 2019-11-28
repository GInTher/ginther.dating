import React from "react";
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
import engineer from "../images/engineer.jpg";

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
  userMessage: {
    // TODO: Use https://cssgradient.io/ to find a better gradient
    background:
      "linear-gradient(90deg, rgba(251,110,63,1) 0%, rgba(252,70,226,1) 100%)",
    color: "#fff",
    display: "inline-block",
    padding: theme.spacing(2),
    marginBottom: 0,
    borderRadius: theme.spacing(1)
  },
  sendMessageToolbar: {
    display: "flex",
    alignItems: "center"
  },
  sendButton: {
    background: "none",
    border: 0,
    cursor: "pointer",
    marginLeft: theme.spacing(2)
  },
  sendIcon: {
    fontSize: "36px"
  }
}));

function SendMessage() {
  const classes = useStyles();

  const messages = ["Hello there"];

  const sendMessage = () => {
    console.log("Button clicked!");
    messages.push("Hello...");
  };

  return (
    <>
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
              <div key={i}>
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
              placeholder="I'm waiting..."
              multiline
              className={classes.textField}
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <button className={classes.sendButton} onClick={sendMessage}>
              <Send color="primary" className={classes.sendIcon} />
            </button>
          </div>
        </Grid>
      </Grid>
      {/* <Navigation /> */}
    </>
  );
}

export default SendMessage;
