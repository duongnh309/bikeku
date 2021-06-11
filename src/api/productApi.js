
import { PublicTwoTone } from "@material-ui/icons";
import { axiosClient } from "./axiosClient";

const productApi = {
    async getAll(filter) {
        var url = '/Products';
        if (filter.searchBy) {
            if (filter.searchBy === 'Maker') {
                url = `/Products/Maker/${filter.value}`;
            }
            else if (filter.searchBy === 'Name') {
                url = `/Products/Name/${filter.value}`;
            }
        }
        else if (filter.priceRange) {
            if (filter.priceRange !== 'default') {
                var [min, max] = filter.priceRange.split('-');
                if (filter.priceRange === '100000') {
                    min = 8000;
                    max = 100000;
                }
                url = `/Products/Price/${min}/${max}`;
            }
        }
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


    async get(id) {
        const url = `/Products/${id}`;
        return (await axiosClient.get(url));
    },


    async update(id,data){
        console.log(data);
        const url = '/Products/Update';
        const neededId = {id: id};
        return axiosClient.put(url,{status:'ok'},{params: neededId,data:data});
    },

    async add(data){
        const url = '/Products/Add';
        return await axiosClient.post(url,data);
    }


}

export default productApi;