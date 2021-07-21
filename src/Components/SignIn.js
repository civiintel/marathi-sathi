import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Avatar, Grid } from "@material-ui/core";
import LockOutLinedIcon from "@material-ui/icons/LockOutlined";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignIn = ({ handleChange }) => {
  const avtarStyle = { backgroundColor: "#ff7c7c" };
  const btnStyle = { margine: "8px 0" };

  const initialValues = {
    username: "",
    password: "",
    remberme: false,
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("Please Emter valid emailId")
      .required("required"),
    password: Yup.string()
      .min(5, "please enter minimum 5 char")
      .required("required"),
  });

  const paperStyle = {
    padding: "30px 20px",
    height: "70vp",
    width: 350,
    margin: "20px auto",
  };

  const onSubmit = (values) => {
    console.log("hi", values);
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avtarStyle}>
            <LockOutLinedIcon />
          </Avatar>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form>
              <Field
                as={TextField}
                label="Username"
                name="username"
                placeholder="Enter Username"
                fullWidth
                required
                helperText={<ErrorMessage name="username" />}
              />
              <Field
                as={TextField}
                name="password"
                label="Password"
                placeholder="Enter Password"
                type="password"
                fullWidth
                required
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={FormControlLabel}
                name="rememberme"
                control={<Checkbox color="primary" />}
                label="Save Login Details"
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                style={btnStyle}
                fullWidth
              >
                Sign In
              </Button>
            </Form>
          )}
        </Formik>
        <Typography>
          <Link href="#">Forgot Password</Link>
        </Typography>
        <Typography>
          <Link
            href="#"
            onClick={() => handleChange("event", 1)}
            underline="none"
          >
            You can SignUp from here
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default SignIn;
