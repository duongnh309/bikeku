import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputFeild from '../../../../../components/form-control/InputFeild';
import { storage } from '../../../../../firebase/firebase';



CreateForm.propTypes = {
    onSubmit: PropTypes.func,
};

function CreateForm(props) {
    const schema = yup.object().shape({
        name: yup.string().required('Please enter your name!'),
        maker: yup.string().required('Please enter the maker!'),
        price: yup.number().min(0),
        quantity: yup.number().min(0).integer(),
        category: yup.string().required('Please enter your category!'),
        minQuantity: yup.number().min(0).integer(),
    });

    const form = useForm({
        defaultValues: {
            name: '',
            maker: '',
            description: '',
            price: '',
            quantity: 0,
            category: '',
            minQuantity: 0,
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (Values) => {
        const { onSubmit } = props;
        delete Values.image;
        if (imageAsFile === '') {
            console.error(`not an image, the image file is a ${typeof (imageAsFile)}`)
        }
        const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
        //initiates the firebase side uploading 
        uploadTask.on('state_changed',
            (snapShot) => {
                //takes a snap shot of the process as it is happening
                console.log(snapShot)
            }, (err) => {
                //catches the errors
                console.log(err)
            }, () => {
                // gets the functions from storage refences the image storage in firebase by the children
                // gets the download url then sets the image from firebase as the value for the imgUrl key:
                storage.ref('images').child(imageAsFile.name).getDownloadURL()
                    .then(fireBaseUrl => 
                        fireBaseUrl
                    ).then(
                        (imageUrl) => {
                            if (onSubmit) {
                                onSubmit({ ...Values, imageUrl: imageUrl });
                            }
                            form.reset();
                            setImage('');
                        }
                    )
            })
    }

    const [image, setImage] = useState('');
    const [imageAsFile, setImageAsFile] = useState('');
    const onChangeImg = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(URL.createObjectURL(img));
            setImageAsFile(img);
        }
    }


    const { register } = form;
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
                <img src={image} style={{ width: '180px', height: '100px' }} />
                <br />
                <br />
                <button className="btn btn-primary" type='submit' >
                    <i className="fa fa-edit"></i> Create New Product
                </button>
            </form>
        </div>
    );
}

export default CreateForm;