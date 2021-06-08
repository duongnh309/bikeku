import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Hero from '../../../../../components/headers/Hero';
import CartInPage from '../../components/CartInPage';
import { update } from '../../counterSlice'

ShoppingCart.propTypes = {

};

function ShoppingCart(props) {
  if (JSON.parse(localStorage.getItem('cart')) !== null) {
    var cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
  } else {
    cartFromLocalStorage = [];
  }

  const dispatch = useDispatch();

  const [cart, setCart] = useState(cartFromLocalStorage);

  const changeValueinCart = (id, value) => {

    const index = cart.findIndex((bike) => bike.id === id);
    const newQuantity = Number(value);
    const newBike = { ...cart[index], quantity: newQuantity };
    const tmpCart = [...cart];
    tmpCart[index] = newBike;

    const totalBikes = tmpCart.reduce((total, { quantity }) => total + quantity, 0);
    localStorage.setItem('cart', JSON.stringify(tmpCart));
    setCart(tmpCart)
    dispatch(update(totalBikes));
  }

  const removeFromCart = (id) => {
    const index = cart.findIndex((bike) => bike.id === id);
    const tmpCart = [...cart];

    tmpCart.splice(index, 1);
    const totalBikes = tmpCart.reduce((total, { quantity }) => total + quantity, 0);
    localStorage.setItem('cart', JSON.stringify(tmpCart));
    setCart(tmpCart);
    dispatch(update(totalBikes));
  }


  const totalPrice = cart.reduce((total, { quantity, price }) => total + price * quantity, 0);

  return (
    <>
      <Hero title={cart.length !== 0 ? 'Shopping cart' : 'Your cart is empty'} />
      {cart.length !== 0 &&
        <div className="cart-box-main">
          <div className="container" >
            <CartInPage cart={cart} change={changeValueinCart} remove={removeFromCart} />
            <div className="row my-5 ">
              <div className="col-lg-6 col-sm-6">
                <div className="coupon-box">
                  <div className="input-group input-group-sm">
                    <input className="form-control" placeholder="Enter your coupon code" aria-label="Coupon code" type="text" />
                    <div className="input-group-append">
                      <button className="btn btn-theme" type="button">Apply Coupon</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 col-sm-12" />
              <div className="col-lg-4 col-sm-12">
                <div className="order-box">
                  <h3>Order summary</h3>
                  <div className="d-flex">
                    <h4>Sub Total</h4>
                    <div className="ml-auto font-weight-bold"> $ {totalPrice} </div>
                  </div>
                  <div className="d-flex">
                    <h4>Discount</h4>
                    <div className="ml-auto font-weight-bold"> $ 40 </div>
                  </div>
                  <hr className="my-1" />
                  <div className="d-flex">
                    <h4>Coupon Discount</h4>
                    <div className="ml-auto font-weight-bold"> $ 10 </div>
                  </div>
                  <div className="d-flex">
                    <h4>Tax</h4>
                    <div className="ml-auto font-weight-bold"> $ 2 </div>
                  </div>
                  <div className="d-flex">
                    <h4>Shipping Cost</h4>
                    <div className="ml-auto font-weight-bold"> Free </div>
                  </div>
                  <hr />
                  <div className="d-flex gr-total">
                    <h5>Grand Total</h5>
                    <div className="ml-auto h5"> $ {totalPrice} </div>
                  </div>
                  <hr /> </div>
              </div>
              <div className="col-12 d-flex shopping-box"><a href="/checkout" className="ml-auto btn hvr-hover">Checkout</a> </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default ShoppingCart;