import React from "react";
import { Paper, Tab, Tabs, Link, makeStyles } from "@material-ui/core/";
import { People, Message } from "@material-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const GeneratedLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);


const useStyles = makeStyles(theme => ({
  container: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
  },
}));

function Navigation() {
  const classes = useStyles();

  return (
    <Paper square className={classes.container}>
      <Tabs
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="primary"
        aria-label="icon tabs example"
        centered
      >
        <Link to={"/swipe"} component={GeneratedLink}><Tab icon={<People />} aria-label="Swipe" /></Link>
        <Link to={"/messages"} component={GeneratedLink}><Tab icon={<Message />} aria-label="Messages" /></Link>

        {/* <Tab label={<Link to={"/swipe"} component={GeneratedLink}><Tab icon={<People />} aria-label="Swipe" /></Link>}></Tab>
        <Tab label={<Link to={"/message"} component={GeneratedLink}><Tab icon={<Message />} aria-label="Messages" /></Link>}></Tab> */}
      </Tabs>
    </Paper>
  );
}

export default Navigation;
