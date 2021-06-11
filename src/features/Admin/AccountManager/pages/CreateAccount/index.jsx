import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import accountApi from '../../../../../api/accountApi';
import CreateFormAccount from '../../components/CreateFormAccount';

CreateAccount.propTypes = {
    
};
function CreateAccount() {

    const { enqueueSnackbar } = useSnackbar()

    const handleSubmit = async (values) => {
        try {
            const newValue ={...values,roles:[values.roletmp]}
            accountApi.registerByAdmin(values);
            enqueueSnackbar('Register successfully', { variant: 'success' });
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    }

    return (
        <div>
            <CreateFormAccount onSubmit={handleSubmit} />
        </div>
    );
}

export default CreateAccount;