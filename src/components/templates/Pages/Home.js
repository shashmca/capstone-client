import React, { Component } from 'react'
import CategoryList from '../../organisms/CategoryList';
import Header from '../../organisms/Header';
// import store from '../../../store';


// import AddToCartBtn from '../../atoms/AddToCartBtn';
// import AddToWishlist from '../../atoms/AddToWishlist';
// import RemoveFromCartBtn from '../../atoms/RemoveFromCartBtn';

const metaData = {
  title: 'Home',
  link: '/home',
  isFooterLink: true
};

class Home extends Component {

  render() {
    // let prodObj = { product: "5c7bf86aa67be71fd06fabe4", sku: "buckle_bag_frey", qty: 1 };
    // let wishlistProdObj = { product: "5c7bf75fa67be71fd06fabe3", sku: "snadals_blue" };
      // console.log(store.getState(), " %%%%%%%%%%%%%%%%");
    return (
      <div>
        <Header/>
        <CategoryList />
        {/* <AddToCartBtn productObj={prodObj} />
        <RemoveFromCartBtn productObj={prodObj} />
        <AddToWishlist wishlistObj={wishlistProdObj} /> */}
      </div>
    )
  }
}

export default Home;
export { metaData };