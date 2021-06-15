import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import productApi from '../../../../../api/productApi';
import Pagination from '../../../../../components/Pagination'


MainTable.propTypes = {
};

MainTable.defaultProps = {
    bikes: [],
};


function MainTable() {

    const [filter, setFilter] = useState({ PageSize: 10, PageNumber: 1 });
    const [pagination, setPagination] = useState({ total: 50, page: 1, PageSize: 10 });

    useEffect(() => {
        fetchDataFormApi();
        // eslint-disable-next-line
    }, [filter]);

    const [bikes, setBikes] = useState([]);
    const fetchDataFormApi = async () => {
        const response = await productApi.getAll(filter);
        const bikeFromApi = response.data;
        setBikes(bikeFromApi);
        setPagination(response.pagination)
    }//fetch data base on filter

    //mac dinh la pagesize 

    const handleDelete = async (id) => {

        await productApi.delete(id);
        setFilter({ ...filter, PageNumber: 1 })
    }

    //Search sp
    const form = useForm();
    const { register, handleSubmit } = form;
    const handleSearch = (value) => {
        const searchValue = value.search;
        const searchBy = value.searchBy;
        const newFilter = { ...filter, value: searchValue, searchBy };
        delete newFilter.priceRange;
        delete newFilter.change;
        setFilter(newFilter);
    }


    //Xu ly so sp hien thi tren table
    const handleNumberInPage = (e) => {
        const numberInPages = e.target[e.target.selectedIndex].getAttribute('value');
        setFilter({ ...filter, PageSize: numberInPages });
    }

    //Xu ly search theo price
    const handlePirce = (e) => {
        const priceRange = e.target[e.target.selectedIndex].getAttribute('value');
        const newFilter = { ...filter, priceRange };
        delete newFilter.searchBy;
        delete newFilter.value;
        setFilter(newFilter);
    }


    return (
        <div className="row">
            <div className="col-md-12">
                {/* Advanced Tables */}
                <a href="/admin/bikes/create" className="btn icon-btn btn-success" >
                    <span className="glyphicon btn-glyphicon glyphicon-plus img-circle text-success " />
                    Create A New Bike
                </a>
                <div className="panel panel-default ">
                    <div className="panel-heading">
                        Bikes Managers Tables
                    </div>
                    <div className="panel-body">
                        <div className="table-responsive">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="dataTables_length" id="dataTables-example_length">
                                        <label style={{ display: 'flex', alignItems: 'center' }}>
                                            <select onChange={handleNumberInPage} name="records" aria-controls="dataTables-example" className="form-control input-sm">
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option><option value="100">100</option>
                                            </select>
                                            <span>records per page</span>
                                        </label>

                                    </div>
                                </div>
                                <div className="col-sm-6" >
                                    <form onSubmit={handleSubmit(handleSearch)} style={{ marginLeft: '2em' }}>

                                        <div id="dataTables-example_filter" className="dataTables_filter">
                                            <label style={{ marginLeft: '2em' }}>
                                                <select name="records" aria-controls="dataTables-example" className="form-control input-sm col-sm-4" {...register('searchBy')}>
                                                    <option value="Maker">Maker</option>
                                                    <option value="Name">Name</option>
                                                </select>

                                            </label>
                                            <label style={{ display: 'flex', alignItems: 'center', marginLeft: '2em' }}>Search:<input type="search" className="form-control input-sm" aria-controls="dataTables-example" {...register('search')} /></label>

                                        </div>
                                    </form>

                                    <div id="dataTables-example_filter" onChange={handlePirce} className="dataTables_filter">
                                        <label>
                                            <span style={{ margin: 'auto 0' }}>Price</span>
                                            <select name="records" aria-controls="dataTables-example" className="form-control input-sm col-sm-4">
                                                <option value="100000">Greater than 8000</option>
                                                <option value="5000-8000">from 5000 to 8000</option>
                                                <option value="1000-5000">from 1000 to 5000</option>
                                                <option value="500-1000">from 500 to 1000</option>
                                                <option value="100-500">from 100 to 500</option>
                                                <option value="1-100">from 1 to 100</option>
                                                <option value='default' selected></option>
                                            </select>
                                        </label>
                                    </div>


                                </div>
                            </div>
                            <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Maker</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Category</th>
                                        <th>CreateDay</th>
                                        <th>Delete</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bikes.map((bike) => (
                                        <tr className="gradeU" key={bike.id}>
                                            <td>{bike.id}</td>
                                            <td><img width="50px" height="50px" src={bike.imageUrl} className="img-fluid" alt="This a pic" /></td>
                                            <td>{bike.name}</td>
                                            <td>{bike.maker}</td>
                                            <td>{bike.description}</td>
                                            <td>{bike.price}</td>
                                            <td>{bike.quantity}</td>
                                            <td>{bike.category}</td>
                                            <td>{bike.createDate}</td>
                                            <td><button onClick={() => handleDelete(bike.id)} className="btn btn-danger"><i className="fa fa-pencil"></i> Delete</button></td>
                                            <td><a href={`/admin/bikes/update?id=${bike.id}`} className="btn btn-primary"><i className="fa fa-edit "></i> Update</a>

                                            </td>
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
                </div>
                {/*End Advanced Tables */}
            </div>




        </div>
    );
}

export default MainTable;