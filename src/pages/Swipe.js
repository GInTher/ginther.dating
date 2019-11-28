import React from "react";
import Card from "../components/Card";
import { Grid } from "@material-ui/core/";
import Navigation from "../components/Navigation";

function Swipe() {
  return (
    <>
      <Grid container spacing={3} justify={"center"}>
        <Grid item xs={12} lg={5} xl={8} justify={"center"}>
          <h1>Get Swiping <span role="img" aria-label="Fire">🔥</span></h1>
          <Card />
        </Grid>
      </Grid>
      <Navigation />
    </>
  );
}

export default Swipe;
