import React from 'react';
import PropTypes from 'prop-types';
import orderApi from '../../../api/orderApi';

OrderHistory.propTypes = {

};

function OrderHistory(props) {
    const response = orderApi.getMyOrder(1, 10).then();
    return (
        <div>

        </div>
    );
}

export default OrderHistory;