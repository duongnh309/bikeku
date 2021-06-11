
import { axiosClient } from "./axiosClient";

const productApi = {
    //Transform _page to _start
    // const newParams = { ...params }
    // newParams._start = !params._page || params._page <= 1
    //     ? 0 : (params._page - 1) * (params._limit || 50);
    // //Remove un-needed key
    // delete newParams._page
    // //fetch products list +count
    async getAll(params) {
        var url = '/Products';
        if (params.searchBy === 'Maker') {
            url = `/Products/Maker/${params.value}`;
        }
        else if (params.searchBy === 'Name') {
            url = `/Products/Name/${params.value}`;
        }
        else if (params.priceRange) {
            if (params.priceRange !== 'default') {
                var [min, max] = params.priceRange.split('-');
                if (params.priceRange === '100000') {
                    min = 8000;
                    max = 100000;
                }
                url = `/Products/Price/${min}/${max}`;
            }
        }
        delete params.searchBy;
        delete params.priceRange;

        const response = await (axiosClient.get(url, {
            params: params
        }));
        return {
            data: response.data,
            pagination: {
                total: response.total,
                page: params.PageNumber,
                PageSize: params.PageSize
            }
        }
    },


    async get(id) {
        const url = `/api/products/${id}`;
        return (await axiosClient.get(url)).data;
    },


}

export default productApi;