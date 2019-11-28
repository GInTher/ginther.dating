import React from "react";
import { Paper, Tab, Tabs } from "@material-ui/core/";
import { People, Message } from "@material-ui/icons";
import { Link } from "react-router-dom";


// TODO: Fix links https://material-ui.com/guides/composition/#link
function Navigation() {
  return (
    <Paper square>
      <Tabs
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
        centered
      >
        <Link to={"swipe"}><Tab icon={<People />} aria-label="Matches" label="Swipe" /></Link>
        <Link to={"/messages"}><Tab icon={<Message />} aria-label="Messages" label="Messages" /></Link>
      </Tabs>
    </Paper>
  );
}

export default Navigation;
