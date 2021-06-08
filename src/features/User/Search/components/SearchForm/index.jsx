import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputFeild from '../../../../components/form-control/InputFeild';

SearchForm.propTypes = {
    onSubmit: PropTypes.func,
};


function SearchForm(props) {
    const form = useForm({
        defaultValues: {
            searchByName: '',
        }
    })

    const handleSubmit = (values) => {
        const {onSubmit} = props;
        if(onSubmit){
            onSubmit(values)
        }
        
    }
    return (
        <>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputFeild name="searchByName" label="bike's name" form={form} />
        </form>
        </>
    );
}

export default SearchForm;