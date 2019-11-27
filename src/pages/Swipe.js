import React from "react";
import {
  Grid,
  makeStyles,
} from "@material-ui/core/";
import { pink } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    mainHeader: {
      marginBottom: theme.spacing(0)
    },
    subHeader: {
      marginTop: theme.spacing(0)
    },
    highlightedText: {
      color: pink[500]
    },
    image: {
      borderRadius: "50%",
      display: "block",
      maxWidth: "100%",
      width: "150px"
    }
  }));

function Home() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} justify={"center"}>
      <div className={classes.container}>Some grid stuff</div>
    </Grid>
  );
}

export default Home;
