import { nanoid } from 'nanoid';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import productApi from '../../../../../api/productApi';
import UpdateForm from '../../components/UpdateForm';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';

UpdateABike.propTypes = {

};

function UpdateABike() {
    const location = useLocation();
    const params = queryString.parse(location.search);
    const bikeId = params.id;
    const [bike,setBike] = useState({});
    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();
    
    useEffect(()=>{
        const getBike = async ()=> {
            setBike(await productApi.get(bikeId))
        };
        getBike();
    },[])


    const handleSubmit = async (values) => {
        console.log('Form submit: ', values);
        try {
           productApi.update(bikeId, values);
            enqueueSnackbar('Update successfully', { variant: 'success' });
            history.replace("/admin/bikes");
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    }


    return (
        <div id="page-wrapper">
            <div id="page-inner">

                {/* /. ROW  */}
                <div className="row">
                    <div className="col-md-12">
                        {/* Advanced Tables */}

                        <div className="panel panel-default ">
                            <div className="panel-heading">
                                Update a bike
                            </div>
                            <div className="panel-body">
                                <div className="table-responsive">
                                        <UpdateForm key={nanoid()} updateBike={bike} onSubmit={handleSubmit} />
                                </div>
                                {/*End Advanced Tables */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default UpdateABike;