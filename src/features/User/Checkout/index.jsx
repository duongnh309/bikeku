import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ShoppingCart from './pages/ShoppingCart';

CheckoutFeature.propTypes = {
    
};

function CheckoutFeature(props) {
    const match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path="/checkout/cart" component={ShoppingCart} />
            </Switch>
        </div>
    );
}

export default CheckoutFeature;