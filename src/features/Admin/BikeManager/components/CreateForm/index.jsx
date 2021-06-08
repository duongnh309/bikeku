import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Icon, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputFeild from '../../../../../components/form-control/InputFeild';
import {useDropzone} from 'react-dropzone'
import PublishIcon from '@material-ui/icons/Publish';


CreateForm.propTypes = {
    onSubmit: PropTypes.func,
};

function CreateForm(props) {
    const schema = yup.object().shape({
        name: yup.string().required('Please enter your name!')
            .test('should has at least two words', 'please enter at least two words', (value) => {
                return value.split(' ').length >= 2;
            }),
        maker: yup.string().required('Please enter the maker!'),
        price: yup.number().min(0),
        quantity: yup.number().min(0).integer(),
        category: yup.string().required('Please enter your category!'),
    });

    const form = useForm({
        defaultValues: {
            name: '',
            maker: '',
            description: '',
            price: '',
            quantity: '',
            category: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (Values) => {
        // console.log("TODO FORM: ", Values);
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(Values);
        }

        form.reset();
    }

    const [files, setFiles] = useState([]);


    const { getRootProps, getInputProps, isDragActive } = useDropzone({
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

    const dropzoneActive = {
        borderColor: 'green',
    }

    const dropzoneStyle = {
        border: 'dashed 3px',
        borderColor: '#eee',
        borderRadius: '5px',
        paddingTop: '30px', 
        textAlign: 'center', 
        height: '200px',
        width: '200px'
    }

    return (
        <div>
            <div>
                <Avatar>
                    <LockOutlined>

                    </LockOutlined>
                </Avatar>
            </div>


            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputFeild name='name' label='Name' form={form} />
                <InputFeild name='maker' label='Maker' form={form} />
                <InputFeild name='description' label='Description' form={form} />
                <InputFeild name='price' label='Price' form={form} />
                <InputFeild name='quantity' label='Quantity' form={form} />
                <InputFeild name='category' label='Category' form={form} />

                <div {...getRootProps()} style={isDragActive?{...dropzoneStyle,...dropzoneActive}:dropzoneStyle}>
                        <input {...getInputProps()} />
                        <PublishIcon style={{ fontSize: 40 }}/>
                        <Typography>
                        Drop image here!
                        </Typography>
                    <div>{images}</div>
                </div>
                <br/>
                <br/>

                <button className="btn btn-primary" type='submit' >
                    <i className="fa fa-edit"></i> Create New Product
                </button>

                <a className="btn btn-default" href="/admin/bikes" type='submit' style={{float:'right'}}> 
                    Cancel
                </a>
            </form>
        </div>
    );
}

export default CreateForm;