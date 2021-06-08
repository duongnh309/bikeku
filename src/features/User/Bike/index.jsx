import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import BikeDetailPage from './pages/BikeDetailPage';
import ProductPage from './pages/ProductPage';

BikesFeature.propTypes = {

};

function BikesFeature(props) {
    const match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path="/bikes/detail" component={BikeDetailPage} exact />
                <Route path={match.path} component={ProductPage} />
            </Switch>

        </div>
    );
}

export default BikesFeature;