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
                <Route path="/checkout" exact render={() => {
                    return localStorage.getItem('user') ? <Redirect to="/bikes" /> : <CheckoutPage />
                }} />
                <Route path="/checkout/cart" exact render={() => {
                    return localStorage.getItem('user') ? <ShoppingCart /> : <CheckoutPage />
                }} />
                <Route path="/checkout/history" exact render={() => {
                    return localStorage.getItem('user') ? <OrderHistory /> : <CheckoutPage />
                }} />
                <Route path="/checkout/history/detail" exact render={() => {
                    return localStorage.getItem('user') ? <OrderHistory /> : <CheckoutPage />
                }} />

                 {/* <Route path="/checkout/cart" component={ShoppingCart} />
                <Route path="/checkout/history" key={nanoid()} component={OrderHistory} />
                <Route path="/checkout/history/detail" key={nanoid()} component={OrderHistory} /> */}

            </Switch>
        </div>
    );
}

export default CheckoutFeature;