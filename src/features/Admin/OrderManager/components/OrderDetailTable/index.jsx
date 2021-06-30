import { useSnackbar } from 'notistack';
import React from 'react';
import { useHistory } from 'react-router-dom';
import orderApi from '../../../../../api/orderApi';

OrderDetailTable.propTypes = {

};
var x = 2;

function OrderDetailTable({ order }) {
    const history = useHistory();
    const { orderDetails } = order;
    const { enqueueSnackbar } = useSnackbar();

    var x = 1;
    const handleConfirm = async (orderId) => {
        try {
            (await orderApi.confirm(orderId))
            history.replace('/admin/orders');
            enqueueSnackbar('Successfully', { variant: 'success' })
            
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    }

    const handleCancel = ()=>{
        history.replace('/admin/orders')
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
                                        {orderDetails?.map((orderDetail) => (
                                            <tr className="gradeU" key={orderDetail.productId}>
                                                <td>{orderDetail.productId}</td>
                                                <td>{orderDetail.quantity}</td>
                                                <td>{orderDetail.price}</td>
                                                <td>{orderDetail.createDate}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {order.status!=='Confirmed'&&<button onClick={() => handleConfirm(order.id)} className="btn btn-glyphicon"><i className="fa fa-pencil"></i> Confirm</button>}
                                <button onClick={handleCancel} style={{float:'right'}} className="btn btn-danger"><i className="fa fa-pencil"></i> Cancel</button>
                            </div>
                        </div>
                    </div>
                    {/*End Advanced Tables */}
                </div>




            </div>
        </div>
    );
}
console.log(x);
export default OrderDetailTable;