import React from 'react';
import { useForm } from 'react-hook-form';

CartInPage.propTypes = {

};

function CartInPage({ cart, change, remove }) {
    const { register,getValues } = useForm();
    
    const handle = (id,e) => {
        if(change){
            change(id,e.target.value);
        }
    }

    const removeAnItem = (id) => {
        if(remove){
            remove(id);
        }
    }

    const form = useForm({
        defaultValues:{
        }
    });
    
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="table-main table-responsive">
                <form>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Images</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>


                            {cart.map((bike) => (
                                <tr key={bike.id}>
                                    <td className="thumbnail-img">
                                        <a href="#">
                                            <img className="img-fluid" src={bike.image} alt="" />
                                        </a>
                                    </td>
                                    <td className="name-pr">
                                        <a href="#">
                                            {bike.name}
                                        </a>
                                    </td>
                                    <td className="price-pr">
                                        <p>${bike.price}</p>
                                    </td>
                                    {/* <NumberInputFeild /> */}
                                    <td className="quantity-box"><input type="number" size={4} defaultValue={bike.quantity} min={0} step={1} className="c-input-text qty text" name="quantity"  onChange={handle.bind(this,bike.id)} /></td>
                                    
                                    <td className="total-pr">
                                        <p>${bike.price * bike.quantity}</p>
                                    </td>
                                    <td className="remove-pr">
                                            <i className="fas fa-times" onClick={() => removeAnItem(bike.id)}/>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CartInPage;