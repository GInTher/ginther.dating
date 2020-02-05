import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core/";
import { Helmet } from "react-helmet";
import fiance from "../images/home/fiance.jpg";
import mom from "../images/home/mom.jpg";
import banner from "../images/home/banner.png";
import mobileBanner from "../images/home/banner-mobile.png";
import { isMobile } from "react-device-detect";
import woman from "../images/home/shrugging-woman.jpg";
import { pink } from "@material-ui/core/colors";
import SignUpForm from "../components/SignUpForm";

const useStyles = makeStyles(theme => ({
  container: {
    margin: "0 auto"
  },
  signupMessaging: {
    padding: isMobile ? theme.spacing(2, 0) : theme.spacing(10, 0)
  },
  testimonialHeader: {
    marginBottom: isMobile ? theme.spacing(6) : theme.spacing(4),
    textAlign: isMobile && "left"
  },
  testimonialPerson: {
    margin: isMobile && theme.spacing(0, 0, 8),
  },
  banner: {
    display: "block",
    maxWidth: "100%",
    margin: isMobile ? theme.spacing(4, 0, 2) : theme.spacing(6, 0)
  },
  headingTextContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: isMobile ? 0 : theme.spacing(4)
  },
  getStartedButton: {
    maxWidth: "200px",
    display: "block",
    width: "100%",
    padding: theme.spacing(1),
    textAlign: "center",
    marginBottom: theme.spacing(2)
  },
  mainHeader: {
    margin: isMobile ? theme.spacing(6, 0, 2) : theme.spacing(6, 0, 1)
  },
  bottomHeader: {
    margin: !isMobile && theme.spacing(6, 0, 1)
  },
  paragraph: {
    lineHeight: 1.5
  },
  subHeader: {
    marginTop: theme.spacing(0),
    fontWeight: 400
  },
  highlightedText: {
    color: pink[500],
    lineHeight: 1.5
  },
  image: {
    borderRadius: "50%",
    border: `3px solid ${pink[500]}`,
    display: "block",
    maxWidth: "100%",
    width: "150px"
  },
  textAlignLeftMobile: {
    textAlign: isMobile && "left"
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Ginther | Home</title>
      </Helmet>
      <Grid container className={classes.container} justify={"center"}>
        <Grid item xs={10} lg={5} xl={8}>
          {!isMobile && (
            <img
              src={banner}
              alt={"The greatest app on the planet."}
              className={classes.banner}
            />
          )}
        </Grid>
        <Grid
          item
          xs={10}
          lg={5}
          xl={8}
          className={classes.headingTextContainer}
        >
          <h1 className={classes.mainHeader}>
            Like Tinder or Grindr, except only with the{" "}
            <span className={classes.highlightedText}>VERY BEST</span> options.
          </h1>
          <h4 className={classes.subHeader}>
            Rather than wasting your time in a hopeless dating pool, this app
            will connect you to the absolutely most{" "}
            <span className={classes.highlightedText}>
              greatest people around you.
            </span>
          </h4>
          <Button
            variant={"contained"}
            color={"primary"}
            className={classes.getStartedButton}
            component="a"
            href="#sign-up"
          >
            Get started
          </Button>
          {isMobile && (
            <img
            src={mobileBanner}
            alt={"The greatest app on the planet."}
            className={classes.banner}
          />
          )}
        </Grid>
        <Grid item xs={10} sm={12} align={"center"}>
          <h1 className={classes.testimonialHeader}>
            Over <span className={classes.highlightedText}>3 women</span>{" "}
            approved of{" "}
            <span className={classes.highlightedText}>Adam Ginther.</span>
          </h1>
        </Grid>
        <Grid item xs={10} sm={4} align={"center"}>
          <img
            src={fiance}
            alt={"Women being proposed to by a handsome man."}
            className={classes.image}
          />
          <p className={classes.testimonialBody}>
            "He's such a great guy, I would recommend him to every girl. He is
            simply amazing."
          </p>
          <h6 className={classes.testimonialPerson}>- Aliyah Profsplop, Adam's ex-fiance from 4 years ago</h6>
        </Grid>
        <Grid item xs={10} sm={4} align={"center"}>
          <img
            src={mom}
            alt={"A handsome man and his mom."}
            className={classes.image}
          />
          <p className={classes.testimonialBody}>
            He's my favourite son.
            <br />
            But also my only son.
          </p>
          <h6 className={classes.testimonialPerson}>- Adam's mom</h6>
        </Grid>
        <Grid item xs={10} sm={4} align={"center"}>
          <img src={woman} alt={"Girl shrugging"} className={classes.image} />
          <p className={classes.testimonialBody}>"He was alright I guess?"</p>
          <h6 className={classes.testimonialPerson}>- Adam's friend from grade 2</h6>
        </Grid>

        <Grid item xs={10} lg={5} xl={6}>
          <h1 className={classes.bottomHeader}>
            Well, what are you waiting for?
          </h1>
          <h3 className={classes.subHeader}>
            <span className={classes.highlightedText}>Adam Ginther</span> is
            waiting for you on the other side!
          </h3>
        </Grid>
        <Grid item xs={10} lg={5} xl={6}>
          <SignUpForm />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
