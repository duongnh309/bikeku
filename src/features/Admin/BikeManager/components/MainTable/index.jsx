import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';


MainTable.propTypes = {
    bikes: PropTypes.array,
    deleteABike: PropTypes.func,
    updateABike: PropTypes.func,
};

MainTable.defaultProps = {
    bikes: [],
};


function MainTable({ bikes, deleteABike }) {

    const handleDelete = (id) => {
        if (deleteABike) {
            deleteABike(id);
        };
    }

    const form = useForm();
    const { register, handleSubmit } = form;
    const handleSearch = (value) => {
        const searchValue = value.search;
        console.log(searchValue);
    }

    const handleNumberInPage = (e) =>{
        const numberInPages = e.target[e.target.selectedIndex].getAttribute('value');
        console.log(numberInPages);
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
                                        <label>
                                            <select onChange={handleNumberInPage} name="records" aria-controls="dataTables-example" className="form-control input-sm">
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option><option value="100">100</option>
                                            </select>
                                            <span>records per page</span>
                                    </label>
                                    
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <form onSubmit={handleSubmit(handleSearch)}>
                                        <div id="dataTables-example_filter" className="dataTables_filter">
                                        <label>Search:<input type="search" className="form-control input-sm" aria-controls="dataTables-example" {...register('search')} /></label>
                                        </div>
                                    </form>

                                </div>
                            </div>
                            <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>image</th>
                                        <th>name</th>
                                        <th>maker</th>
                                        <th>description</th>
                                        <th>price</th>
                                        <th>Quantity</th>
                                        <th>Category</th>
                                        <th>Delete</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bikes.map((bike) => (
                                        <tr className="gradeU" key={bike.id}>
                                            <td>{bike.id}</td>
                                            <td><img width="50px" height="50px" src={bike.image} className="img-fluid" alt="This a pic" /></td>
                                            <td>{bike.name}</td>
                                            <td>{bike.maker}</td>
                                            <td>{bike.description}</td>
                                            <td>{bike.price}</td>
                                            <td>{bike.quantity}</td>
                                            <td>{bike.category}</td>
                                            <td><button onClick={() => handleDelete(bike.id)} className="btn btn-danger"><i className="fa fa-pencil"></i> Delete</button></td>
                                            <td><a href={`/admin/bikes/update?id=${bike.id}`} className="btn btn-primary"><i className="fa fa-edit "></i> Edit</a>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="dataTables_info" id="dataTables-example_info" role="alert" aria-live="polite" aria-relevant="all">Showing 1 to 10 of 57 entries</div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="dataTables_paginate paging_simple_numbers" id="dataTables-example_paginate">
                                        <ul className="pagination">
                                            <li className="paginate_button previous disabled" aria-controls="dataTables-example" tabIndex="0" id="dataTables-example_previous"><a href="#">Previous</a></li>
                                            <li className="paginate_button active" aria-controls="dataTables-example" tabIndex="0"><a href="#">1</a></li><li className="paginate_button " aria-controls="dataTables-example" tabIndex="0"><a href="#">2</a></li>
                                            <li className="paginate_button " aria-controls="dataTables-example" tabIndex="0"><a href="#">3</a></li>
                                            <li className="paginate_button " aria-controls="dataTables-example" tabIndex="0"><a href="#">4</a></li>
                                            <li className="paginate_button " aria-controls="dataTables-example" tabIndex="0"><a href="#">5</a></li>
                                            <li className="paginate_button " aria-controls="dataTables-example" tabIndex="0"><a href="#">6</a></li>
                                            <li className="paginate_button next" aria-controls="dataTables-example" tabIndex="0" id="dataTables-example_next"><a href="#">Next</a></li>
                                        </ul>
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