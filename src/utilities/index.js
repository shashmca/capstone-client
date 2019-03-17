import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux';

class Loader extends Component {
  handleLoader() {
    let { showLoader } = this.props;
    if (showLoader) {
      return <div className="colorlib-loader" style={{ opacity: '0.5' }}></div>;
    } else {
      return;
    }
  }
  render() {

    return (
      <div>{this.handleLoader()}</div>

    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  showLoader: state.loader
})

const mapDispatchToProps = dispatch => ({
  // ... normally is an object full of action creators
  // actions: bindActionCreators({ addToCart }, dispatch)
})

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connectToStore(Loader);
