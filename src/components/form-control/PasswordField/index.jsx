import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PasswordField(props) {
    const { form, name, label, disabled } = props;
    const { formState } = form;
    const hasError = formState.errors[name] ;   

    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field }) => <TextField
                {...field}

                variant="outlined"
                margin="normal"
                required
                type="password"
                fullWidth
                label={label}
                disabled={disabled}

                error={!!hasError}
                helperText={formState.errors[name]?.message}
            />}


        />
    );
}

export default PasswordField;