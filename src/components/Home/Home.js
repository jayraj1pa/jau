import React from "react";
import Wave from "react-wavify";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { FaDownload } from "react-icons/fa";
import { Typography, Paper, Grid, IconButton } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(8),
    marginBottom: theme.spacing(6)
  }
}));
const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Wave
        className="wave"
        fill="#E3D4C5"
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
      />
      <Paper elevation={2} className={classes.paper}>
        <Typography variant="h3" component="h5" align="center">
          Hi! I am Maha
        </Typography>
        <Typography variant="h5" gutterBottom align="center">
          Front-End Developer
        </Typography>
        <Grid container justify="center">
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
        <Typography variant="body1" align="center">
          Download Resume
          <IconButton href="/MahaResume.pdf" target="_blank">
            <FaDownload />
          </IconButton>
        </Typography>
      </Paper>
    </div>
  );
};

export default Home;
