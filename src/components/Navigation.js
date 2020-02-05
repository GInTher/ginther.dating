import React from "react";
import { Paper, Tab, Tabs, Link, makeStyles } from "@material-ui/core/";
import { People, Message } from "@material-ui/icons";
// import { People, Message, Person } from "@material-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { grey, pink } from "@material-ui/core/colors";

const GeneratedLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);


const useStyles = makeStyles(theme => ({
  container: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    boxShadow: `-1px -1px ${grey[400]}`,
  },
  active: {
    color: pink[500],
  },
  notActive: {
    color: grey[400],
  },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  }
}));

function Navigation(props) {
  const classes = useStyles();

  return (
    <Paper square className={classes.container}>
      <Tabs
        centered
        value={props.currentPage === "swipe" ? 0 : 1}
      >
        {/* <Link className={classes.link} to={"/profile"} component={GeneratedLink}><Tab label={"Profile"} icon={<Person />} aria-label="Profile" className={props.currentPage === "profile" ? classes.active : classes.notActive} /></Link> */}
        <Link className={classes.link} to={"/swipe"} component={GeneratedLink}><Tab label={"Swipe"} icon={<People />} aria-label="Swipe" className={props.currentPage === "swipe" ? classes.active : classes.notActive} /></Link>
        <Link className={classes.link} to={"/messages"} component={GeneratedLink}><Tab label={"Messages"} icon={<Message />} aria-label="Messages" className={props.currentPage === "messages" ? classes.active : classes.notActive} /></Link>
      </Tabs>
    </Paper>
  );
}

export default Navigation;
