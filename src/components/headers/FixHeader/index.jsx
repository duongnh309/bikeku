import classes from 'classnames';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom';
import CartInHeader from '../../../features/User/Checkout/components/CartInHeader';

FixHeader.propTypes = {

};

function FixHeader(props) {
  const match = useRouteMatch();
  const [side, setSide] = useState(false);
  const closeSide = () => {
    setSide(false);
  }
  const openSide = () => {
    setSide(true);
  }

  const location = useLocation();
  const tab = location.pathname;
  console.log(tab);

  const counter = useSelector((state) => state.counter);

  return (

    <div>
      <header className="main-header">
        {/* Start Navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
          <div className="container">
            {/* Start Header Navigation */}
            <div className="navbar-header">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars" />
              </button>
              <a className="navbar-brand" href="/"><img src="/images/logo.png" height={'70px'} alt="" /></a>
            </div>
            {/* End Header Navigation */}
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                <li className={classes({ "nav-item": true, "active": tab === "/home" })}><a className="nav-link" href="/home">Home</a></li>
                <li className={classes({ "nav-item": true, "active": tab === "/about" })}><NavLink className="nav-link" to="/about">About Us</NavLink></li>
                <li className={classes({ "dropdown megamenu-fw": true, "active": tab === "/bikes" })}>
                  <a className="nav-link dropdown-toggle arrow" href="/bikes">Product</a>
                </li>

                <li className={classes({"dropdown": true,"active": tab.includes("/checkout"),"show": tab.includes("/checkout") })}>
                  <button className="nav-link dropdown-toggle arrow" data-toggle="dropdown">Shopping</button>
                  <ul className="dropdown-menu">
                    <li><NavLink to="/checkout/cart">Cart</NavLink></li>
                    <li><NavLink to="/checkout">Checkout</NavLink></li>
                    <li><NavLink to="my-account.html">My Account</NavLink></li>
                  </ul>
                </li>


                <li className="nav-item"><a className="nav-link" href="service.html">Our Service</a></li>
                <li className="nav-item"><a className="nav-link" href="contact-us.html">Contact Us</a></li>
              </ul>
            </div>
            {/* /.navbar-collapse */}
            {/* Start Atribute Navigation */}
            <div className="attr-nav">
              <ul>
                {/* <li className="search"><a href="#"><i className="fa fa-search" /></a></li> */}
                <li className="side-menu" style={{ cursor: 'pointer' }} onClick={side === true ? closeSide : openSide}>
                  <i className="fa fa-shopping-bag" />
                  <span className="badge">{counter}</span>
                </li>
              </ul>
            </div>
            {/* End Atribute Navigation */}
          </div>
          {/* Start Side Menu */}
          <div className={classes({
            'side': true,
            'on': side
          })}>
            <li className="cart-box" style={{ position: 'relative' }}>
              <i className="fas fa-times" style={{ marginLeft: '200px' }} onClick={closeSide}></i>
              <CartInHeader />
            </li>
          </div>
          {/* End Side Menu */}
        </nav>
        {/* End Navigation */}
      </header>
      {/* End Main Top */}
      {/* Start Top Search */}
      <div className="top-search">
        <div className="container">
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-search" /></span>
            <input type="text" className="form-control" placeholder="Search" />
            <span className="input-group-addon close-search"><i className="fa fa-times" /></span>
          </div>
        </div>
      </div>
      {/* End Top Search */}
      {/* Start All Title Box */}

    </div>
  );
}

export default FixHeader;