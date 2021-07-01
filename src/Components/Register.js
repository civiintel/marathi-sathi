import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as Yup from 'yup';


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

const initialValues = {
    fullName: "",
    height: "",
    email: '',
    location: "",
    job: "",
    contactNumber: "",
    password : '',
}

const validationSchema = Yup.object().shape({
  fullName: Yup.string().min(5).required('Full Name must be entered'),
    height: Yup.number().required('height is must'),
    email: Yup.string().required('Please provide a valide email id'),
    location: Yup.string().min(3).required('laction is required'),
    job: Yup.string().min(3).required('provife your job profie'),
    contactNumber: Yup.number().max(10).required('enter family/personal conatct number'),
    password : Yup.required('Please enter a password'),
})

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
  
  const handleRegisterSubmit = data => {
    console.log(data);
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleRegisterSubmit} validationSchema={validationSchema}>
<Form>
      <Paper elevation={3} style={{}} >
            <Field
              component={TextField}
              label="Full Name"
              name="fullName"
              type="text"
            />
            <ErrorMessage name="fullName" component='span' />
            <Field
              component={TextField}
              type="password"
              label="Enter a Password"
              name="password"
            />
            <ErrorMessage name="password" component='span' />
            <Field
              component={TextField}
              type="number"
              label="Conatct Number"
              name="contactNumber"
            />
            <ErrorMessage name="contactNumber" component='span' />            
            <Field
              component={TextField}
              type="text"
              label="Location"
              name="location"
            />
            <ErrorMessage name="location" component='span' />            
            <Field
              component={TextField}
              type="text"
              label="Company"
              name="job"
            />
            <ErrorMessage name="job" component='span' />            
            <Field
              component={TextField}
              type="text"
              label="Height in FT"
              name="height"
            />
            <ErrorMessage name="height" component='span' />
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
              helperText="Please Enter Email"
            />
            <ErrorMessage name="email" component='span' />            
      {UploadButtons()}
        <FormControlLabel
              control={
                <Field component={Checkbox} checked={true} type="checkbox"  name="checkedB" color="primary" />
              }
        label="Save Login Details"
            />

      <Button variant="contained" color="secondary" type='submit'> 
      Register
</Button>
      </Paper>
</Form>
  </Formik>
  );
}

export default Register