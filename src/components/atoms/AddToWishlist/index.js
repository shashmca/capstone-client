import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { updateWishlist } from '../../../actions/wishlist'
import './index.scss';

class AddToWishlist extends Component {
    constructor(props) {
        super(props);
        let isAlreadyAdded = this.isProductInWishlist();
        this.state = {
            isAlreadyAdded: isAlreadyAdded
        }
    }
    componentDidMount() {

    }

    isProductInWishlist() {
        let { user, wishlistObj } = this.props;
        let wishlist = user.wishlists ? JSON.parse(JSON.stringify(user.wishlists)) : { "products": [] };
        let isAlreadyAdded = false;
        wishlist.products.forEach((value, key) => {
            // console.log(value);
            if (value.product === wishlistObj.product) {
                isAlreadyAdded = true;
            }
        });
        return isAlreadyAdded;
    }
    addToWishlist() {
        let { actions, user, wishlistObj } = this.props;
        let { isAlreadyAdded } = this.state;
        let wishlist = user.wishlists ? JSON.parse(JSON.stringify(user.wishlists)) : { "products": [] };
        let wishlistId = wishlist.id;
        // console.log(wishlistObj);
        if (!isAlreadyAdded) {
            wishlist.products.push(wishlistObj);
        } else {
            wishlist.products = wishlist.products.filter((value, key) => {
                return value.product !== wishlistObj.product;
            });
        }
        this.setState({ isAlreadyAdded: !isAlreadyAdded });
        delete wishlist.id;
        // console.log("=========wishlist====");
        // console.log(wishlist);
        actions.updateWishlist(wishlistId, wishlist);
    }
    render() {
        return (
            <button className="add-to-wishlist-btn" onClick={(e) => this.addToWishlist()}><i className={"fa-heart float-right mr-3 " + (this.isProductInWishlist() ? 'fas' : 'far')}></i></button>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    user: state.user
})
const mapDispatchToProps = dispatch => ({
    // ... normally is an object full of action creators
    actions: bindActionCreators({ updateWishlist }, dispatch)
})
// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connectToStore(AddToWishlist);


