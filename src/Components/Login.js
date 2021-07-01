import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      padding: 100,
      alignItems: 'center',
    justifyContent: 'center',
    display: 'inline-block',
    marginTop: 15,
    },
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Paper elevation={3} style={{}} >
      <TextField id="standard-basic" label="UserName" />
      <TextField id="standard-basic" label="Password" />
      <FormControlLabel
        control={
          <Checkbox
            checked={true}
            name="checkedB"
            color="primary"
          />
        }
        label="Save Login Details"
      />
      <Button variant="contained" color="secondary">
        Login
      </Button>
      </Paper>
    </form>
  );
}

export default Login