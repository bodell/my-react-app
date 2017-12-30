import React, { Component } from 'react';
import logo from './logo.svg';
//import './footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentYear: new Date().getFullYear()
    };
  }
  render() {
    return (
      <div className="footer">
          Copyright {this.state.currentYear}. All rights reserved.        
      </div>
    );
  }
}

export default Footer;
