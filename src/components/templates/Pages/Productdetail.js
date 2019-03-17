import React, { Component } from 'react'
import Header from '../../organisms/Header';
// import ProductSlider from '../../organisms/ProductSlider';
import ProdDetail from '../../organisms/ProdDetail';


const metaData = {
  title: 'Product Detail',
  link: '/product/:id',
  isFooterLink: true
};

class Productdetail extends Component {
  render() {
    let { history } = this.props;
    let prodId = history.location.pathname.split('/').pop();
    return (
      <div>
        <Header history={history} />
        {/* <ProductSlider pid={prodId} /> */}
        <ProdDetail pid={prodId}></ProdDetail>
      </div>
    )
  }
}
export default Productdetail;
export { metaData };