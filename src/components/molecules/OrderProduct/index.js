import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { images } from '../../../utilities/imgimport'

class OrderProduct extends Component {
  render() {
    let { product } = this.props;
    let productDetails = product.productDetails;
    let tgtUrl = `/product/${productDetails.id}`;
    let variant = productDetails.variants[0];
    let imgUrl = variant.thumbnail.split('/').pop();

    return (
      <div className="row">
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
        <div className="col-3 col-sm-3">
          &#x20b9; {variant.sale_price}
        </div>
      </div >
    )
  }
}
export default OrderProduct