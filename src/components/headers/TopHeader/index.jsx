import { AppBar, Box, IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import { Close } from '@material-ui/icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Register from '../../../features/Auth/components/Register';
import Login from '../../../features/Auth/components/Login';




TopHeader.propTypes = {

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

const MODE = {
  LOGIN: 'login',
  LOGOUT: 'logout',
  REGISTER: 'register',
};


function TopHeader(props) {

  if (JSON.parse(localStorage.getItem('user')) !== null) {
    var isLogin = JSON.parse(localStorage.getItem('user'));
  } else {
    isLogin = [];
  }

  const [checkLogin, setCheckLogin] = useState(isLogin);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);

  function refreshPage() {
    window.location.reload(false);
  };


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCloseWhenDone = () => {
    setOpen(false);
    setCheckLogin(JSON.parse(localStorage.getItem('user')));
    //refreshPage();
  };

  const handleClose = () => {
    setOpen(false);
  };
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem('user');
    setCheckLogin([]);
    history.replace("/");
    refreshPage();

  };





  return (
    <div>
      <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
      {/* Bootstrap CSS */}
      <link rel="stylesheet" href="/css/bootstrap.min.css" />
      {/* Site CSS */}
      <link rel="stylesheet" href="/css/style.css" />
      {/* Responsive CSS */}
      <link rel="stylesheet" href="/css/responsive.css" />
      {/* Custom CSS */}
      <link rel="stylesheet" href="/css/custom.css" />

      <link rel="stylesheet" href="/css/pagination.css" />

      <style dangerouslySetInnerHTML={{__html: "\n/* Center the loader */\n#loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  margin: -76px 0 0 -76px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n/* Add animation to \"page content\" */\n.animate-bottom {\n  position: relative;\n  -webkit-animation-name: animatebottom;\n  -webkit-animation-duration: 1s;\n  animation-name: animatebottom;\n  animation-duration: 1s\n}\n\n@-webkit-keyframes animatebottom {\n  from { bottom:-100px; opacity:0 } \n  to { bottom:0px; opacity:1 }\n}\n\n@keyframes animatebottom { \n  from{ bottom:-100px; opacity:0 } \n  to{ bottom:0; opacity:1 }\n}\n\n#myDiv {\n  display: none;\n  text-align: center;\n}\n" }} />



      <div className="main-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="text-slid-box">
                <div id="offer-box" className="carouselTicker">
                  <ul className="offer-box">
                    <li>
                      <i className="fab fa-opencart" /> Off 10%! Shop Now Man
                      </li>
                    <li>
                      <i className="fab fa-opencart" /> 50% - 80% off on Fashion
                      </li>
                    <li>
                      <i className="fab fa-opencart" /> 20% off Entire Purchase Promo code: offT20
                      </li>
                    <li>
                      <i className="fab fa-opencart" /> Off 50%! Shop Now
                      </li>
                    <li>
                      <i className="fab fa-opencart" /> Off 10%! Shop Now Man
                      </li>
                    <li>
                      <i className="fab fa-opencart" /> 50% - 80% off on Fashion
                      </li>
                    <li>
                      <i className="fab fa-opencart" /> 20% off Entire Purchase Promo code: offT20
                      </li>
                    <li>
                      <i className="fab fa-opencart" /> Off 50%! Shop Now
                      </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="custom-select-box">
                <select id="basic" className="selectpicker show-tick form-control" data-placeholder="$ USD">
                  <option>¥ JPY</option>
                  <option>$ USD</option>
                  <option>€ EUR</option>
                </select>
              </div>
              <div className="right-phone-box">
                <p>Call US :- <a href="#"> +11 900 800 100</a></p>
              </div>
              <div className="our-link">
                <ul>
                  <li>
                    <AppBar position="static" style={{ background: '#010101' }}>
                      {checkLogin.length === 0 && (
                        <button onClick={handleClickOpen}>LOGIN</button>
                      )}
                      {checkLogin.length !== 0 && (
                        <button onClick={handleLogout}>LOGOUT</button>
                      )}
                    </AppBar>
                  </li>




                  <Dialog disableBackdropClick
                    disableEscapeKeyDown
                    open={open}
                    onClose={handleClose} aria-labelledby="form-dialog-title">

                    <IconButton className={classes.closeButton} onClick={handleClose}>
                      <Close />
                    </IconButton>

                    <DialogContent>
                      {mode === MODE.REGISTER && (
                        <>
                          <Register closeDialog={handleCloseWhenDone} />

                          <Box textAlign='center'>
                            <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                              Already have an acccout? Login
                            </Button>
                          </Box>
                        </>
                      )}

                      {mode === MODE.LOGIN && (
                        <>
                          <Login closeDialog={handleCloseWhenDone} />

                          <Box textAlign='center'>
                            <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                              Dont have an acccout? Register
                            </Button>
                          </Box>
                        </>
                      )}
                    </DialogContent>
                  </Dialog>


                  <li><button href="#">Our location</button></li>
                  <li><button href="#">Contact Us</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default TopHeader;