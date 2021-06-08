import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import CreateAccount from './pages/CreateAccount';
import UpdateAccount from './pages/UpdateAccount';
import AccountManagerPage from './pages/AccountManagerPage'

AccountManagerFeature.propTypes = {
    
};

function AccountManagerFeature(props) {
    return (
        <div>
            <Switch>
                <Route path="/admin/accounts/create" component={CreateAccount} />
                <Route path="/admin/accounts/update" component={UpdateAccount} />
                <Route path="/admin/accounts" exact component={AccountManagerPage} />
            </Switch>
        </div>
    );
}

export default AccountManagerFeature;