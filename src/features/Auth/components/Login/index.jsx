import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { login } from '../../userSlice';
import LoginForm from '../LoginForm';




Login.propTypes = {
    closeDialog: PropTypes.func,
};

function Login(props) {

    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();


    const handleSubmit = async (values) => {
        try {
            
            //----
            const action = login(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log(user);
            //
            if (user.role[0] === "Admin") {
                history.push("/admin/accounts");
            }
            if (user.role[0] === "Saler") {
                history.push("/admin/orders");
            }
            if (user.role[0] === "Modifier") {
                history.push("/admin/bikes");
            }

            //close dialog
            const { closeDialog } = props;
            if (closeDialog) {
                closeDialog();
            }
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });

        }
    };
    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;