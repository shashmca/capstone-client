import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [{
        name: 'Explore',
        target: '/home',
        classes: 'fab fa-safari'
      },
      {
        name: 'Liked',
        target: '/wishlist',
        classes: 'far fa-heart'
      },
      {
        name: 'Cart',
        target: '/cart',
        classes: 'fas fa-shopping-cart'
      },
      {
        name: 'Calendar',
        target: '/calendar',
        classes: 'far fa-calendar-alt'
      },
      {
        name: 'Profile',
        target: '/profile',
        classes: 'far fa-user-circle'
      },
      {
        name: 'Orders',
        target: '/orders',
        classes: 'far fa-user-circle'
      }]
    }
  }

  renderFooterLinks() {
    let { links } = this.state;
    return links.map((val, idx) => {
      let activeClass = window.location.href.indexOf(val.target) > -1 ? 'active' : ''
      let appliedClass = 'mt-2 d-block h-100 ' + activeClass;
      return (
        <div className="col" key={idx}>
          <Link to={val.target} className={appliedClass}>
            <i className={val.classes}></i><br />
            {val.name}
          </Link>
        </div>
      )
    })
  }
  render() {
    return (
      <footer>
        <div className="row h-100">
          {this.renderFooterLinks()}
        </div>
      </footer>
    )
  }
}
export default Footer;