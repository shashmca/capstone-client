import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './index.scss';
import { withRouter } from "react-router-dom";
import Api from '../../../Api';
import { updateCart } from '../../../actions/cart';

class CartFooter extends Component {
    constructor(props) {
        super(props);
    }
    calculateCartTotal() {
        let { cart } = this.props;
        let totalAmount = 0;
        for (var i = 0; i < cart.products.length; i++) {
            let productPrice = parseFloat(cart.products[i].productDetails.variants[0].sale_price);
            totalAmount += productPrice;
        }

        return totalAmount;
    }

    createOrder() {
        let { cart, user, actions, history } = this.props;
        let currentDate = new Date().toDateString();
        let cartTotal = this.calculateCartTotal();
        let orderObj = {
            userId: user.id,
            createdAt: currentDate,
            status: 0,
            products: cart.products,
            totalAmount: cartTotal
        }
        Api.createOrder(orderObj)
            .then(response => response.data)
            .then(order => {
                let cartObj = { userId: user.id, products: [] };
                actions.updateCart(cart.id, cartObj);
                history.push('/checkout', { orderData: order });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="cart-footer row">
                <div className="col-9">

                </div>
                <div className="col-1">
                    <span className="cart-total-amnt">Total: &#x20b9;{this.calculateCartTotal()}</span>
                </div>
                <div className="col-2 text-center"><button onClick={(e) => this.createOrder()} className="btn btn-danger">Checkout</button></div>
            </div>
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
    actions: bindActionCreators({ updateCart }, dispatch)
})

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connectToStore(withRouter(CartFooter));

