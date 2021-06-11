import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';

OrderManegerFeature.propTypes = {
    
};

function OrderManegerFeature(props) {
    return (
        <div>
            <Switch>
                {/* <Route path="/admin/setOrder" component={BikeManagerPage} exact></Route>
                <Route path="/admin/cart" component={BikeManagerPage} exact></Route>
                <Route path="/admin/carts" component={BikeManagerPage} exact></Route> */}
                
            </Switch>
        </div>
    );
}

export default OrderManegerFeature;