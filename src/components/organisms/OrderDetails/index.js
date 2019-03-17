import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getOrders } from '../../../actions/orders'
import OrderProducts from '../../organisms/OrderProducts';
import './index.scss';

class OrderDetails extends Component {
    componentDidMount() {
        let { actions, user } = this.props;
        let userId = user.id;
        console.log(userId);
        actions.getOrders(user.id);
    }
    renderOrders() {
        let { orders } = this.props;
        return orders.map((val, idx) => {
            return (
                <div className="order-container" key={idx}>
                    <p><span>Order Id: </span><span>{val.id}</span></p>
                    <p><span>Total Amount: </span><span>&#x20b9;{val.totalAmount}</span></p>
                    <hr />
                    <OrderProducts products={val.products} />
                </div>
            )
        })
    }

    render() {
        return (
            <div className="orders">
                {this.renderOrders()}
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    user: state.user,
    orders: state.orders
})
const mapDispatchToProps = dispatch => ({
    // ... normally is an object full of action creators
    actions: bindActionCreators({ getOrders }, dispatch)
})
// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connectToStore(OrderDetails);

