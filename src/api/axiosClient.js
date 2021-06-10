import axios from "axios";


const jwtToken = localStorage.getItem("token") || "";

const axiosClient = axios.create({
    baseURL: 'https://localhost:44304/',
    headers: {
        'Authorization': `Bearer ${jwtToken}`,
        'Content-Type': 'application/json'
    }
});

//Interceptors --muốn làm 1 cái gì cho tất cả req hoặc response 
// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, 
function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("Error response", error.response);
    const {config, status, data} = error.response;
     const URLS =['Users/Register', 'Users/Authenticate'];
    if(URLS.includes(config.url) && status === 400){

        if(data.message){
            throw new Error(data.message);
        }
        else{
            throw new Error(data);
        }
    }
    return Promise.reject(error);
});



export {axiosClient};