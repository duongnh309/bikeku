import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useLocation } from 'react-router';

MainMenu.propTypes = {
    
};

function MainMenu(props) {
    const location = useLocation();
    const tab = location.pathname;
    return (
        <nav className="navbar-default navbar-side" role="navigation">
          <div className="sidebar-collapse">
            <ul className="nav" id="main-menu" style={{display:'block'}}>
              <li className="text-center">
                <img src="/assets/img/find_user.png" className="user-image img-responsive" />
              </li>
              <li>
                <a className={classNames({
                  "active-menu":tab.includes('/admin/bikes')
                })} href="/admin/bikes"><i className="fa fa-dashboard fa-3x" /> Bikes</a>
              </li>
              <li>
              <a className={classNames({
                  "active-menu":tab.includes('/admin/accounts')
                })} href="/admin/accounts"><i className="fa fa-dashboard fa-3x" /> Accounts</a>
              </li>

            </ul>
          </div>
        </nav>  
    );
}

export default MainMenu;           