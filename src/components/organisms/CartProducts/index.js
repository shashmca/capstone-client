import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadCart } from '../../../actions/cart'
import CartProduct from '../../molecules/CartProduct';
import './index.scss';

class CartProducts extends Component {
    componentDidMount() {
        let { actions, user } = this.props;
        actions.loadCart(user.carts.id);
    }
    renderCartProducts() {
        let { cart } = this.props;
        // console.log(cart);
        return cart.products.map((val, idx) => {
            return (
                <div key={idx}>
                    <CartProduct product={val} />
                    <hr />
                </div>
            )
        })
    }

    render() {
        return (
            <section className="cart-products">
                {this.renderCartProducts()}
            </section>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    cart: state.cart,
    user: state.user
})
const mapDispatchToProps = dispatch => ({
    // ... normally is an object full of action creators
    actions: bindActionCreators({ loadCart }, dispatch)
})
// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connectToStore(CartProducts);

