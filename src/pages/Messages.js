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
  pageTitle: {
    margin: theme.spacing(4, 2, 2),
  },
  avatar: {
    height: theme.spacing(10),
    width: theme.spacing(10),
    marginRight: theme.spacing(3),
  },
  name: {
    fontSize: "20px",
    marginBottom: theme.spacing(0.5),
  },
  messageContainer: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
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
          <h1 className={classes.pageTitle}>Messages</h1>
          <Divider />
          <List className={classes.messageContainer}>
            {Adams.map(i => {
              return i.matched ? (
                <>
                <Link to="/send-message" className={classes.link}>
                  <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="A very handsome man" src={i.imageSrc} className={classes.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={<div className={classes.name}>Adam Ginther</div>}
                      secondary={<div>{i.occupation}</div>}
                    />
                  </ListItem>
                  </Link>
                  <Divider component="li" />
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
