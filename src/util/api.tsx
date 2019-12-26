import axios from 'axios';

var instance = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        //'Authorization': getAccessToken(),
    }
});

const onRequestSuccess = (config: any) => {
    // config.timeout = 10000;
    return config;
};

const onRequestError = (error: any) => {
    console.log("Error: ", error)
    return Promise.reject(error);
}

instance.interceptors.request.use(onRequestSuccess, onRequestError);

const onResponseSuccess = (response: any) => response;

const onResponseError = (error: object) => {
    if (error.toString().includes('403')) {
        window.location.href = '/accessDenied';
    }
    return Promise.reject(error);
};

instance.interceptors.response.use(onResponseSuccess, onResponseError);


export default instance;