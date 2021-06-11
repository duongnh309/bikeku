import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import OrderDetailPage from './pages/OrderDetailPage';
import OrdersPage from './pages/OrdersPage';

OrderManegerFeature.propTypes = {
    
};

function OrderManegerFeature(props) {
    return (
        <div>
            <Switch>
                <Route path="/admin/orderDetail" component={OrderDetailPage} exact></Route>
                <Route path="/admin/orders" component={OrdersPage} exact></Route>
            </Switch>
        </div>
    );
}

export default OrderManegerFeature;