import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
import SignInOutContainer from "../Containers/SiognInOutContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <SignInOutContainer />
      </Grid>
    </div>
  );
};

export default Home;
