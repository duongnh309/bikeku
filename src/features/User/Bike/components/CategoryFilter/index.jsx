import React from 'react';
import PropTypes from 'prop-types';

CategoryFilter.propTypes = {
    
};

function CategoryFilter(props) {
    return (
        <div className="filter-sidebar-left">
                  <div className="title-left">
                    <h3>Category</h3>
                  </div>
                  <div className="list-group list-group-collapse list-group-sm list-group-tree" id="list-group-men" data-children=".sub-men">
                    <div className="list-group-collapse sub-men">
                      <a className="list-group-item list-group-item-action" href="#sub-men1" data-toggle="collapse" aria-expanded="true" aria-controls="sub-men1">Clothing <small className="text-muted">(100)</small>
                      </a>
                      <div className="collapse show" id="sub-men1" data-parent="#list-group-men">
                        <div className="list-group">
                          <button href="#" className="list-group-item list-group-item-action active">T-Shirts <small className="text-muted">(50)</small></button>
                          <button href="#" className="list-group-item list-group-item-action">Polo T-Shirts <small className="text-muted">(10)</small></button>
                          <button href="#" className="list-group-item list-group-item-action">Round Neck T-Shirts <small className="text-muted">(10)</small></button>
                          <button href="#" className="list-group-item list-group-item-action">V Neck T-Shirts <small className="text-muted">(10)</small></button>
                          <button href="#" className="list-group-item list-group-item-action">Hooded T-Shirts <small className="text-muted">(20)</small></button>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-collapse sub-men">
                      <a className="list-group-item list-group-item-action" href="#sub-men2" data-toggle="collapse" aria-expanded="false" aria-controls="sub-men2">Footwear
                          <small className="text-muted">(50)</small>
                      </a>
                      <div className="collapse" id="sub-men2" data-parent="#list-group-men">
                        <div className="list-group">
                          <a href="#" className="list-group-item list-group-item-action">Sports Shoes <small className="text-muted">(10)</small></a>
                          <a href="#" className="list-group-item list-group-item-action">Sneakers <small className="text-muted">(20)</small></a>
                          <a href="#" className="list-group-item list-group-item-action">Formal Shoes <small className="text-muted">(20)</small></a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="list-group-item list-group-item-action"> Men  <small className="text-muted">(150) </small></a>
                    <a href="#" className="list-group-item list-group-item-action">Accessories <small className="text-muted">(11)</small></a>
                    <a href="#" className="list-group-item list-group-item-action">Bags <small className="text-muted">(22)</small></a>
                  </div>
                </div>
    );
}

export default CategoryFilter;