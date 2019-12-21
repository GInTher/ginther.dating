import React from "react";
import { makeStyles, Paper } from "@material-ui/core/";
import { PhotoCamera } from "@material-ui/icons/";
import Navigation from "../components/Navigation";
import { grey, pink } from "@material-ui/core/colors";
import ImageUploader from "react-images-upload";

const useStyles = makeStyles(theme => ({
  pageContainer: {
    padding: theme.spacing(2, 2, 0),
    background:
      "linear-gradient(4deg, rgba(255,137,96,1) 0%, rgba(255,98,165,1) 100%);",
    height: `calc(100vh)`
  },
  gridContainer: {
    justifyContent: "center"
  },
  pageTitle: {
    color: "#fff",
    textAlign: "center"
  },
  paper: {
    padding: theme.spacing(3),
    maxWidth: "500px",
    margin: `0 auto 24px`,
  },
  header: {
    marginBottom: 0,
    color: "#fff",
    marginBottom: theme.spacing(2),
    textAlign: "center",
  }
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.pageContainer}>
        <h1 className={classes.header}>Dashboard</h1>
        <Paper spacing={3} elevation={3} className={classes.paper}>
          <h1>Mitch Budreski</h1>
          <p>Has joined!</p>
        </Paper>
        <Paper spacing={3} elevation={3} className={classes.paper}>
          <h1>Shimmy</h1>
          <p>Sent you a message: "Hello there"</p>
        </Paper>
      </div>
    </>
  );
}

export default Dashboard;
