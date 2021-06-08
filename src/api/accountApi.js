import {axiosClient} from "./axiosClient";


const accountApi = {
   
    register(data) {
        const url = `Users/Register`;
        return axiosClient.post(url, data);
    },
    login(data) {
        const url = `Users/Authenticate`;
        return axiosClient.post(url, data);
    },

    
};


export default accountApi;