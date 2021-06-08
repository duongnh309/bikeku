import PropTypes from 'prop-types';
import React from 'react';
import CreateFormAccount from '../../components/CreateFormAccount';

CreateAccount.propTypes = {
    onclose: PropTypes.func.isRequired,
};
function CreateAccount() {

    // const { enqueueSnackbar } = useSnackbar()
    // const dispatch = useDispatch();
    // const handleSubmit = async (values) => {
    //     try {
    //         //auto set username = email
    //         values.username = values.email;
    //         // console.log('Form Submit : ', values);
    //         const action = register(values);

    //         const resultAction = await dispatch(action);

    //         const user = unwrapResult(resultAction);


    //         enqueueSnackbar('Register successfully', { variant: 'success' });
    //         close();
    //     } catch (error) {
    //         enqueueSnackbar(error.message, { variant: 'error' });
    //     }
    // }
    const handleSubmit = (values) => {
        console.log(values);
    }
    return (
        <div>
            <CreateFormAccount onSubmit={handleSubmit} />
        </div>
    );
}

export default CreateAccount;