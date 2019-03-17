import React, { Component } from 'react';
import CategoryList from '../../organisms/CategoryList';
import { loadProducts } from '../actions/products'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class CategoryListing extends Component {
  componentDidMount() {
    let { actions } = this.props;
    actions.loadCategories();
  }
  render() {
    let { categories } = this.props;
    return (
      <CategoryList categories />
    )
  }

}
const mapStateToProps = (state, ownProps) => ({
  // ... computed data from state and optionally ownProps
  categories: state.categories
})
const mapDispatchToProps = dispatch => ({
  // ... normally is an object full of action creators
  actions: bindActionCreators({ loadCategories }, dispatch)
})
// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connectToStore(CategoryListing);
