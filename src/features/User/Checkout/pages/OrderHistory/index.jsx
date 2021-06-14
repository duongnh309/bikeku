import { IconButton, makeStyles, Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Close } from '@material-ui/icons';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import orderApi from '../../../../../api/orderApi';
import Hero from '../../../../../components/headers/Hero';
import RowData from '../../components/RowData';


OrderHistory.propTypes = {

};

function OrderHistory(props) {
    const [orders, setorders] = useState([]);

    const getOrders = async () => {
        const ordersFromApi = await orderApi.getMyOrder(1, 10);
        setorders(ordersFromApi);
    }

    const [open, setOpen] = useState(false);

    const [orderDetails, setOrderDetails] = useState([]);

    const handleClose = () => {
        setOrderDetails([]);
    }

    const handleOpen = (order) => {
        setOrderDetails(order.orderDetails)
    }

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

    const classes = useStyles();

    useEffect(() => {
        getOrders();
    }, [])
    return (
        <div>

            <Hero title={orders.length !== 0 ? 'Histories' : 'You do not have any orders before'} />
            {orders.length !== 0 &&
                <div className="cart-box-main">
                    <div className="container" >
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="table-main table-responsive">
                                    <form>
                                        <table className="table" key={nanoid()}>
                                            <thead>
                                                <tr>
                                                    <th>{'Order Id'}</th>
                                                    <th>{orderDetails.length !== 0 ? 'Product Id' : "Status"}</th>
                                                    <th>{orderDetails.length !== 0 ? 'Quantity' : 'Create Date'}</th>
                                                    {orderDetails.length !== 0 &&<th>Price</th>}
                                                    <th>{orderDetails.length !== 0 ? 'Action':'Details'}</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {orderDetails.length !== 0 ? (orderDetails.map((orderDetail) => (
                                                    <tr key={orderDetail.orderId}>
                                                        <td className="name-pr">
                                                            {orderDetail.orderId}
                                                        </td>
                                                        <td className="name-pr">
                                                            <p>{orderDetail.productId}</p>
                                                        </td>
                                                        {/* <NumberInputFeild /> */}
                                                        <td className="name-pr">
                                                            <p>{orderDetail.quantity}</p>
                                                        </td>
                                                        <td className="name-pr">
                                                            <p>{orderDetail.price}</p>
                                                        </td>
                                                        {orderDetails !== 0 &&
                                                            <td className="name-pr" style={{ border: 'none' }}>
                                                                <p><Button className="btn hvr-hover" onClick={handleClose} style={{ color: 'white' }}> Back</Button></p>
                                                            </td>
                                                        }

                                                    </tr>
                                                ))) : (orders.map((order) => (
                                                    <tr key={order.id}>
                                                        <td className="name-pr">
                                                            {order.id}
                                                        </td>
                                                        <td className="name-pr">
                                                            <p>{order.status}</p>
                                                        </td>
                                                        {/* <NumberInputFeild /> */}
                                                        <td className="name-pr">
                                                            <p>{order.createDate}</p>
                                                        </td>
                                                        <td className="name-pr" style={{ border: 'none' }}>
                                                            <p><Button className="btn hvr-hover" onClick={() => handleOpen(order)} style={{ color: 'white' }}> View</Button></p>
                                                        </td>

                                                    </tr>
                                                )))}
                                            </tbody>
                                        </table>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </div>
    );
}

export default OrderHistory;