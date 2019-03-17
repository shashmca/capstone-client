
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './static/styles/base/base.scss';
import 'bootstrap/dist/css/bootstrap.css'
// import Header from './components/organisms/Header';
import Body from './components/templates/Body';
import Footer from './components/organisms/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wwn-app">
          {/* <Header /> */}
          <Body />
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
