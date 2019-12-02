import React from "react";
import Card from "../components/Card";
import { Grid, makeStyles } from "@material-ui/core/";
import Navigation from "../components/Navigation";

const useStyles = makeStyles(theme => ({
  container: {
    
  },
  pageContainer: {
    padding: theme.spacing(2, 2, 0),
    background:
      "linear-gradient(4deg, rgba(255,137,96,1) 0%, rgba(255,98,165,1) 100%);",
    height: "calc(100vh - 72px)"
  },
  pageTitle: {
    color: "#fff",
    textAlign: "center",
  },
}));

function Swipe() {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
    <div className={classes.container}>
      <Grid container spacing={3} justify={"center"}>
        <Grid item xs={12} lg={5} xl={8}>
          
            <h1 className={classes.pageTitle}>Get Swiping</h1>
            <Card />
        </Grid>
      </Grid>
      <Navigation />
    </div>
    </div>
  );
}

export default Swipe;
