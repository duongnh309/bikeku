import React from 'react';
import PropTypes from 'prop-types';
import OrdersTable from '../../components/OrdersTable';
import { nanoid } from 'nanoid';

OrdersPage.propTypes = {
    
};

function OrdersPage(props) {
    return (
        <div>
            <>
            <div id="page-wrapper">
                <div id="page-inner">
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12">
                            {/* Advanced Tables */}

                            <div className="panel panel-default ">
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <OrdersTable key={nanoid()}/>
                                    </div>
                                    {/*End Advanced Tables */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        </div>
    );
}

export default OrdersPage;