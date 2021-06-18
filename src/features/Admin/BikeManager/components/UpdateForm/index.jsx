import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../../components/form-control/InputField';
import { storage } from '../../../../../firebase/firebase';
import { makeStyles } from '@material-ui/core/styles';


UpdateForm.propTypes = {
    onSubmit: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: "#d33b33",
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function UpdateForm({ updateBike, onSubmit }) {
    const classes = useStyles();
    
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

    const handleSubmit = (Values) => {
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

    const [image, setImage] = useState(updateBike.imageUrl);
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
            <div className={classes.paper}> 
                <Avatar>
                    <LockOutlined>
                    </LockOutlined>
                </Avatar>
            
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                 <InputField name='name' label='Name' form={form} />
                 <InputField name='maker' label='Maker' form={form} />
                 <InputField name='description' label='Description' form={form} />
                 <InputField name='price' label='Price' form={form} />
                 <InputField name='quantity' label='Quantity' form={form} />
                 <InputField name='minQuantity' label='MinQuantity' form={form} />
                 <InputField name='category' label='Category' form={form} />
                <Typography>Select Img : </Typography>
                <input  {...register('image')} type="file" id="my-img" name="ImageStyle" onChange={onChangeImg} />
                <img src={image} style={{ width: '180px', height: '100px' }} />
                <br />
                <br />
                <button className="btn btn-primary" type='submit' >
                    <i className="fa fa-edit"></i> Update Product
                </button>
            </form>
            </div>
        </div>
    );
}

export default UpdateForm;