import { axiosClient } from "./axiosClient";

const orderApi = {
    async confirm(id) {
        const url = `/Order/Confirm/${id}`;
        return axiosClient;
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
}

export default orderApi;