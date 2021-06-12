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
    const {setImageUrl} = props;
    const schema = yup.object().shape({
        name: yup.string().required('Please enter your name!'),
        maker: yup.string().required('Please enter the maker!'),
        price: yup.number().min(0),
        quantity: yup.number().min(0).integer(),
        category: yup.string().required('Please enter your category!'),
        minQuantity:yup.number().min(0).integer(),
    });

    const form = useForm({
        defaultValues: {
            name: '',
            maker: '',
            description: '',
            price: '',
            quantity: 0,
            category: '',
            minQuantity : 0,
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (Values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(Values);
        }
        form.reset();
        setImage('');
    }

    const [image, setImage] = useState('');
    const onChangeImg = (event)=>{
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(URL.createObjectURL(img));
            setImageUrl(URL.createObjectURL(img))
          }

    }
    const {register} = form;
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
                <InputFeild name='minQuantity' label='MinQuantity' form={form} />
                <InputFeild name='category' label='Category' form={form} />
                <Typography>Select Img : </Typography>
                <input  {...register('image')} type="file" id="my-img" name="ImageStyle" onChange={onChangeImg} />
                <img src={image} style={{width:'180px',height:'100px'}} />
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