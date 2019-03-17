import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { loadProductById } from '../../../actions/products'
import { images } from '../../../utilities/imgimport';
import './index.scss';
class ProductSlider extends Component {

  componentDidMount() {
    let { pid, actions } = this.props;
    actions.loadProductById(pid);
  }
  render() {
    let { pid, productObj } = this.props;

    let variants = productObj && productObj.variants ? productObj.variants.length : [];
    // let 

    return (
      <div className="row">
        <div className="col-sm-12">
          <h1>{productObj.name}</h1>
          <img src={productObj} alt={productObj.name} />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => ({
  // ... computed data from state and optionally ownProps
  productObj: state.productObj
})
const mapDispatchToProps = dispatch => ({
  // ... normally is an object full of action creators
  actions: bindActionCreators({ loadProductById }, dispatch)
})
// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connectToStore(ProductSlider);
