import React, { useState } from 'react';
import PropTypes from 'prop-types';

DefaultBikes.propTypes = {
  defaultBikes: PropTypes.array,
  addToCart: PropTypes.func.isRequired,
};

DefaultBikes.defaultProps = {
  defaultBikes: [],
  addToCart: null,
}

function DefaultBikes({ defaultBikes,addToCart,viewDetail}) {
  const HandleAddToCart = (bike) => {
    if(addToCart){
      addToCart(bike);
    }
  }


  
  return (
    <div className="row product-categorie-box">
      <div className="tab-content">
        <div role="tabpanel" className="tab-pane fade show active" id="grid-view">
          <ul className="row">
            {defaultBikes.map((bike) => (
              <li className="col-sm-6 col-md-6 col-lg-4 col-xl-4" key={bike.id}>
                <div className="products-single fix">
                  <div className="box-img-hover">
                    <div className="type-lb">
                      <p className="sale">Sale</p>
                    </div>
                    <img src={bike.image} className="img-fluid" alt="This a pic" />
                    <div className="mask-icon">
                      <ul>
                        <li><a href={`/bikes/detail?id=${bike.id}`} data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                      </ul>
                      <button className="cart" onClick={() => {HandleAddToCart(bike)}}>Add to Cart</button>
                    </div>
                  </div>
                  <div className="why-text">
                    <h4>{bike.name}</h4>
                    <h5> ${bike.price}</h5>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    </div>


  );
}

export default DefaultBikes;