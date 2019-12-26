import API from "../../util/api";

export const userService = {
  login,
  logout
};

async function login(username: string, password: string) {  
    let response = await API.post('test', JSON.stringify({ username, password }));
    return response.data;
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}
