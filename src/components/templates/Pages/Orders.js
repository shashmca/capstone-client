import React, { Component } from 'react'
import OrderDetails from '../../organisms/OrderDetails';

const metaData = {
    title: 'Orders',
    link: '/orders'
};

class Orders extends Component {

    render() {
        return (
            <div >
                <h5>My Orders</h5>
                <hr />
                <OrderDetails />
            </div>
        )
    }
}

export default Orders;
export { metaData };