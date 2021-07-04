import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import homeslider1 from './img/homeslider.jpg'

const useStyles = makeStyles({
  root: {
    flex: 1,
  },
});

const Slider = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="530"
          image={homeslider1}
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card>
  );
}

export default Slider