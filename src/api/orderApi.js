import { get } from "react-hook-form";
import { axiosClient } from "./axiosClient";

const orderApi = {
    async confirm(id) {
        const url = `/Orders/Confirm/${id}`;
        axiosClient.put(url);
    },

    async getAll(filter) {
        var url = '/Orders';

        const response = await (axiosClient.get(url, {
            params: filter
        }));
        return {
            data: response.data,
            pagination: {
                total: response.total,
                page: filter.PageNumber,
                PageSize: filter.PageSize
            }
        }
    },
    
    async checkout(data){
        const url = '/Orders/Checkout';
        return await axiosClient.post(url,data);
    },
    async getMyOrder(pageNumer,pagesize){
        const url = `/Orders/MyOrders?PageNumber=${pageNumer}&PageSize=${pagesize}`
        return  await axiosClient.get(url);
    },
     async getByEmail(email){
         const url = `Orders/Email/${email}`;
         const response = await axiosClient.get(url);
         return response.data;
     },
     async get(id){
        const url = `/Orders/${id}`;
        return axiosClient.get(url);
     }
}
export default orderApi;