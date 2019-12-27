import { ReduxAppConstants } from "../constants/redux-constants";
import { userService } from "../services/user-service";
import { Dispatch } from "redux";

export const RegisterActions = {
  register
};

function register(formData: any) {
  return async (dispatch: Dispatch, getState: any) => {
    console.log("In register action");
    dispatch({
      type: ReduxAppConstants.USER_REGISTER_REQUEST,
      payload: {}
    });

    //TODO: Remove hard coded form data
    userService
      //.register(formData)
      .register({
        email: "eve.holt@reqres.in",
        password: "pistol"
      })
      .then(response => {
        dispatch({
          type: ReduxAppConstants.USER_REGISTER_RESPONSE,
          payload: response
        });
      })
      .catch(error => {
        dispatch({
          type: ReduxAppConstants.USER_REGISTER_RESPONSE,
          payload: error
        });
      });
  };
}
