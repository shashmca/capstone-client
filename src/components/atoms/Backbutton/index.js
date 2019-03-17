import React, { Component } from 'react'

export default class BackButton extends Component {
  handleClick() {
    let { history } = this.props;
    if (history) {
      history.history.goBack();
    }
  }
  render() {


    return (
      <button className="previous round" onClick={(e) => this.handleClick(e)}>&#8249;</button>
    )
  }
}
