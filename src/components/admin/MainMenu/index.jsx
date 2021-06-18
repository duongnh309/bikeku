import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import {NavLink} from 'react-router-dom'

MainMenu.propTypes = {

};

function MainMenu(props) {
  
  const location = useLocation();
  const tab = location.pathname;
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <nav className="navbar-default navbar-side" role="navigation">
      <div className="sidebar-collapse">
        <ul className="nav" id="main-menu" style={{ display: 'block' }}>
          <li className="text-center">
            <img src="/assets/img/find_user.png" className="user-image img-responsive" />

            <h2 style={{ color: 'white' }}>{user && user.name}</h2>
          </li>
          {user.role[0] === 'Modifier' &&
            <li>
              <NavLink className={classNames({
                "active-menu": tab.includes('/admin/bikes')
              })} to="/admin/bikes"><i className="fa fa-dashboard fa-3x" /> Bikes</NavLink>
            </li>
          }
          {user.role[0] === 'Admin' &&
            <li>
              <NavLink className={classNames({
                "active-menu": tab.includes('/admin/bikes')
              })} to="/admin/bikes"><i className="fa fa-dashboard fa-3x" /> Bikes</NavLink>
            </li>
          }
          {user.role[0] === 'Admin' &&
            <li>
              <NavLink className={classNames({
                "active-menu": tab.includes('/admin/accounts')
              })} to="/admin/accounts"><i className="fa fa-dashboard fa-3x" /> Accounts</NavLink>
            </li>
          }
          {user.role[0] === 'Saler' &&
            <li>
              <NavLink className={classNames({
                "active-menu": tab.includes('/admin/orders')
              })} to="/admin/orders"><i className="fa fa-dashboard fa-3x" /> Orders</NavLink>
            </li>
          }
          {user.role[0] === 'Admin' &&
            <li>
              <NavLink className={classNames({
                "active-menu": tab.includes('/admin/orders')
              })} to="/admin/orders"><i className="fa fa-dashboard fa-3x" /> Orders</NavLink>
            </li>
          }
        </ul>
      </div>
    </nav>
  );
}

export default MainMenu;