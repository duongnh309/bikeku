import { Button, Dialog, DialogContent, DialogContentText } from '@material-ui/core';
import React, { useState } from 'react';
import CreateAccount from '../../pages/CreateAccount';

AccountManager.propTypes = {

};

function AccountManager(props) {
    const initialAccounts = [{
        email: 'vuvietsang10a9@gmail.com',
        fullName: 'Vu Viet Sang',
        password: '123456',
        phoneNum: '0376536924',
        address: '334',
        role: 'admin'

    },
    {
        email: 'nguyenminhhieu@gmail.com',
        fullName: 'Nguyen Minh Hieu',
        password: '123456',
        phoneNum: '0376536924',
        address: '334',
        role: 'admin'

    },
    {
        email: 'nguyenkhanhduy@gmail.com',
        fullName: 'Nguyen Khanh Duy',
        password: '123456',
        phoneNum: '0376536924',
        address: '334',
        role: 'admin'

    }]
    const [accounts, setAccounts] = useState(initialAccounts);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                    <DialogContentText id="alert-dialog-description">
                        <CreateAccount />
                    </DialogContentText>
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
                                                    <th>Full Name</th>
                                                    <th>PhoneNum(s)</th>
                                                    <th>Address </th>
                                                    <th>Role</th>
                                                    <th>Password</th>
                                                    <th>Delete</th>
                                                    <th>Update</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {console.log(accounts)}
                                                {accounts.map(account => (
                                                    <tr className="odd gradeX" key={accounts.email}>
                                                        <td>{account.email}</td>
                                                        <td>{account.fullName}</td>
                                                        <td>{account.phoneNum}</td>
                                                        <td>{account.address}</td>
                                                        <td>{account.role}</td>
                                                        <td>{account.password}</td>

                                                        <td><button onClick={() => handleDeleteClick(account.email)} className="btn btn-danger"><i className="fa fa-pencil"></i> Delete</button></td>
                                                        <td><a href={`/admin/accounts/update?email=${account.email}`} className="btn btn-primary"><i className="fa fa-edit "></i> Edit</a></td>
                                                    </tr>
                                                ))
                                                }
                                            </tbody>
                                        </table>
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

export default AccountManager;
