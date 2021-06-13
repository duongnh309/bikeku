import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import orderApi from '../../../../../api/orderApi';
import { useForm } from 'react-hook-form';
import Pagination from '../../../../../components/Pagination'
import { useHistory } from 'react-router-dom';

OrdersTable.propTypes = {

};

function OrdersTable() {


    const [filter, setFilter] = useState({ PageSize: 10, PageNumber: 1 });
    const [pagination, setPagination] = useState({ total: 50, page: 1, PageSize: 10 });

    useEffect(() => {
        fetchDataFormApi();
        // eslint-disable-next-line
    }, [filter]);

    const [orders, setOrders] = useState([]);
    const fetchDataFormApi = async () => {
        const response = await orderApi.getAll(filter);
        const orderFromApi = response.data;
        setOrders(orderFromApi);
        setPagination(response.pagination)
    }//fetch data base on filter

    //Search sp
    const form = useForm();
    const { register, handleSubmit } = form;
    const handleSearch = async (value) => {
        const searchValue = value.search;
        const newOrders = await orderApi.getByEmail(searchValue);
        setOrders(newOrders);
    }

    //Xu ly so sp hien thi tren table
    const handleNumberInPage = (e) => {
        const numberInPages = e.target[e.target.selectedIndex].getAttribute('value');
        setFilter({ ...filter, PageSize: numberInPages });
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    {/* Advanced Tables */}
                    <div className="panel panel-default ">
                        <div className="panel-heading">
                        Orders
                        </div>
                        {!orders?'There no orders for this user':
                            <div className="panel-body">
                            <div className="table-responsive">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="dataTables_length" id="dataTables-example_length">
                                            <label style={{ display: 'flex', alignItems: 'center' }}>
                                                <select onChange={handleNumberInPage} name="records" aria-controls="dataTables-example" className="form-control input-sm">
                                                    <option value="10">10</option>
                                                    <option value="25">25</option>
                                                    <option value="50">50</option>
                                                </select>
                                                <span>records per page</span>
                                            </label>

                                        </div>
                                    </div>
                                    <div className="col-sm-6" >
                                        <form onSubmit={handleSubmit(handleSearch)} style={{ marginLeft: '2em' }}>
                                            <div id="dataTables-example_filter" className="dataTables_filter">
                                                <label style={{ display: 'flex', alignItems: 'center', marginLeft: '2em' }}>Search by Email:<input type="search" className="form-control input-sm" aria-controls="dataTables-example" {...register('search')} /></label>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                                <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>UserId</th>
                                            <th>Status</th>
                                            <th>CreateDate</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order) => (
                                            <tr className="gradeU" key={order.id}>
                                                <td>{order.id}</td>
                                                <td>{order.userId}</td>
                                                <td>{order.status}</td>
                                                <td>{order.createDate}</td>
                                                <td><a href={`/admin/orders/detail?id=${order.id}`} className="btn btn-danger"><i className="fa fa-pencil"></i> View</a></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="dataTables_info" id="dataTables-example_info" role="alert" aria-live="polite" aria-relevant="all"></div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="dataTables_paginate paging_simple_numbers" id="dataTables-example_paginate">
                                            <Pagination filter={filter} pagination={pagination} setFilter={setFilter} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                    {/*End Advanced Tables */}
                </div>




            </div>
        </div>
    );
}

export default OrdersTable;