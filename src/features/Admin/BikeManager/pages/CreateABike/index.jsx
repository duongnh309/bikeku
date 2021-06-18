import { useSnackbar } from 'notistack';
import React from 'react';
import { useState } from 'react';
import productApi from '../../../../../api/productApi';
import CreateForm from '../../components/CreateForm';

CreateABike.propTypes = {

};

function CreateABike(props) {
    const { enqueueSnackbar } = useSnackbar();
    const handleSubmit = async (values) => {
        try {
            await productApi.add(values);
            enqueueSnackbar('Create successfully', { variant: 'success' });
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
        }

    }

    

    //sang
    return (
        <>
        <h1>Create a new bike</h1>
            <CreateForm onSubmit={handleSubmit} />
        </>
    );
}

export default CreateABike;