import React from 'react';
import PropTypes from 'prop-types';

Hero.propTypes = {

};

function Hero({ title }) {
  return (
    <div className="all-title-box">
      <div className="container">
        <div className="row">
          <div class="col-lg-12">
            <h2>{title}</h2>
            <ul class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active">{title}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;