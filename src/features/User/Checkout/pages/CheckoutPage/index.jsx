import { Dialog, IconButton, makeStyles } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import { Close } from '@material-ui/icons';
import { default as React, useState } from 'react';
import Hero from '../../../../../components/headers/Hero';
import Login from '../../../../Auth/components/Login';
import Register from '../../../../Auth/components/Register';




CheckoutPage.propTypes = {

};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  },

  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
  },

}));



function CheckoutPage(props) {

  if (JSON.parse(localStorage.getItem('user')) !== null) {
    var isLogin = JSON.parse(localStorage.getItem('user'));
  } else {
    isLogin = [];
  }

  const [checkLogin, setCheckLogin] = useState(isLogin);

  const classes = useStyles();
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);


  const handleClickOpenLogin = () => {
    setOpenLogin(true);
  };
  const handleClickOpenRegister = () => {
    setOpenRegister(true);
  };

  const handleClose = () => {
    setOpenLogin(false);
    setOpenRegister(false);
    refreshPage();
  };
  function refreshPage() {
    window.location.reload(false);
  };


  return (
    <>
      <Hero title="Check out" />
      <div className="cart-box-main">
        <div className="container">

          {checkLogin.length === 0 &&
            <div className="row new-account-login">
              <div className="col-sm-6 col-lg-6 mb-3">
                <div className="title-left">
                  <h3>Account Login</h3>
                </div>
                <button type="submit" className="btn hvr-hover" style={{ border: 'none' }} onClick={handleClickOpenLogin}>Click here to Login</button>
                <Dialog disableBackdropClick
                  disableEscapeKeyDown
                  open={openLogin}
                  onClose={handleClose} aria-labelledby="form-dialog-title">

                  <IconButton className={classes.closeButton} onClick={handleClose}>
                    <Close />
                  </IconButton>

                  <DialogContent>

                    <Login closeDialog={handleClose} />
                  </DialogContent>
                </Dialog>

              </div>
              <div className="col-sm-6 col-lg-6 mb-3">
                <div className="title-left">
                  <h3>Create New Account</h3>
                </div>

                <button type="submit" className="btn hvr-hover" style={{ border: 'none' }} onClick={handleClickOpenRegister}>Click here to Register</button>
                <Dialog disableBackdropClick
                  disableEscapeKeyDown
                  open={openRegister}
                  onClose={handleClose} aria-labelledby="form-dialog-title">

                  <IconButton className={classes.closeButton} onClick={handleClose}>
                    <Close />
                  </IconButton>

                  <DialogContent>

                    <Register closeDialog={handleClose} />
                  </DialogContent>
                </Dialog>


              </div>
            </div>
          }
          
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;