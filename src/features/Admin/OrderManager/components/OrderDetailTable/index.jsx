import React from 'react';
import PropTypes from 'prop-types';
import orderApi from '../../../../../api/orderApi';

OrderDetailTable.propTypes = {
    
};

function OrderDetailTable({order}) {
    const {orderDetails} = order;
    const handleConfirm = (orderId) => {
        orderApi.confirm(orderId);
        //xu ly sau
    }
    return (
        <div>
            <div className="row">
            <div className="col-md-12">
                {/* Advanced Tables */}
                
                <div className="panel panel-default ">
                    <div className="panel-heading">
                        Bikes Managers Tables
                    </div>
                    <div className="panel-body">
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Maker</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Category</th>
                                        <th>CreateDay</th>
                                        <th>Delete</th>
                                        <th>Update</th>
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