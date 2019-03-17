import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../organisms/Header';
import { searchResults } from '../../../actions/search';
import store from '../../../store';
import AddToWishlist from '../../atoms/AddToWishlist';
import { images } from '../../../utilities/imgimport';


const metaData = {
  title: 'Search',
  link: '/search',
  isFooterLink: true
};

class Searchpage extends Component {
  constructor() {
    super();
    this.state = {
      searchdata: []
    }
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  componentDidMount() {
    let searchTerm = window.location.href.split('?')[1].split('=')[1];
    let action = searchResults(searchTerm);
    store.dispatch(action);

    this.unsubscribe = store.subscribe(() => {
      let search = store.getState().searchresult;
      console.log(store.getState(), " %%%%%%%%%%%%%%%%");

      this.setState({ searchdata: search });
    });
  }

  renderProductTiles() {
    let { searchdata } = this.state;
    return searchdata.map((item, index) => {
      let wishlistProdObj = { product: item.id, sku: item.variants[0].sku };
      let imgObj = item.variants[0].images.filter((image) => image.isDefault);
      let imgName = imgObj[0].path.split('/').pop();
      let listPrice = item.variants[0].list_price;
      let salePrice = item.variants[0].sale_price;
      return (
        <div key={index} className=" prod-box">
          <div className="float-right"><AddToWishlist wishlistObj={wishlistProdObj} /></div>
          <Link to={'/product/' + item.id}><img src={images[imgName]} alt={item.name} className="img-responsive" style={{ maxWidth: '60%' }} />
            <div className="carousel-caption">
              <p className="cat-head">{item.name}</p>
              {listPrice !== salePrice ? <p className="price"><span>&#8377;{listPrice}</span><span className="sale">&#8377;{salePrice}</span></p> : <p className="price"><span>&#8377;{listPrice}</span></p>}
            </div>
          </Link>
        </div>
      )
    })

  }

  render() {
    let { history } = this.props;
    return (
      <div>
        <Header history={history} />
        {this.renderProductTiles()}
      </div>
    )
  }
}
export default Searchpage;
export { metaData };