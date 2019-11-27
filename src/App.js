import React from "react";
import "./App.css";
import {
  Grid,
  makeStyles,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/";
import { pink } from "@material-ui/core/colors";
import SignUpForm from "./components/SignUpForm";

const theme = createMuiTheme({
  palette: {
    primary: { main: pink[500] }
  }
});

const useStyles = makeStyles(theme => ({
  mainHeader: {
    marginBottom: theme.spacing(0)
  },
  subHeader: {
    marginTop: theme.spacing(0)
  },
  highlightedText: {
    color: pink[500]
  }
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={3} justify={"center"}>
        <Grid item xs={12} lg={5} xl={8} justify={"center"}>
          <h1 className={classes.mainHeader}>
            Meet new, interesting people named{" "}
            <span className={classes.highlightedText}>Adam Ginther</span> near
            you.
          </h1>
          <p className={classes.subHeader}>
            With tens of users all over the world, Adam Ginther Exposed gives
            you the ability to connect with Adam Ginther no matter where you are{" "}
            <span role="img" aria-label={"winking emoji"}>
              😉
            </span>
          </p>
        </Grid>
        <Grid item xs={12} lg={5} xl={8} justify={"center"}>
          <SignUpForm />
        </Grid>
        <Grid item xs={8} align={"center"}>
          <h1>
            It all started with{" "}
            <span className={classes.highlightedText}>Adam Ginther.</span>
          </h1>
          <p>
            We looked at popular, modern dating apps and we knew something was
            ready for a change. So we here at Adam Ginther exposed reverse
            engineered the swipe: Using our very complex algorithms, we only
            give you your very best options.
          </p>
        </Grid>
        <Grid container xs={8} align={"center"}>
          <Grid item xs={12}>
            <h1>
              Over <span className={classes.highlightedText}>3 women</span>{" "}
              recommended{" "}
              <span className={classes.highlightedText}>Adam Ginther.</span>
            </h1>
          </Grid>
          <Grid item xs={4}>
            <p>
              "He's such a great guy, I would 100% recommend him to every girl.
              He is amazing."
            </p>
            <h6>Aliyah Profsplop, Adam's ex-fiance from 4 years ago</h6>
          </Grid>
          <Grid item xs={4}>
            <p>"He was alright I guess"</p>
            <h6>- Adam's friend from grade 2</h6>
          </Grid>
          <Grid item xs={4}>
            <p>"He's my favourite son"</p>
            <h6>- Adam's mom</h6>
          </Grid>
        </Grid>
        <Grid item xs={8} align="center">
          <h1>
            Well, what are you waiting for? <br />
            <span className={classes.highlightedText}>Adam Ginther</span> is
            waiting! 😉
          </h1>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
