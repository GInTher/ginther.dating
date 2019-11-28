import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  makeStyles
} from "@material-ui/core/";
import Navigation from "../components/Navigation";
import { Adams } from "../data/adams";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  }
}));

function Messages() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3} justify={"center"}>
        <Grid item xs={12} lg={6} justify={"center"}>
          <h1>Messages</h1>
          <List className={classes.root}>
            {Adams.map(i => {
              return i.matched ? (
                <>
                <Link to="/send-message" className={classes.link}>
                  <ListItem>
                    <ListItemAvatar>
                      
                        <Avatar alt="A very handsome man" src={i.imageSrc} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={"Adam Ginther"}
                      secondary={i.occupation}
                    />
                  </ListItem>
                  </Link>
                  <Divider variant="inset" component="li" />
                </>
              ) : null;
            })}
          </List>
        </Grid>
      </Grid>

      <Navigation />
    </>
  );
}

export default Messages;
