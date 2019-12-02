import React from "react";
import {
  Grid,
  makeStyles,
} from "@material-ui/core/";
import fiance from "../images/home/fiance.jpg";
import mom from "../images/home/mom.jpg";
import woman from "../images/home/shrugging-woman.jpg";
import { pink } from "@material-ui/core/colors";
import SignUpForm from "../components/SignUpForm";

const useStyles = makeStyles(theme => ({
    mainHeader: {
      marginBottom: theme.spacing(0)
    },
    subHeader: {
      marginTop: theme.spacing(0)
    },
    highlightedText: {
      color: pink[500]
    },
    image: {
      borderRadius: "50%",
      display: "block",
      maxWidth: "100%",
      width: "150px"
    }
  }));

function Home() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} justify={"center"}>
      <Grid item xs={12} lg={5} xl={8} justify={"center"}>
        <h1 className={classes.mainHeader}>
          Meet new, interesting people named{" "}
          <span className={classes.highlightedText}>Adam Ginther</span> near
          you.
        </h1>
        <p className={classes.subHeader}>
          With tens of users all over the world, Ginther.singles gives you
          the ability to connect with Adam Ginther. No matter where you are{" "}
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
          ready for a change. So we here at Ginther.singles reverse
          engineered the swipe: Using our very complex algorithms, we only give
          you your very best options.
        </p>
      </Grid>
      <Grid container xs={8} align={"center"}>
        <Grid item xs={12}>
          <h1>
            Over <span className={classes.highlightedText}>3 women</span>{" "}
            approved of {" "}
            <span className={classes.highlightedText}>Adam Ginther.</span>
          </h1>
        </Grid>
        <Grid item sm={4}>
          <img
            src={fiance}
            alt={"Women being proposed to by a handsome man."}
            className={classes.image}
          />
          <p>
            "He's such a great guy, I would 100% recommend him to every girl. He
            is amazing."
          </p>
          <h6>- Aliyah Profsplop, Adam's ex-fiance from 4 years ago</h6>
        </Grid>
        <Grid item sm={4}>
        <img
            src={mom}
            alt={"A handsome man and his mom."}
            className={classes.image}
          />
          <p>He's my favourite (but also my only) son.</p>
          <h6>- Adam's mom</h6>
        </Grid>
        <Grid item sm={4}>
          <img src={woman} alt={"Girl shrugging"} className={classes.image} />
          <p>"He was alright I guess"</p>
          <h6>- Adam's friend from grade 2</h6>
        </Grid>
      </Grid>

      <Grid item sm={8} align="center">
        <h1>
          Have the right conversations with the <span className={classes.highlightedText}>right person.</span>
        </h1>
      </Grid>

      <Grid item xs={12} lg={5} xl={6} justify={"center"}>
        <h1 className={classes.mainHeader}>
          Well, what are you waiting for?
          <span className={classes.highlightedText}>Adam Ginther</span> is waiting!
        </h1>
      </Grid>

      <Grid item xs={12} lg={5} xl={6} justify={"center"}>
      <SignUpForm />
       
      </Grid>
      
    </Grid>
  );
}

export default Home;
