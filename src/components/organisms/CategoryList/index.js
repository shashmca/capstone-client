import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadCategories } from '../../../actions/categories'
import Category from '../../atoms/Category';
import './index.scss';

class CategoryList extends Component {
  componentDidMount() {
    let { actions } = this.props;
    actions.loadCategories();
  }
  renderCategories() {
    let { categories } = this.props;

    return categories.map((val, idx) => {
      return (
        <div className="col-sm-3 mb-3 col-6" key={idx}>
          <Category category={val} />
        </div>
      )
    })
  }

  render() {
    return (
      <section className="category-list">
        <h1 className="mt-3 mb-3">All Categories</h1>
        <div className="row">{this.renderCategories()}
        </div>
      </section>
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

export default connectToStore(CategoryList);

// export default CategoryList;
