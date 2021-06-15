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
        console.log(values);
        const newValues = {...values, roles : [values.roletmp]}
        try {
            await accountApi.registerByAdmin(newValues);
            enqueueSnackbar('Register successfully', { variant: 'success' });
        } catch (error) {
            enqueueSnackbar('Register Fail', { variant: 'error' });
        }
    }
    return (
        <div>
            <CreateFormAccount onSubmit={handleSubmit} />
        </div>
    );
}

export default CreateAccount;