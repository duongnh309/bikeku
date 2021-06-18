import { nanoid } from 'nanoid';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useHistory } from 'react-router-dom';
import productApi from '../../../../../api/productApi';
import UpdateForm from '../../components/UpdateForm';

UpdateABike.propTypes = {

};

function UpdateABike({bike}) {
    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();

    


    const handleSubmit = async (values) => {
        try {
            await productApi.update(bike.id, values);
            enqueueSnackbar('Update successfully', { variant: 'success' });
            history.replace("/admin/bikes");
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    }


    return (
        <div>
            <h1>Update a bike</h1>
            <UpdateForm key={nanoid()} updateBike={bike} onSubmit={handleSubmit} />
        </div>


    );
}

export default UpdateABike;