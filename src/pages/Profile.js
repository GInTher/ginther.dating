import React from "react";
import { Helmet } from "react-helmet";
import {
  // Button,
  IconButton,
  makeStyles,
  Paper,
  TextField
} from "@material-ui/core/";
import { PhotoCamera } from "@material-ui/icons/";
import Navigation from "../components/Navigation";
import { grey, pink } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  pageContainer: {
    padding: theme.spacing(2, 2, 0),
    background:
      "linear-gradient(4deg, rgba(255,137,96,1) 0%, rgba(255,98,165,1) 100%);",
    height: `calc(100vh - ${theme.spacing(8)}px)`
  },
  gridContainer: {
    justifyContent: "center"
  },
  pageTitle: {
    color: "#fff",
    textAlign: "center"
  },
  paper: {
    padding: theme.spacing(3),
    maxWidth: "500px",
    margin: "0 auto"
  },
  header: {
    marginBottom: 0
  },
  paragraph: {
    color: grey[600],
    fontSize: "14px",
    marginTop: 0
  },
  placeholderImage: {
    background: grey[300],
    borderRadius: "50%",
    cursor: "pointer",
    border: `3px solid ${pink[500]}`,
    padding: theme.spacing(3),
    height: "200px",
    width: "200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    position: "relative"
  },
  cameraIcon: {
    fontSize: "60px"
  },
  photoInput: {
    position: "absolute",
    opacity: 0,
    width: "100%",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  iconButton: {
    width: "100%"
  },
  submitButton: {
    margin: theme.spacing(3, 0, 4)
  }
}));

function Profile(props) {
  const classes = useStyles();

  // const [photo, setPhoto] = React.useState("");
  const [photo] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Ginther | Your Profile</title>
      </Helmet>
      <div className={classes.pageContainer}>
        <Paper spacing={3} elevation={3} className={classes.paper}>
          {photo === "" ? (
            <div
              className={classes.placeholderImage}
              role="img"
              alt="Upload your profile pic"
            >
              <IconButton className={classes.iconButton}>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  className={classes.photoInput}
                />
                <PhotoCamera className={classes.cameraIcon} />
              </IconButton>
            </div>
          ) : (
            <img src={photo} alt="Your upload" />
          )}
          <h1 className={classes.header}>Secret Admirer</h1>
          <p className={classes.paragraph}>
            (Thanks for not telling me who you were)
          </p>
          <TextField
            id="standard-basic"
            label="Please write a nice bio for me."
            fullWidth
            multiline
          />
        </Paper>
        <Navigation currentPage={props.currentPage} />
      </div>
    </>
  );
}

export default Profile;
