import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { images } from '../../../utilities/imgimport'
import AddToWishlist from '../../atoms/AddToWishlist';

class WishlistProduct extends Component {
  render() {

    let { product } = this.props;
    let tgtUrl = product ? `/product/${product.id}` : '/';
    let variant = product ? product.variants[0] : {};
    let imgUrl = variant.images[0].path.split('/').pop();
    let prodObj = {
      product: product.id,
      sku: variant.sku
    }
    return (
      <div className="col-6 col-sm-3 wishlist-prod">
        <div className="wishlist-prod-container">
          <div className="float-right"><AddToWishlist wishlistObj={prodObj} /></div>
          <Link href={tgtUrl}>
            <img src={images[imgUrl]} alt={product.name} className="img-responsive" style={{ width: '100%', height: '100%' }} />
          </Link>
          <p>{product.name}</p>
          <p>&#x20b9; {variant.sale_price}</p>
        </div>
      </div>
    )
  }
}
export default WishlistProduct