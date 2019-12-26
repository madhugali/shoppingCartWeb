import { ReduxAppConstants } from "../constants/redux-constants";
import { userService } from "../services/user-service";
import { Dispatch } from "redux";

export const LoginActions = {
  login,
  logout
};

function logout() {
  userService.logout();
  return { type: ReduxAppConstants.LOGOUT };
}

function login(emailId: string, password: string) {
  return async (dispatch: Dispatch, getState: any) => {
    console.log("In login action");
    dispatch({
      type: ReduxAppConstants.GET_LOGGED_IN_USER_INFO,
      payload: {
        emailId: emailId,
        password: password
      }
    });

    userService
      .login(emailId, password)
      .then(response => {
        dispatch({
          type: ReduxAppConstants.SET_LOGGED_IN_USER_INFO,
          payload: response,
        });
        localStorage.setItem('user', JSON.stringify(response));
      })
      .catch(error => {
        console.log("error in API response");
      });
  };
}
