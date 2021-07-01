import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import homeslider1 from './img/homeslider.jpg'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  cardt: {
    maxWidth: 345,
  },
  root: {
    flexGrow: 1,
    margin: 25,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ProfileCard = ({profileData}) => {
  const classes = useStyles();
//  const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
  <div className={classes.root}>    
      <Grid container spacing={3}>
          {profileData.map((value, key) => {
      return  <Grid item xs={3}><Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {value.fullName.charAt(0)}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={value.fullName}
              subheader={value.location}
            />
            <CardMedia
              className={classes.media}
              image={homeslider1}
              title="user pics"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Height: {value.height}
              </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                WorkAt : {value.job}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </CardActions>
              {/* <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="More Details"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                    What he works on
                </Typography>
                <Typography paragraph>
                  Family Details
                </Typography>
                <Typography paragraph>
                  Contact Details
                </Typography>
                <Typography>
                  Call Now
                </Typography>
              </CardContent>
            </Collapse> */}
          </Card>
          </Grid>
    })}
        </Grid>

  </div>

  );
}

export default ProfileCard