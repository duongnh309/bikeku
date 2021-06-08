import React from 'react';
import { Route, Switch } from 'react-router';
import UpdateABike from './pages/UpdateABike';
import CreateABike from './pages/CreateABike';
import BikeManagerPage from './pages/BikeManagerPage';

BikeManagerFeature.propTypes = {

};

function BikeManagerFeature(props) {
    return (
        <div>
            <Switch>
                <Route path="/admin/bikes/create" component={CreateABike}></Route>
                <Route path="/admin/bikes" component={BikeManagerPage} exact></Route>
                <Route path="/admin/bikes/update" component={UpdateABike}></Route>
            </Switch>
        </div>
    );
}

export default BikeManagerFeature;