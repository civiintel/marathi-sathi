import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import {withRouter} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
      },
  },

}));

const SearchAppBar = props => {
  const classes = useStyles();
  const { history} = props;

  const handleButtonClick = pageUrl => {
    history.push(pageUrl)
  }
  return (

    <div className={classes.grow}>
      <AppBar position="static" color="secondary">
        <Toolbar style={{justifyContent: 'space-evenly'}}>
          <Typography className={classes.title} variant="h6" noWrap onClick={() => handleButtonClick('/')}>
            Reddy Marathi Sathi
          </Typography>

          <Button variant="contained" disabled />
          <Button variant="contained" onClick={() => handleButtonClick('/about')}>About us</Button>
          <Button variant="contained" disabled />
          <Button variant="contained" color="primary" onClick={() => handleButtonClick('/login')}>
            Login
          </Button>
          <Button variant="contained" disabled />
          <Button variant="contained" color="secondary" onClick={() => handleButtonClick('/register')}>
            Register
          </Button>
          <Button variant="contained" disabled />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          
        </Toolbar>
      </AppBar>
    </div>

  );
}

export default withRouter(SearchAppBar)