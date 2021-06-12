import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import {queryString} from 'query-string'
import orderApi from '../../../../../api/orderApi';
import OrderDetailTable from '../../components/OrderDetailTable'

OrderDetailPage.propTypes = {
    
};

function OrderDetailPage() {
    
    const location = useLocation();
    const param = queryString.parse(location.search);
    const userid = param.id;
    const [order,setOrder] = useState({});
    useEffect(()=>{
        const getBike = async ()=> {
            setOrder(await orderApi.get(userid))
        };
        getBike();
    },[])
    return (
        <>
            <div id="page-wrapper">
                <div id="page-inner">
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12">
                            {/* Advanced Tables */}

                            <div className="panel panel-default ">
                                <div className="panel-heading">
                                    Order Detail
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <OrderDetailTable order={order}/>
                                    </div>
                                    {/*End Advanced Tables */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderDetailPage;