import { nanoid } from 'nanoid';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import productApi from '../../../../../api/productApi';
import UpdateForm from '../../components/UpdateForm';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';

UpdateABike.propTypes = {

};

function UpdateABike(props) {
    const location = useLocation();
    const params = queryString.parse(location.search);
    const bikeId = params.id;
    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();

    


    const handleSubmit = async (values) => {
        try {
            await productApi.update(bikeId, values);
            enqueueSnackbar('Update successfully', { variant: 'success' });
            history.replace("/admin/bikes");
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    }


    return (
        <div>
            <h1>Update a bike</h1>
            <UpdateForm key={nanoid()} updateBike={props.bike} onSubmit={handleSubmit} />
        </div>


    );
}

export default UpdateABike;