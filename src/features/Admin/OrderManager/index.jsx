import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import OrderDetailPage from './pages/OrderDetailPage';
import OrdersPage from './pages/OrdersPage';
import { nanoid } from 'nanoid';

OrderManegerFeature.propTypes = {
    
};

function OrderManegerFeature(props) {
    return (
        <div>
            <Switch>
                <Route path="/admin/orders/detail" component={OrderDetailPage}></Route>
                <Route path="/admin/orders" key={nanoid()}  component={OrdersPage} exact></Route>
            </Switch>
        </div>
    );
}

export default OrderManegerFeature;