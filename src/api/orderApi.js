import CheckoutFeature from "../features/User/Checkout";
import { axiosClient } from "./axiosClient";

const orderApi = {
    async confirm(id) {
        const url = `/Order/Confirm/${id}`;
        axiosClient.post(url);
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

}
export default orderApi;