import API from "../../util/api";
import {ServiceURLConstants} from '../../constants/app-constants';

export const userService = {
  register,
  login,
  logout
};

async function login(username: string, password: string) {  
    let response = await API.post(`${ServiceURLConstants.USER_LOGIN_URL}`, JSON.stringify({ username, password }));
    console.log("api response: ", response.data);
    return response.data;
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}


async function register(formData: any) { 
  console.log("register request: ", formData);
  let response = await API.post(`${ServiceURLConstants.USER_REGISTER_URL}`, JSON.stringify(formData));
  console.log("api response: ", response.data);
  return response.data;
}
