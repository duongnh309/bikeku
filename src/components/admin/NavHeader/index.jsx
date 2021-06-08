import React from 'react';
import PropTypes from 'prop-types';

NavHeader.propTypes = {

};

function NavHeader(props) {
  return (
    <div style={{ background: '#4D4D4D' }}>
      <div>
  {/* BOOTSTRAP STYLES*/}
  <link href="/assets/css/bootstrap.css" rel="stylesheet" />
  {/* FONTAWESOME STYLES*/}
  <link href="/assets/css/font-awesome.css" rel="stylesheet" />
  {/* MORRIS CHART STYLES*/}
  <link href="/assets/js/morris/morris-0.4.3.min.css" rel="stylesheet" />
  {/* CUSTOM STYLES*/}
  <link href="/assets/css/custom.css" rel="stylesheet" />
  {/* GOOGLE FONTS*/}
  <link href="http://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />
  {/* TABLE STYLES*/}
  <link href="/assets/js/dataTables/dataTables.bootstrap.css" rel="stylesheet" />
</div>
      <nav className="navbar navbar-default navbar-cls-top " role="navigation" style={{ marginBottom: 0, display: 'contents' }}>
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="index.html" style={{ margin: '0' }}>Binary admin</a>
        </div>
        <div style={{ color: 'white', padding: '15px 50px 5px 50px', float: 'right', fontSize: '16px' }}> Last access : 30 May 2014 &nbsp; <a href="#" className="btn btn-danger square-btn-adjust">Logout</a> </div>
      </nav>
    </div>
  );
}

export default NavHeader;