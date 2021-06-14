import { nanoid } from 'nanoid';
import React from 'react';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router';
import CheckoutPage from './pages/CheckoutPage';
import OrderHistory from './pages/OrderHistory';
import ShoppingCart from './pages/ShoppingCart';

CheckoutFeature.propTypes = {

};

function CheckoutFeature(props) {
    const match = useRouteMatch();
     
    return (
        <div>
            <Switch>
                
                <Route path="/checkout/cart" component={ShoppingCart} />
                <Route path="/checkout/history" key={nanoid()} component={OrderHistory} />
                <Route path="/checkout/history/detail" key={nanoid()} component={OrderHistory} />

                <Route path="/checkout" exact render={() => {
                    return localStorage.getItem('user') ? <Redirect to="/bikes" /> : <CheckoutPage />
                }} />

            </Switch>
        </div>
    );
}

export default CheckoutFeature;