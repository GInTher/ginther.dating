import React from "react";
import {
  Grid,
  makeStyles,
} from "@material-ui/core/";
import aliyah from "../aliyah.jpg";
import cop from "../cop.jpeg";
import doctor from "../doctor.jpeg";
import woman from "../woman.jpeg";
import { pink } from "@material-ui/core/colors";
import lumberjack from "../lumberjack.jpeg";
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
          With tens of users all over the world, Adam Ginther Exposed gives you
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
          ready for a change. So we here at Adam Ginther exposed reverse
          engineered the swipe: Using our very complex algorithms, we only give
          you your very best options.
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
        <Grid item sm={4}>
          <img
            src={aliyah}
            alt={"Women being proposed to."}
            className={classes.image}
          />
          <p>
            "He's such a great guy, I would 100% recommend him to every girl. He
            is amazing."
          </p>
          <h6>Aliyah Profsplop, Adam's ex-fiance from 4 years ago</h6>
        </Grid>
        <Grid item sm={4}>
          <img src={woman} alt={"Girl shrugging"} className={classes.image} />
          <p>"He was alright I guess"</p>
          <h6>- Adam's friend from grade 2</h6>
        </Grid>
        <Grid item sm={4}>
          <p>"He's my favourite son"</p>
          <h6>- Adam's mom</h6>
        </Grid>
      </Grid>
      <Grid container xs={8} align={"center"}>
        <Grid item xs={12}>
          <h1>
            With people like this
            <br /> How could you ever say no?
          </h1>
        </Grid>
        <Grid item sm={4}>
          <img
            src={lumberjack}
            alt={"A lumberjack"}
            className={classes.image}
          />
          <h4>Lumberjack</h4>
          <p>Known for being experienced with lots of wood.</p>
        </Grid>
        <Grid item sm={4}>
          <img src={cop} alt={"A cop"} className={classes.image} />
          <h4>Police Officer</h4>
          <p>
            Will save you from being robbed AND arrest you, if you're lucky.
          </p>
        </Grid>
        <Grid item sm={4}>
          <img src={doctor} alt={"A doctor"} className={classes.image} />
          <h4>Doctor</h4>
          <p>Will have no problem mending your broken heart.</p>
        </Grid>
      </Grid>

      <Grid item sm={8} align="center">
        <h1>
          Well, what are you waiting for? <br />
          <span className={classes.highlightedText}>Adam Ginther</span> is
          waiting! 😉
        </h1>
      </Grid>
    </Grid>
  );
}

export default Home;
