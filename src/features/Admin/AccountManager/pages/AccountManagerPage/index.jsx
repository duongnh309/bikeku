import { nanoid } from 'nanoid';
import React from 'react';
import MainTable from '../../components/MainTable';

AccountManagerPage.propTypes = {
    
};

function AccountManagerPage(props) {
    return (
        <div>
            <MainTable key={nanoid()}/>
        </div>
    );
}

export default AccountManagerPage;