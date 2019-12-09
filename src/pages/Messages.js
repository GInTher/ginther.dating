import React from "react";
import { Helmet } from "react-helmet";
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
import { pink } from "@material-ui/core/colors";
import Navigation from "../components/Navigation";
import { Adams } from "../data/adams";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  gridContainer: {
    justifyContent: "center",
  },
  pageContainer: {
    padding: theme.spacing(2, 2, 0),
    height: `calc(100vh - ${theme.spacing(8)}px)`
  },
  pageTitle: {
    margin: theme.spacing(4, 2, 2)
  },
  pageContent: {
    margin: theme.spacing(2, 2, 0)
  },
  avatar: {
    height: theme.spacing(10),
    width: theme.spacing(10),
    marginRight: theme.spacing(3)
  },
  name: {
    fontSize: "20px"
  },
  messageContainer: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing(4)
  },
  inline: {
    display: "inline"
  },
  swipeLink: {
    textDecoration: "none",
    color: pink[500],
    fontWeight: 700
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  }
}));

function Messages(props) {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Ginther | Messages</title>
      </Helmet>
      <div className={classes.pageContainer}>
        <Grid container spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} lg={6} justify={"center"}>
            <h1 className={classes.pageTitle}>
              Messages{" "}
              <span role="img" aria-label="Smile">
                😊
              </span>
            </h1>
            <Divider />
            <List className={classes.messageContainer}>
              {!Adams[0].matched && (
                <div className={classes.pageContent}>
                  <h3>
                    You have no matches{" "}
                    <span role="img" aria-label="Open mouth">
                      😮
                    </span>
                  </h3>
                  <p>
                    Please{" "}
                    <Link to={"/swipe"} className={classes.swipeLink}>
                      swipe right more
                    </Link>{" "}
                    I'm begging you{" "}
                    <span role="img" aria-label="praying">
                      🙏
                    </span>
                  </p>
                  {/* <img src={beggingImage} alt={"A handsome man, begging."} /> */}
                </div>
              )}
              {Adams.map(i => {
                return i.matched ? (
                  <>
                    <Link
                      to={`/messages/${i.occupation
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      className={classes.link}
                    >
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar
                            alt="A very handsome man"
                            src={i.imageSrc}
                            className={classes.avatar}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <div className={classes.name}>Adam Ginther</div>
                          }
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

        <Navigation currentPage={props.currentPage} />
      </div>
    </>
  );
}

export default Messages;
