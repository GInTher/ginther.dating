import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, Grow } from "@material-ui/core/";
import { Favorite, Close } from "@material-ui/icons";
import { green, grey, red } from "@material-ui/core/colors";
import { Adams } from "../data/adams";
import { rejectedMessages } from "../data/rejectedMessages";
import { Link } from "react-router-dom";

import { ReactComponent as Burst } from '../images/ui/burst.svg';
import { ReactComponent as MatchBanner } from '../images/match-banner.svg';

const useStyles = makeStyles(theme => ({
  container: {
    position: "relative",
  },
  card: {
    // boxShadow: `0 0 10px ${grey[500]}`,
    marginTop: theme.spacing(1),
    position: "absolute",
    cursor: "pointer",
    textAlign: "center",
    borderRadius: theme.spacing(2),
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
  cardName: {
    marginBottom: 0,
  },
  cardOccupation: {
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
  matchedImage: {
    display: "block",
    maxWidth: "200px",
    margin: "0 auto",
    borderRadius: "50%",
    border: "3px solid #fff",
    position: "relative",
    zIndex: 1,
  },
  matchBanner: {
    transform: "translateY(-50px)",
    position: "relative",
    zIndex: 2,
    display: "block",
    margin: "0 auto",
  },
  matchedOccupation: {
    textAlign: "center",
    margin: 0,
  },
  matchedName: {
    textAlign: "center",
    margin: 0,
    color: "#000",
  },
  gradientBackground: {
    background: "linear-gradient(16deg, rgba(251,110,63,1) 0%, rgba(255,70,226,1) 100%)",
    width: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "44%",
  },
  sendMessage: {
    color: "#fff",
    textDecoration: "none",
    padding: theme.spacing(2),
    display: "block",
    width: "100%",
    marginBottom: theme.spacing(1),
    display: "block",
    textAlign: "center",
    background:
      "linear-gradient(90deg, rgba(251,110,63,1) 0%, rgba(252,70,226,1) 100%)",
    borderRadius: theme.spacing(1),
  },
  dialogActions: {
    flexDirection: "column",
    padding: theme.spacing(2, 4),
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
  }
}));

function matchedDialog() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

    return(
        <Dialog
          open={open}
          keepMounted
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          maxWidth={100}
        >
          <DialogContent>
            <div className={classes.gradientBackground} />
            <img src={obj.imageSrc} alt={obj.imageAlt} className={classes.matchedImage} />
            <Burst className={classes.burst} />
            <MatchBanner className={classes.matchBanner} />

            <DialogContentText>
              <h3 className={classes.matchedName}>Adam Ginther</h3>
              <p className={classes.matchedOccupation}>{obj.occupation}</p>
            </DialogContentText>
          </DialogContent>
          <DialogActions className={classes.dialogActions}>
            <Link to="/send-message" className={classes.sendMessage}>
              Send a message
          </Link>
            <Button onClick={handleClose} color="primary" fullWidth>
              Keep Swiping
          </Button>
          </DialogActions>
        </Dialog>
  );
}

export default matchedDialog;
