import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputFeild from '../../../../../components/form-control/InputFeild';


UpdateForm.propTypes = {
    onSubmit: PropTypes.func,
};

function UpdateForm({ updateBike, onSubmit }) {
    
    const schema = yup.object().shape({
        name: yup.string().required('Please enter your name!')
            .test('should has at least two words', 'please enter at least two words', (value) => {
                return value.split(' ').length >= 2;
            }),
        maker: yup.string().required('Please enter the maker!'),
        price: yup.number().min(0),
        quantity: yup.number().min(0).integer(),
        minQuantity: yup.number().min(0).integer(),
        category: yup.string().required('Please enter your category!'),
    });

    const form = useForm({
        defaultValues: {
            name: updateBike.name||'',
            maker: updateBike.maker||'',
            description: updateBike.description||'',
            price: updateBike.price||'',
            quantity: updateBike.quantity||'',
            minQuantity: updateBike.minQuantity||'',
            category: updateBike.category||'',
        },
        resolver: yupResolver(schema),
    });
    

    const handleSubmit = (values) => {
        values.imageUrl = files[0].preview;
        if (onSubmit) {
            onSubmit(values);
        }
    }


    const [files, setFiles] = useState([]);

    const dropzoneStyles = {
        border: 'dashed 3px',
        borderColor: '#eee',
        borderRadius: '5px',
        paddingTop: '30px',
        textAlign: 'center',
        height: '200px',
        width:'250px'
    }

    const dropzoneActive ={
        borderColor: 'green'
    }

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
            
        </div>
    ))

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
                <InputFeild name='minQuantity' label='Min Quantity' form={form} />
                <InputFeild name='category' label='Category' form={form} />

                <p >Drop image here!</p>
                <div {...getRootProps()} style={isDragActive ? {...dropzoneStyles, ...dropzoneActive}: dropzoneStyles}>
                        <input {...getInputProps()} />
                    <div>{images}</div>
                </div>
                <br />
                <br />
                <br />

                <button className="btn btn-primary">
                    <i className="fa fa-edit"></i>Update a Product
                </button>

                <a className="btn btn-default" href="/admin/bikes"  type='submit' style={{float:'right'}}> 
                    Cancel
                </a>
            </form>
        </div>
    );
}

export default UpdateForm;