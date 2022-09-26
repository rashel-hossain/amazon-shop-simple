import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // tota price add OMG very easy wayyyyy
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    // json.data file tax na thakay amra taxt adde kore dilm
    const tax = parseFloat((total * 0.1).toFixed(2));

    // grand total
    const grandTotal = (total + shipping + tax).toFixed(2);


    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected items: {props.cart.length}</p>
            <p>Total price:  ${total}</p>
            <p>Total Shipping:  ${shipping}</p>
            <p>Tax/VAT: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;

//    // tota price add OMG very easy wayyyyy
//    const { cart } = props;
//    let total = 0;
//    let shipping = 0;
//    for (const product of cart) {
//        total = total + product.price;
//        shipping = shipping + product.shipping;
//    }
//    // json.data file tax na thakay amra taxt adde kore dilm
//    const tax = parseFloat((total * 0.1).toFixed(2));

//    // grand total
//    const grandTotal = (total + shipping + tax).toFixed(2);
