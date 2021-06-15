import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import accountApi from '../../../../../api/accountApi';
import CreateFormAccount from '../../components/CreateFormAccount';

CreateAccount.propTypes = {
    handleClose:{}
};

CreateAccount.DefaultProp = {
    handleClose:PropTypes.func.isRequired,
};

function CreateAccount({handleUpdated}) {


    const { enqueueSnackbar } = useSnackbar()

    const handleSubmit = async (values) => {
        
        const newValues = {...values, roles : [values.roletmp]}
        try {
            await accountApi.registerByAdmin(newValues);
            handleUpdated();
            enqueueSnackbar('Register successfully', { variant: 'success' });
        } catch (error) {
            enqueueSnackbar(error, { variant: 'error' });
        }
    }
    return (
        <div>
            <CreateFormAccount onSubmit={handleSubmit} />
        </div>
    );
}

export default CreateAccount;