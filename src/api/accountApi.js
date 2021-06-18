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
    async getAllAccounts(pageNumer,pagesize) {
        const url = `/Users?PageNumber=${pageNumer}&PageSize=${pagesize}`;
        const data =  await axiosClient.get(url);
        return data;
    },
    async registerByAdmin(data) {
        const url = '/Admin/Users/Register';
        return  await axiosClient.post(url,data);
    },
    

    
};
export default accountApi;