import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  makeStyles,
  Slide
} from "@material-ui/core/";
import { Link } from "react-router-dom";

import { ReactComponent as Burst } from "../images/ui/burst.svg";
import { ReactComponent as MatchBanner } from "../images/ui/match-banner.svg";

const useStyles = makeStyles(theme => ({
  burst: {
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%"
  },
  image: {
    display: "block",
    maxWidth: "200px",
    margin: "0 auto",
    borderRadius: "50%",
    border: "3px solid #fff",
    position: "relative",
    zIndex: 1
  },
  matchBanner: {
    transform: "translateY(-50px)",
    position: "relative",
    zIndex: 2,
    display: "block",
    margin: "0 auto"
  },
  occupation: {
    textAlign: "center",
    margin: 0
  },
  name: {
    textAlign: "center",
    margin: 0,
    color: "#000"
  },
  gradientBackground: {
    background:
      "linear-gradient(16deg, rgba(251,110,63,1) 0%, rgba(255,70,226,1) 100%)",
    width: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "44%"
  },
  sendMessage: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600,
    padding: theme.spacing(2),
    width: "100%",
    marginBottom: theme.spacing(1),
    display: "block",
    textAlign: "center",
    background:
      "linear-gradient(90deg, rgba(251,110,63,1) 0%, rgba(252,70,226,1) 100%)",
    borderRadius: theme.spacing(1)
  },
  keepSwiping: {
    // TODO: Fix this spacing
    margin: "0 !important",
    width: "100%"
  },
  dialogActions: {
    flexDirection: "column",
    padding: theme.spacing(2, 4)
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function MatchedDialog(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(props.matched);

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <Dialog
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      maxWidth={100}
      open={open}
      TransitionComponent={Transition}
      onBackdropClick={closeDialog}
    >
      <DialogContent>
        <div className={classes.gradientBackground} />

        {/* <img
            src={props.imageSrc}
            alt={props.imageAlt}
            className={classes.image}
          /> */}
        <picture>
          <source
            type="image/webp"
            src={props.imageSrcWebp}
            alt={props.imageAlt}
          />
          <img
            src={props.imageSrc}
            alt={props.imageAlt}
            className={classes.image}
          />
        </picture>
        <Burst className={classes.burst} />
        <MatchBanner className={classes.matchBanner} />

        <DialogContentText>
          <h3 className={classes.name}>Adam Ginther</h3>
          <p className={classes.occupation}>{props.occupation}</p>
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Link
          to={`/messages/${props.occupation
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
          className={classes.sendMessage}
          onClick={closeDialog}
        >
          Send a message
        </Link>
        <Button
          color="primary"
          className={classes.keepSwiping}
          onClick={closeDialog}
        >
          Keep Swiping
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default MatchedDialog;
