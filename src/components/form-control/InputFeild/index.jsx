import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

InputFeild.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};



function InputFeild(props) {
    const {form, name, label, disabled} = props;
    return (
        <Controller
        control={form.control}
        name={name}
        render = {({ field})=> (
                <TextField
                    variant="outlined"
                    margin="normal"
                    {...field}
                    fullWidth
                    label={label}
                    required
                    disabled={disabled}
                />
            )}
        />
    );
}

export default InputFeild;