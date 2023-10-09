import React from "react";
import HighTech from "../../images/HighTech.png";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  border: {
    borderTop: "8px dotted #333",
    width: "100px",
    marginBottom: theme.spacing(2)
  },
  container: {
    marginBottom: theme.spacing(4)
  },
  img: {
    [theme.breakpoints.down("sm")]: {
      width: 200
    }
  },
  paper: {
    padding: theme.spacing(6)
    // marginLeft: -45
  }
}));
const About = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} id="about">
      <div className={classes.border}></div>
      <Typography variant="h3" color="primary" component="h6" gutterBottom>
        About
      </Typography>
      <Grid container justify="center">
        <Grid item xs={12} md={6}>
          <img src={HighTech} alt="about-img" className={classes.img} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6">About Me</Typography>
            <Typography variant="body1" align="justify">
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth. Por scientie,Li Europan lingues es membres
              del sam familie. Lor separat existentie es un myth. Por
              scientie,Li Europan lingues es membres del sam familie. Lor
              separat existentie es un myth. Por scientie,
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
