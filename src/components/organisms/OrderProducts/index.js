import React, { Component } from 'react'
import OrderProduct from '../../molecules/OrderProduct';
import './index.scss';

class OrderProducts extends Component {

    renderOrderProducts() {
        let { products } = this.props;
        return products.map((val, idx) => {
            return (
                <div key={idx} className="order-product">
                    <OrderProduct product={val} />
                    <hr />
                </div>
            )
        });
    }

    render() {
        let { orders } = this.props;
        return (
            <section className="order-products">
                <div className="order-products">
                    {this.renderOrderProducts()}
                </div>
            </section>
        )
    }
}

export default OrderProducts;

