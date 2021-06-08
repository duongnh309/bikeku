import React from 'react';

CartInHeader.propTypes = {
    
};

function CartInHeader(props) {
    if (JSON.parse(localStorage.getItem('cart')) !== null) {
        var cart = JSON.parse(localStorage.getItem('cart'));
    } else {
        cart = [];
    }
    const totalPrice = cart.reduce((total,{quantity,price})=> total + price * quantity,0);
    return (
        <div>
            <ul className="cart-list">
            {cart.map((bike)=>(
                <li key={bike.id}>
                <a href={`/bikes/detail?id=${bike.id}`} className="photo"><img src={bike.image} className="cart-thumb" alt="" /></a>
                <h6><a href={`/bikes/detail?id=${bike.id}`} >{bike.name}  </a></h6>
                <p>{bike.quantity} - <span className="price">${bike.price}</span></p>
              </li>
            ))}
            <li className="total">
                <a href="/checkout/cart" className="btn btn-default hvr-hover btn-cart">VIEW CART</a>
                <span className="float-right"><strong>Total</strong>: ${totalPrice}</span>
              </li>
            </ul>
        </div>
    );
}

export default CartInHeader;