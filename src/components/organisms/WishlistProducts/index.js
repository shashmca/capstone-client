import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getWishlist } from '../../../actions/wishlist'
import WishlistProduct from '../../molecules/WishlistProduct';
import './index.scss';

class WishlistProducts extends Component {
    componentDidMount() {
        let { actions, user } = this.props;
        actions.getWishlist(user.wishlists.id);
    }
    renderWishlistProducts() {
        let { wishlist } = this.props;
        
        return wishlist.products.map((val, idx) => {
            return (
                <WishlistProduct key={idx} product={val.productDetails} />
            )
        })
    }

    render() {
        return (
            <section className="cart-products row">
                {this.renderWishlistProducts()}
            </section>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    wishlist: state.wishlist,
    user: state.user
})
const mapDispatchToProps = dispatch => ({
    // ... normally is an object full of action creators
    actions: bindActionCreators({ getWishlist }, dispatch)
})
// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connectToStore(WishlistProducts);

