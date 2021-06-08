import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, Typography } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputFeild from '../../../../../components/form-control/InputFeild';
import PasswordField from '../../../../../components/form-control/PasswordField';
import {useDropzone} from 'react-dropzone'

CreateFormAccount.propTypes = {
    onSubmit : PropTypes.func.isRequired,
};

function CreateFormAccount(props) {
    const { onSubmit } = props;
    const schema = yup.object().shape({
        fullName: yup.string()
            .required('Plss enter you fullName')
            .test('Should has two words', 'Please enter at least two words', (values) => {
                return values.split(' ').length >= 2;
            })
        ,
        email: yup.string().required('Please enter your email!').email('You have to write email correctly'),
        password: yup.string().required().min(6, 'At least 6 characters'),
        retypePassword: yup.string().required('Retype password').oneOf([yup.ref('password')], 'Password does not match'),
        address : yup.string().required('Plss enter you fullName').min(6, 'At least 6 characters'),
        phone : yup.string().required(),
    });
    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
            phone :'',
            role:'',
            address :'',
        },
        resolver: yupResolver(schema),
    });
    const solveSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values);
            form.reset();
        }
    }
    const { isSubmitting } = form.formState;

    const fileUploadHandler = () => {
        console.log('Upload');
    }

    const [files, setFiles] = useState([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    }))
            )
        }
    })

    const images = files.map((file) => (
        <div key={file.name}>
            <div>
                <img src={file.preview} style={{ width: '200px',height:'150px' }} alt="preview" />
            </div>
            {console.log(files)}
        </div>
    ))
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
            <form onSubmit={form.handleSubmit(solveSubmit)}>
                <InputFeild name='fullName' label='FullName' form={form} />
                <InputFeild name='email' label='Email' form={form} />
                <InputFeild name='phone' label='Phone' form={form} />
                <InputFeild name='address' label='Address' form={form} />
                <InputFeild name='role' label='Role' form={form} />
                <PasswordField name='password' label='Password' form={form} />
                <PasswordField name='retypePassword' label='Retype Password' form={form} />
                <p >Drop image here!</p>
                <div {...getRootProps()} style={{ width: '210px',height:'160px', borderStyle:'dashed' }}>
                        <input {...getInputProps()} />
                    <div>{images}</div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <button onClick={fileUploadHandler}  >
                    Upload
                </button>
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