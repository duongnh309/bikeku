
import { axiosClient } from "./axiosClient";

const productApi = {
    // async getAll(params) {
    //     //Transform _page to _start
    //     const newParams = { ...params }
    //     newParams._start = !params._page || params._page <= 1
    //         ? 0 : (params._page - 1) * (params._limit || 50);
    //     //Remove un-needed key
    //     delete newParams._page
    //     //fetch products list +count
    //     const productList = await easyFrontend.get('/products', {
    //         params:
    //             newParams
    //     });
    //     const count = await easyFrontend.get('/products/count', {
    //         params:
    //             newParams
    //     })
    //     return {
    //         data: productList,
    //         pagination: {
    //             page: params._page,
    //             _limit: params._limit,
    //             total: count.data
    //         }
    //     }
    // },


    async get(id){
        const url = `/api/products/${id}`;
        return (await axiosClient.get(url)).data;
    },

    async getAll(){
        const url = '/api/products';
        const productList = (await axiosClient.get(url)).data;
        console.log(productList);
        return {
            data:productList,
            pagination: {
                page:1,
                _limit:9,
                total:30
            }
        }
    }

}

export default productApi;