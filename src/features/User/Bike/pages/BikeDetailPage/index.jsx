import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Hero from '../../../../../components/headers/Hero';
import queryString, { stringify } from 'query-string';
import { useLocation } from 'react-router';
import productApi from '../../../../../api/productApi';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { increaseMany } from '../../../../User/Checkout/counterSlice';

BikeDetailPage.propTypes = {

};

function BikeDetailPage(props) {
  var cart = [];
  if (JSON.parse(localStorage.getItem('cart')) !== null) {
    cart = JSON.parse(localStorage.getItem('cart'));
  }

  const hookForm = useForm({
    defaultValues: {
      quantity: 0,
    }
  })
  const { register } = hookForm;
  const dispatch = useDispatch();
  const [bike, setBike] = useState({});

  const handleFormSubmit = (value) => {
    const quantity = Number(value.quantity);

    const index = cart.findIndex(b => b.id == bike.id)
    const newCart = [...cart];
    if (newCart.length === 0) newCart.push({ ...bike, quantity: 1 });
    else {
      const newQuantity = newCart[index].quantity + quantity;
      newCart[index] = { ...bike, quantity: newQuantity }
    }

    localStorage.setItem('cart', JSON.stringify(newCart));
    dispatch(increaseMany(quantity));

  }
  const location = useLocation();
  const param = queryString.parse(location.search);



  useEffect(() => {
    fetchDataFormApi().then((bikes) => {
      bikes.forEach(bike => {
        if ((bike.id) == param.id) {
          setBike(bike)
        }
      });
    });
  }, []);

  const fetchDataFormApi = async () => {
    const response = await productApi.getAll({ _start: 0 });
    const data = await response.data;
    return data;
  }


  return (
    <div>
      <Hero title='Details' />
      <div className="shop-detail-box-main">
        <div className="container" style={{ display: 'flex 1 1' }}>
          <div className="row" >
            <div className="col-xl-5 col-lg-5 col-md-6"  >
              <div style={{ margin: '30px' }} id="carousel-example-1" className="single-product-slider carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active"> <img className="d-block w-100" src={bike.image} alt="First slide" /> </div>
                  <div className="carousel-item"> <img className="d-block w-100" src={bike.image} alt="Second slide" /> </div>
                  <div className="carousel-item"> <img className="d-block w-100" src={bike.image} alt="Third slide" /> </div>
                </div>
                <a className="carousel-control-prev" href="#carousel-example-1" role="button" data-slide="prev">
                  <i className="fa fa-angle-left" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel-example-1" role="button" data-slide="next">
                  <i className="fa fa-angle-right" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-6">
              <div className="single-product-details">
                <h2>{bike.name}</h2>
                <h5> <del>$ 60.00</del> {bike.price}</h5>
                <p className="available-stock"><span> More than 20 available / <a href="#">8 sold </a></span>
                </p><p>
                </p><h4>Short Description:</h4>
                <p>{bike.description}</p>
                <form onSubmit={hookForm.handleSubmit(handleFormSubmit)}  >
                  <ul>
                    <li>
                      <div class="form-group size-st">
                        <label class="size-label">Color</label>
                        <select id="basic" class="selectpicker show-tick form-control">
                          <option value="0">Default</option>
                          <option value="0">Green</option>
                          <option value="1">Red</option>
                          <option value="1">BlueSky</option>
                          <option value="1">Green</option>
                          <option value="1">Yellow</option>
                          <option value="1">Dark</option>
                          <option value="1">Light</option>
                        </select>
                      </div>
                    </li>

                    <li>
                      <div className="form-group quantity-box">
                        <label className="control-label">Quantity</label>

                        <input name='quantity' {...register('quantity')} className="form-control" defaultValue={0} min={0} max={20} type="number" />
                      </div>
                    </li>
                  </ul>
                  <div className="price-box-bar">
                    <div className="cart-and-bay-btn">
                      <a className="btn hvr-hover" data-fancybox-close href="/bikes">Back to Home Page</a>
                      <button className="btn hvr-hover" data-fancybox-close href="#">Add to cart</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-12">
              <div className="title-all text-center">
                <h1>Featured Products</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
              </div>
              <div className="featured-products-box owl-carousel owl-theme">
                <div className="item">
                  <div className="products-single fix">
                    <div className="box-img-hover">
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
                      <h5> $9.79</h5>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="products-single fix">
                    <div className="box-img-hover">
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
                <div className="item">
                  <div className="products-single fix">
                    <div className="box-img-hover">
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
                      <h5> $9.79</h5>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="products-single fix">
                    <div className="box-img-hover">
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
                      <h5> $9.79</h5>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="products-single fix">
                    <div className="box-img-hover">
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
                      <h5> $9.79</h5>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="products-single fix">
                    <div className="box-img-hover">
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
                <div className="item">
                  <div className="products-single fix">
                    <div className="box-img-hover">
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
                      <h5> $9.79</h5>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="products-single fix">
                    <div className="box-img-hover">
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
                      <h5> $9.79</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BikeDetailPage;