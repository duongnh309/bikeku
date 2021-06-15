import { Button, Dialog, DialogContent } from '@material-ui/core';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import accountApi from '../../../../../api/accountApi';
import CreateAccount from '../../pages/CreateAccount';
import PaginationCompnent from '../Pagination';
MainTable.propTypes = {

};

function MainTable(props) {

    const [accounts, setAccounts] = useState([]);
    const [open, setOpen] = useState(false);

    const [filter, setFilter] = useState({
        pageNum: 1,
        pageSize: 1,
        totalPage: 1,
    })

    useEffect(async () => {
        const response = await accountApi.getAllAccounts(filter.pageNum, filter.pageSize);
        setFilter({ ...filter, totalPage: Math.ceil(response.total / filter.pageSize) });
    }, [])

    const initialAccounts = async () => {
        const response = await accountApi.getAllAccounts(filter.pageNum, filter.pageSize);
        setAccounts(response.data);
    }

    useEffect(() => {
        initialAccounts();
    }, [filter])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUpdated = () => {
        setOpen(false);
        setFilter({
            ...filter, PageNumber: filter, totalPage: filter?filter.totalPage+1 : 3
        })
        
    }


    const handleDeleteClick = (email) => {
        const newAccount = [...accounts];
        const index = accounts.findIndex(account => account.email === email);
        newAccount.splice(index, 1);
        setAccounts(newAccount);
    }
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <CreateAccount handleUpdated={handleUpdated} />
                </DialogContent>
            </Dialog>

            {/* /. NAV SIDE  */}
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Account Manager</h2>
                            <h5>Welcome to account manager page. </h5>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <hr />
                    <div className='register'>


                        <Button variant="outlined" color="primary" onClick={handleClickOpen} className="btn icon-btn btn-success" >  <span className="glyphicon btn-glyphicon glyphicon-plus img-circle text-success " />
                            Create account </Button></div>
                    <div className="row">
                        <div className="col-md-12">

                            {/* Advanced Tables */}
                            <div className="panel panel-default">

                                <div className="panel-heading">
                                    Account Table
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                            <thead>
                                                <tr>
                                                    <th>Email</th>
                                                    <th>UserName</th>
                                                    <th>Full Name</th>
                                                    <th>Role</th>
                                                    <th>Delete</th>
                                                    <th>Update</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {accounts && accounts.map(account => (
                                                    <tr className="odd gradeX" key={account.email}>
                                                        <td>{account.email}</td>
                                                        <td>{account.username}</td>
                                                        <td>{account.name}</td>
                                                        <td>{account.roles[0]}</td>
                                                        <td><button onClick={() => handleDeleteClick(account.email)} className="btn btn-danger"><i className="fa fa-pencil"></i> Delete</button></td>
                                                        <td><a href={`/admin/accounts/update?email=${account.email}`} className="btn btn-primary"><i className="fa fa-edit "></i> Edit</a></td>
                                                    </tr>
                                                ))
                                                }
                                            </tbody>
                                        </table>
                                        <PaginationCompnent filter={filter} setFilter={setFilter} />
                                    </div>
                                </div>
                            </div>
                            {/*End Advanced Tables */}
                        </div>
                    </div>
                </div>
                {/* /. PAGE INNER  */}
            </div>
        </div>
    );
}

export default MainTable;
