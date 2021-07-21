import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Avatar, FormHelperText, Grid } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Typography } from "@material-ui/core";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const paperStyle = {
    padding: "20px 20px",
    height: "70vp",
    width: 350,
    margin: "20px auto",
  };

  const initialValues = {
    name: "",
    gender: "",
    emailId: "",
    phone: "",
    password: "",
    confirmPassword: "",
    termsCheck: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Please Emter valid Name").required("required"),
    emailId: Yup.string()
      .email("Please Emter valid emailId")
      .required("required"),
    phone: Yup.number().typeError("Enter Valid phone number"),
    gender: Yup.string().oneOf(["male", "female", "others"], "Required"),
    password: Yup.string().required("required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passowrd dont match")
      .required("required"),
    termsCheck: Yup.string().oneOf(
      ["true"],
      "please accept terms and condtion"
    ),
  });

  const onSubmit = (values) => {
    console.log("hi signup", values);
  };
  const avtarStyle = { backgroundColor: "#ff7c7c" };
  const btnStyle = { margine: "8px 0" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avtarStyle}>
            <FavoriteBorderIcon />
          </Avatar>

          <Typography variant="caption">
            please fill below form to create a account
          </Typography>
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
                name="name"
                label="Name"
                fullWidth
                helperText={<ErrorMessage name="name" />}
              />
              <FormControlLabel
                component="fieldset"
                style={{ marginTop: 10 }}
                helperText={<ErrorMessage name="name" />}
              >
                <FormLabel component="legend" align="left">
                  Gender
                </FormLabel>
                <RadioGroup
                  as={RadioGroup}
                  aria-label="gender"
                  name="gender"
                  style={{ display: "initial" }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControlLabel>
              <FormHelperText>
                <ErrorMessage name="gender" />
              </FormHelperText>
              <Field
                as={TextField}
                name="emailId"
                label="Email Id"
                fullWidth
                helperText={<ErrorMessage name="emailId" />}
              />
              <Field
                as={TextField}
                name="phone"
                label="Mobile Number"
                fullWidth
                helperText={<ErrorMessage name="phone" />}
              />
              <Field
                as={TextField}
                name="password"
                label="Password"
                fullWidth
                type="password"
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={TextField}
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                fullWidth
                helperText={<ErrorMessage name="confirmPassword" />}
              />
              <FormControlLabel
                as={FormControlLabel}
                name="termsCheck"
                control={<Checkbox name="checkedB" color="primary" />}
                label="I have read all terms and condtions"
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                style={btnStyle}
                fullWidth
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default SignUp;
