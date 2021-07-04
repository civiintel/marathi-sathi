import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from './Slider';
import Register from './Register';


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
        <Grid item xs={8}>
          <Slider />
        </Grid>
        <Grid item xs={4}>
          <Register />
        </Grid>
</Grid>
    </div>
  );
}

export default Home