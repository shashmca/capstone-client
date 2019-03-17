import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { images } from '../../../utilities/imgimport'
import RemoveFromCartBtn from '../../atoms/RemoveFromCartBtn';

class CartProduct extends Component {
  render() {
    let { product } = this.props;
    let productDetails = product.productDetails;
    let tgtUrl = `/product/${productDetails.id}`;
    let variant = productDetails.variants[0];
    let imgUrl = variant.thumbnail.split('/').pop();
    let prodObj = {
      product: productDetails.id,
      sku: variant.sku,
      qty: variant.qty
    }
    return (
      <div className="row cart-prod">
        <div className="col-3 col-sm-3">
          <Link to={tgtUrl}>
            <img src={images[imgUrl]} alt={productDetails.name} className="img-responsive" style={{ width: '100%', height: '100%' }} />
          </Link>
        </div>
        <div className="col-6 col-sm-6">
          <Link to={tgtUrl}>
            <p className="prod-name font-weight-bold">{productDetails.name}</p>
          </Link>
          <p className="prod-desc">{productDetails.short_desc}</p>
          <p className='prod-attrs'>
            {
              variant.attrs.map((attr, idx) => {
                return (<span className='prod-attr' key={idx}>
                  <span className='prod-attr-name' > {attr.name}:</span>
                  <span className='prod-attr-value' > {attr.value}</span>
                </span>)
              })
            }
            <span className='prod-attr'>
              <span className='prod-attr-name' > Qty:</span>
              <span className='prod-attr-value' > {product.qty}</span>
            </span>
          </p>

        </div>
        <div className="col-2 col-sm-2">
          &#x20b9; {variant.sale_price}
        </div>
        <div className="col-1 col-sm-1">
          <RemoveFromCartBtn productObj={prodObj} />
        </div>
      </div >

    )
  }
}
export default CartProduct