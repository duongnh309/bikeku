import React, { useEffect, useState } from 'react';



HomePage.propTypes = {
    
};

function HomePage(props) {
  
    return (
        <div>
            <div>
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
        {/* Start Slider */}
        <div id="slides-shop" className="cover-slides">
          <ul className="slides-container">
            <li className="text-left">
              <img src="/images/demobanner01.jpg" alt="" height='100px'/>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="m-b-20"><strong>Welcome To <br /> Thewayshop</strong></h1>
                    <p className="m-b-40">See how your users experience your website in realtime or view <br /> trends to see any changes in performance over time.</p>
                    <p><a className="btn hvr-hover" href="#">Shop New</a></p>
                  </div>
                </div>
              </div>
            </li>
            <li className="text-center">
              <img src="/images/demobanner02.jpg" alt="" height='100px'/>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="m-b-20"><strong>Welcome To <br /> Thewayshop</strong></h1>
                    <p className="m-b-40">See how your users experience your website in realtime or view <br /> trends to see any changes in performance over time.</p>
                    <p><a className="btn hvr-hover" href="#">Shop New</a></p>
                  </div>
                </div>
              </div>
            </li>
            <li className="text-right">
              <img src="/images/demobanner03.jpg" alt="" height='100px'/>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="m-b-20"><strong>Welcome To <br /> Thewayshop</strong></h1>
                    <p className="m-b-40">See how your users experience your website in realtime or view <br /> trends to see any changes in performance over time.</p>
                    <p><a className="btn hvr-hover" href="#">Shop New</a></p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="slides-navigation">
            <a href="#" className="next"><i className="fa fa-angle-right" aria-hidden="true" /></a>
            <a href="#" className="prev"><i className="fa fa-angle-left" aria-hidden="true" /></a>
          </div>
        </div>
        {/* End Slider */}
        {/* Start Categories  */}
        <div className="categories-shop">
          <div className="container">
            <div className="row">
              
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="shop-cat-box">
                  <img className="img-fluid" src="/images/touring.jpg" alt="" />
                  <a className="btn hvr-hover" href="#">Touring Bike</a>
                </div>
                <div className="shop-cat-box">
                  <img className="img-fluid" src="/images/Hybird.jpg" alt="" />
                  <a className="btn hvr-hover" href="#">Hybird Bike</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="shop-cat-box">
                  <img className="img-fluid" src="images/Road.jpg" alt="" />
                  <a className="btn hvr-hover" href="#">Road Bike</a>
                </div>
                <div className="shop-cat-box">
                  <img className="img-fluid" src="images/Fixed Gear Bike.jpg" alt="" />
                  <a className="btn hvr-hover" href="#">Fixed Gear Bike</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="shop-cat-box">
                  <img className="img-fluid" src="images/electrical.jpg" alt="" />
                  <a className="btn hvr-hover" href="#">Electrical Bike</a>
                </div>
                <div className="shop-cat-box">
                  <img className="img-fluid" src="images/mountain.jpg" alt="" />
                  <a className="btn hvr-hover" href="#">Mountain Bike</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Categories */}
        {/* Start Products  */}
        <div className="products-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title-all text-center">
                  <h1>Featured Products</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="special-menu text-center">
                  <div className="button-group filter-button-group">
                    <button className="active" data-filter="*">All</button>
                    <button data-filter=".top-featured">Top featured</button>
                    <button data-filter=".best-seller">Best seller</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row special-list">
              <div className="col-lg-3 col-md-6 special-grid best-seller">
                <div className="products-single fix">
                  <div className="box-img-hover">
                    <div className="type-lb">
                      <p className="sale">Sale</p>
                    </div>
                    <img src="images/img-pro-01.jpg" className="img-fluid" alt="Image" />
                    <div className="mask-icon">
                      <ul>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                      </ul>
                      <a className="cart" href="#">Add to Cart</a>
                    </div>
                  </div>
                  <div className="why-text">
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <h5> $7.79</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 special-grid top-featured">
                <div className="products-single fix">
                  <div className="box-img-hover">
                    <div className="type-lb">
                      <p className="new">New</p>
                    </div>
                    <img src="images/img-pro-02.jpg" className="img-fluid" alt="Image" />
                    <div className="mask-icon">
                      <ul>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                      </ul>
                      <a className="cart" href="#">Add to Cart</a>
                    </div>
                  </div>
                  <div className="why-text">
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <h5> $9.79</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 special-grid top-featured">
                <div className="products-single fix">
                  <div className="box-img-hover">
                    <div className="type-lb">
                      <p className="sale">Sale</p>
                    </div>
                    <img src="images/img-pro-03.jpg" className="img-fluid" alt="Image" />
                    <div className="mask-icon">
                      <ul>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                      </ul>
                      <a className="cart" href="#">Add to Cart</a>
                    </div>
                  </div>
                  <div className="why-text">
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <h5> $10.79</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 special-grid best-seller">
                <div className="products-single fix">
                  <div className="box-img-hover">
                    <div className="type-lb">
                      <p className="sale">Sale</p>
                    </div>
                    <img src="images/img-pro-04.jpg" className="img-fluid" alt="Image" />
                    <div className="mask-icon">
                      <ul>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                      </ul>
                      <a className="cart" href="#">Add to Cart</a>
                    </div>
                  </div>
                  <div className="why-text">
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <h5> $15.79</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Products  */}
        {/* Start Blog  */}
        <div className="latest-blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title-all text-center">
                  <h1>latest blog</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 col-xl-4">
                <div className="blog-box">
                  <div className="blog-img">
                    <img className="img-fluid" src="images/blog-img.jpg" alt="" />
                  </div>
                  <div className="blog-content">
                    <div className="title-blog">
                      <h3>Fusce in augue non nisi fringilla</h3>
                      <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                    </div>
                    <ul className="option-blog">
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Likes"><i className="far fa-heart" /></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Views"><i className="fas fa-eye" /></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Comments"><i className="far fa-comments" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-4">
                <div className="blog-box">
                  <div className="blog-img">
                    <img className="img-fluid" src="images/blog-img-01.jpg" alt="" />
                  </div>
                  <div className="blog-content">
                    <div className="title-blog">
                      <h3>Fusce in augue non nisi fringilla</h3>
                      <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                    </div>
                    <ul className="option-blog">
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Likes"><i className="far fa-heart" /></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Views"><i className="fas fa-eye" /></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Comments"><i className="far fa-comments" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-4">
                <div className="blog-box">
                  <div className="blog-img">
                    <img className="img-fluid" src="images/blog-img-02.jpg" alt="" />
                  </div>
                  <div className="blog-content">
                    <div className="title-blog">
                      <h3>Fusce in augue non nisi fringilla</h3>
                      <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                    </div>
                    <ul className="option-blog">
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Likes"><i className="far fa-heart" /></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Views"><i className="fas fa-eye" /></a></li>
                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Comments"><i className="far fa-comments" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog  */}
        {/* Start Instagram Feed  */}
        
        {/* End copyright  */}
        <a href="#" id="back-to-top" title="Back to top" style={{display: 'none'}}>↑</a>
      </div>
        </div>
    );
}

export default HomePage;