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
  input: {
    display: 'none',
  },
}));

const Register = () => {
  const classes = useStyles();

  const UploadButtons = () => {
  
    return (
      <div style={{width: '228px'}} >
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload Profile Picture
          </Button>
        </label>
        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      </div>
    );
  }
  

//   ⦁	login/Sign Up ( Create Profile ) = Name, photo, family details, location, contact number , email id for sign up/ phone number  
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Paper elevation={3} style={{}} >
      <TextField id="standard-basic" label="Full Name" />
      <TextField id="standard-basic" label="Password for future login" />
      <TextField id="standard-basic" label="Family Details" />
      <TextField id="standard-basic" label="Mobile Number" />
      <TextField id="standard-basic" label="Family contact Number" />
      <TextField id="standard-basic" label="Email id (optional)" />
      {UploadButtons()}
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
      Register
</Button>
      </Paper>
    </form>
  );
}

export default Register