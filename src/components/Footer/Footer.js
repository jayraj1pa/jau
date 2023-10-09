import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { animateScroll as scroll } from "react-scroll";
import mlogo from "../../images/mlogo.png";
import Wave from "react-wavify";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(2),
    backgroundColor: "#F9F9F9"
  },
  text: {
    marginTop: 10
  },
  img: {
    height: "80%",
    width: 180,
    cursor: "pointer"
  }
}));
function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="h6" color="textSecondary" className={classes.text}>
      {" © "}
      {new Date().getFullYear()}
      {"| Maha.M"}
    </Typography>
  );
}
const Footer = () => {
  const classes = useStyles();
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className={classes.paper}>
      <Grid container spacing={4} justify="space-evenly">
        <Grid item>
          <img
            src={mlogo}
            alt="logo"
            className={classes.img}
            onClick={scrollToTop}
          />
        </Grid>
        <Grid item>
          <Copyright />
        </Grid>
        <Grid item>
          <Grid container spacing={2} justify="space-between">
            <Grid item>
              <IconButton
                href="https://github.com/Maha-Mustafa"
                target="_blank"
                color="secondary"
              >
                <GitHubIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href="https://www.linkedin.com/in/maha-mustafa/"
                target="_blank"
                color="primary"
              >
                <LinkedInIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Wave
        fill="#E3D4C5"
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 4
        }}
      />
    </div>
  );
};

export default Footer;
