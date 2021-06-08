import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

NumberInputFeild.propTypes = {
    
};

function NumberInputFeild(props) {
    const { form, name, label, disabled, placeholder } = props;
    const { formState } = form;
    const hasError = formState.errors[name] && formState.touchedFields[name];
    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field }) =>
                <TextField
                    
                    {...field}
                    type='number'
                    placeholder={placeholder}
                    label={label}
                    fullWidth
                    disabled={disabled}
                    error={hasError}
                    variant="outlined"
                    margin='normal'
                    helperText={formState.errors[name]?.message}
                />}
        />
    );
}

export default NumberInputFeild;