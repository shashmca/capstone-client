import React, { Component } from 'react'
import CartProducts from '../../organisms/CartProducts';
import CartFooter from '../../organisms/CartFooter';


const metaData = {
    title: 'Cart',
    link: '/cart'
};

class Cart extends Component {
    render() {
        // console.log("Render cart");
        return (
            <div className="container cart-container">
                <h3 className="cart-heading mb-3">Your Cart</h3>
                <hr />
                <CartProducts />
                <CartFooter />
            </div>
        )
    }
}
export default Cart;
export { metaData };