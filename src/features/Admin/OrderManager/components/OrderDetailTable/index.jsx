import { useSnackbar } from 'notistack';
import React from 'react';
import { useHistory } from 'react-router-dom';
import orderApi from '../../../../../api/orderApi';

OrderDetailTable.propTypes = {

};

function OrderDetailTable({ order }) {
    const history = useHistory();
    const { orderDetails } = order;
    const { enqueueSnackbar } = useSnackbar();
    const handleConfirm = (orderId) => {
        try {
            (orderApi.confirm(orderId))
            .then(enqueueSnackbar('Successfully', { variant: 'success' }))
            .then(history.replace('/admin/orders'));
        } catch (error) {
            console.log('Confirm Failded', error);
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    {/* Advanced Tables */}

                    <div className="panel panel-default ">
                        <div className="panel-heading">
                            Order Details
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                    <thead>
                                        <tr>
                                            <th>Product Id</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Create Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orderDetails.map((orderDetail) => (
                                            <tr className="gradeU" key={orderDetail.productId}>
                                                <td>{orderDetail.productId}</td>
                                                <td>{orderDetail.quantity}</td>
                                                <td>{orderDetail.price}</td>
                                                <td>{orderDetail.createDate}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <button onClick={() => handleConfirm(order.id)} className="btn btn-danger"><i className="fa fa-pencil"></i> Confirm</button>
                            </div>
                        </div>
                    </div>
                    {/*End Advanced Tables */}
                </div>




            </div>
        </div>
    );
}

export default OrderDetailTable;