import React from "react";
import Card from "../components/Card";
import { Helmet } from "react-helmet";
import { Grid, makeStyles } from "@material-ui/core/";
import Navigation from "../components/Navigation";

const useStyles = makeStyles(theme => ({
  pageContainer: {
    padding: theme.spacing(2, 2, 0),
    // #ff8960 to ff62a5
    background:
      "linear-gradient(4deg, rgba(255,137,96,1) 0%, rgba(255,98,165,1) 100%);",
    height: `calc(100vh - ${theme.spacing(8)}px)`
  },
  gridContainer: {
    justifyContent: "center",
  },
  pageTitle: {
    color: "#fff",
    textAlign: "center",
    margin: theme.spacing(1, 0),
  }
}));

function Swipe(props) {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Ginther | Swipe Right</title>
      </Helmet>
      <div className={classes.pageContainer}>
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} lg={5} xl={8}>
              <h1 className={classes.pageTitle}>
                Swipe Right{" "}
                <span role="img" aria-label="Winking face">
                  😉
                </span>
              </h1>
              <Card />
            </Grid>
          </Grid>
          <Navigation currentPage={props.currentPage} />
        </div>
    </>
  );
}

export default Swipe;
