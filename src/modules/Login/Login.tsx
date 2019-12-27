import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector, /*useStore*/ } from "react-redux";
import {  withRouter } from "react-router";
import {LoginActions} from '../../redux/actions/login-action';

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

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function SignIn() {
  const classes = useStyles();
  let history = useHistory();

  // clear user details
  localStorage.removeItem("user");
  //const storeState = useStore().getState();
  
  const loginStoreData : any = useSelector((state:any) => state.loginReducer);
 
  if(!loginStoreData.isFetching && loginStoreData.isSuccess){
    if(loginStoreData.payload && loginStoreData.payload.validLogin && loginStoreData.payload.token){
      console.log("Authorized user");
      history.push("/home");
    }
    else{
      console.log("Unauthorized user!");
    }
  }


  //const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const [emailId, setEmailId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailIdError, setEmailIdError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const handleSubmit = (evt:any) => {
    evt.preventDefault();
    if(emailId.length<1){
        setEmailIdError(true);
    }
    else if(password.length<1){
        setPasswordError(true);
    }else{
        dispatch(LoginActions.login(emailId, password));
    }    
  };
  
  const registerClick = (evt:any) =>{
    evt.preventDefault();
    history.push("/signup");
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/**** <LockOutlinedIcon /> ******** */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            value={emailId}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            error={emailIdError}
            onChange={event => {
              setEmailId(event.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            autoComplete="current-password"
            error={passwordError}
            onChange={event => {
              setPassword(event.target.value);
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}            
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2" onClick={registerClick }>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

/*
function mapStateToProps(state: any) {
  console.log(state);
}

const mapDispatchToProps = {
  login: LoginActions.login,
};
*/
export default 
//connect(
  //mapStateToProps,
  //mapDispatchToProps)
  (withRouter(SignIn));