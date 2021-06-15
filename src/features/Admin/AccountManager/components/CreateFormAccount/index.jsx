import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, makeStyles, MenuItem, TextField, Typography } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../../components/form-control/InputFeild';
import PasswordField from '../../../../../components/form-control/PasswordField';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

CreateFormAccount.propTypes = {
    onSubmit: PropTypes.func,
};

function CreateFormAccount(props) {
    const { onSubmit } = props;

    const schema = yup.object().shape({
        name: yup.string()
            .required('Plss enter you Name')
            
        ,
        userName: yup.string()
            .required('Plss enter you userName')
            
        ,
        email: yup.string().required('Please enter your email!').email('You have to write email correctly'),

        password: yup.string().required().min(6, 'At least 6 characters'),
        
        retypePassword: yup.string().required('Retype password').oneOf([yup.ref('password')], 'Password does not match'),
    });
    const [role,setRole]= useState(['User']);

    const regisform = useForm({
        defaultValues: {
            name: '',
            userName: '',
            password: '',
            retypePassword: '',
            email: '',
            role: role,
        },
        resolver: yupResolver(schema),
    });

    const solveSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values);
            regisform.reset();
        }
    }
    const { isSubmitting } = regisform.formState;
    const {register} = regisform;
    return (
        <div>
            {isSubmitting && <LinearProgress />}
            <Avatar>
                <CodeIcon>
                </CodeIcon>
            </Avatar>
            <Typography component='h3' variant='h5'>
                Create an account
            </Typography>

            <form noValidate onSubmit={regisform.handleSubmit(solveSubmit)}>
                <InputField name='name' label='Name' form={regisform} id='name' />
                <InputField name='userName' label='UserName' form={regisform} id='userName' />
                <InputField name='email' label='Email' form={regisform} id='email' />

                <TextField
                    label='Role'
                    select
                    variant='outlined'
                    fullWidth
                    value={role}
                    {...register('roletmp')}
                    onChange={(e)=>setRole(e.target.value)}
                >
                    <MenuItem key='admin' value='Admin'>Admin</MenuItem>
                    <MenuItem key='saler' value='Saler'>Saler</MenuItem>
                    <MenuItem key='modifier' value='Modifier'>Modifier</MenuItem>
                    <MenuItem key='user' value='User'>User</MenuItem>
                </TextField>

                <PasswordField name='password' label='Password' form={regisform} id='password' />
                <PasswordField name='retypePassword' label='Retype Password' form={regisform} id='retypePassword' />
                <br />
                <br />
                <Button disabled={isSubmitting} variant="contained" color="primary" disableElevation type='submit' >
                    Create an account
                </Button>
            </form>
        </div>
    );
}

export default CreateFormAccount;