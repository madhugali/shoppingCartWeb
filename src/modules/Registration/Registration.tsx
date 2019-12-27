import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
//import { withStyles } from "@material-ui/styles";
//import { WithStyles, createStyles } from '@material-ui/core';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import { RegisterActions } from "../../redux/actions/registration-action";

interface RegistrationInterface {
  registerUser: Function;
  preventDefault: Function;
  registerClick: Function;
  handleChange: Function;
  handleSubmit: Function;
  classes: any;

  isFetching: boolean;
  isSuccess: boolean;
  data: any;
}

interface ResterationFormStateI {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  tc: string;
  classes: any;
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = () => ({
  paper: {
    marginTop: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: "1px"
    //backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "3px"
  },
  submit: {
    //margin: theme.spacing(3, 0, 2)
  }
});

class SignUp extends React.Component<
  RegistrationInterface & RouteComponentProps & typeof useStyles,
  any
> {
  constructor(props: any) {
    super(props);
    this.state = {
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        tc: ""
      },
      submitted: false
    };
  }

  componentDidUpdate() {
    if (!this.props.isFetching && this.props.isSuccess) {
      this.props.history.push("/signin");
    }
  }

  preventDefault = (event: any) => event.preventDefault();

  registerClick = () => {
    this.preventDefault("");
    this.props.history.push("/signin");
  };

  handleChange = (event: any) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    //TODO: uncomment this
    //this.setState({ submitted: true });
    this.props.registerUser(this.state.formData);
  };

  render() {
    //const { classes} = useStyles;
    const { formData, submitted } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Avatar>{/**** <LockOutlinedIcon /> ******** */}</Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <ValidatorForm ref="form" onSubmit={this.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextValidator
                  autoComplete="fname"
                  name="firstName"
                  value={formData.firstName}
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={this.handleChange}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextValidator
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  autoComplete="lname"
                  onChange={this.handleChange}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
              <Grid item xs={12}>
                <TextValidator
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  autoComplete="email"
                  onChange={this.handleChange}
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    "this field is required",
                    "email is not valid"
                  ]}
                />
              </Grid>
              <Grid item xs={12}>
                <TextValidator
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  value={formData.password}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handleChange}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I will agree for terms and conditions"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              disabled={submitted}
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link
                  href="/signin"
                  variant="body2"
                  onClick={this.registerClick}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </ValidatorForm>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

function mapStateToProps(state: any) {
  const { isFetching, isSuccess, data } = state.registrationReducer;
  return {
    isFetching,
    isSuccess,
    data
  };
}

const mapDispatchToProps = {
  registerUser: RegisterActions.register
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp));
