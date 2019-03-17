import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../../atoms/Backbutton';
import Search from '../Search';
// import LogoutButton from '../../atoms/LogoutButton';
import { images } from '../../../utilities/imgimport';

class Header extends Component {
  render() {
    let history = this.props;
    return (
      <div>
        <div className="row w-100">
          <div className="col"><BackButton history={history} /></div>
          <div className="col"><Link to="/home" className="float-right"><img src={images['logo.png']} alt="Capstone logo" style={{ width: '50px' }} /></Link></div>
        </div>
        <div className="row w-100">
          <Search />
        </div>
      </div>
    )
  }
}
export default Header;