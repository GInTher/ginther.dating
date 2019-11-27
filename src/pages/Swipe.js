import React from "react";
import Card from "../components/Card";
import { Grid, Paper, Tabs, Tab } from "@material-ui/core/";
import {
  People,
  Person
} from "@material-ui/icons";

function Home() {

  return (
    <>
      <Grid container spacing={3} justify={"center"}>
        <Grid item xs={12} lg={5} xl={8} justify={"center"}>
          <Card />
        </Grid>
      </Grid>

      <Paper square>
        <Tabs
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon tabs example"
        >
          <Tab icon={<People />} aria-label="Matches" />
          <Tab icon={<Person />} aria-label="Potential Matches" />
        </Tabs>
      </Paper>
    </>
  );
}

export default Home;
