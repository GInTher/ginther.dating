import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core/";
import { Helmet } from "react-helmet";
import fiance from "../images/home/fiance.jpg";
import mom from "../images/home/mom.jpg";
import millionaireBanner from "../images/home/banners/millionaire.png";
import pokerPlayerBanner from "../images/home/banners/poker-player.png";
import stayAtHomeSonBanner from "../images/home/banners/stay-at-home-son.png";
import streetFighterBanner from "../images/home/banners/street-fighter.png";
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
    marginTop: isMobile ? theme.spacing(8) : theme.spacing(4),
    textAlign: isMobile && "left",
    fontSize: "1.8rem"
  },
  testimonialSubheader: {
    marginBottom: isMobile ? theme.spacing(6) : theme.spacing(4),
    textAlign: isMobile && "left",
  },
  testimonialPerson: {
    margin: isMobile && theme.spacing(0, 0, 8)
  },
  banner: {
    display: "block",
    maxWidth: "100%",
    margin: isMobile ? theme.spacing(4, 0, 2) : theme.spacing(6, 0)
  },
  appBanner: {
    display: "block",
    maxWidth: "92%",
    margin: isMobile ? theme.spacing(0, 0, 3) : theme.spacing(10, 0)
  },
  // TODO: Remove this hack
  floatRight: {
    float: "right"
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
    marginBottom: isMobile ? theme.spacing(12) : theme.spacing(2)
  },
  mainHeader: {
    margin: isMobile ? theme.spacing(12, 0, 2) : theme.spacing(6, 0, 1)
  },
  bottomHeader: {
    margin: !isMobile && theme.spacing(6, 0, 1)
  },
  paragraph: {
    lineHeight: 1.5
  },
  subHeader: {
    marginTop: theme.spacing(0),
    fontWeight: 400,
    marginBottom: theme.spacing(5)
  },
  highlightedText: {
    color: pink[500],
    fontWeight: 700,
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
        <Grid item lg={5} xl={8}>
          {!isMobile && (
            <Grid container>
              <Grid item xs={4}>
                <img
                  src={stayAtHomeSonBanner}
                  alt={""}
                  className={classes.appBanner}
                  loading="eager"
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  src={pokerPlayerBanner}
                  alt={""}
                  className={classes.appBanner}
                  loading="eager"
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  src={millionaireBanner}
                  alt={""}
                  className={classes.appBanner}
                  loading="eager"
                />
              </Grid>
            </Grid>
          )}
        </Grid>
        <Grid
          item
          xs={11}
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
            <Grid container>
              <Grid item xs={6}>
                <img
                  src={stayAtHomeSonBanner}
                  alt={""}
                  className={classes.appBanner}
                  loading="eager"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src={pokerPlayerBanner}
                  alt={""}
                  className={`${classes.appBanner} ${classes.floatRight}`}
                  loading="eager"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src={streetFighterBanner}
                  alt={""}
                  className={classes.appBanner}
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src={millionaireBanner}
                  alt={""}
                  className={`${classes.appBanner} ${classes.floatRight}`}
                />
              </Grid>
            </Grid>
          )}
        </Grid>
        <Grid item xs={11} sm={12} align={"center"}>
          <h1 className={classes.testimonialHeader}>
            Over <span className={classes.highlightedText}>3 women</span>{" "}
            approved of{" "}
            <span className={classes.highlightedText}>Adam Ginther.</span>
          </h1>
          <h3 className={`${classes.subHeader} ${classes.testimonialSubheader}`}>
            We even have testimonials from totally real women!
          </h3>
        </Grid>
        <Grid item xs={11} sm={3} align={"center"}>
          <img
            src={fiance}
            alt={"Women being proposed to by a handsome man."}
            className={classes.image}
          />
          <p className={classes.testimonialBody}>
            "He's such a great guy, I would recommend him to every girl. He is
            simply amazing."
          </p>
          <h6 className={classes.testimonialPerson}>
            - Aliyah Profsplop, Adam's ex-fiance from 4 years ago
          </h6>
        </Grid>
        <Grid item xs={11} sm={3} align={"center"}>
          <img
            src={mom}
            alt={"A handsome man and his mom."}
            className={classes.image}
          />
          <p className={classes.testimonialBody}>
            "He's my favourite son.
            <br />
            But also my only son."
          </p>
          <h6 className={classes.testimonialPerson}>- Adam's mom</h6>
        </Grid>
        <Grid item xs={11} sm={3} align={"center"}>
          <img src={woman} alt={"Girl shrugging"} className={classes.image} />
          <p className={classes.testimonialBody}>"He was alright I guess?"</p>
          <h6 className={classes.testimonialPerson}>
            - Adam's friend from grade 2
          </h6>
        </Grid>

        <Grid item xs={11} lg={5} xl={6}>
          <h1 className={classes.bottomHeader}>
            Well, what are you doing?
          </h1>
          <h3 className={classes.subHeader}>
            <span className={classes.highlightedText}>Adam Ginther</span> is waiting for
            you{" "}
            <span role="img" aria-label="Winking face">
              😉
            </span>
          </h3>
        </Grid>
        <Grid item xs={11} lg={5} xl={6}>
          <SignUpForm />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
