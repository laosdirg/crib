import React, { Component } from 'react';
import Menu from './Menu';
import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Crib-header">
        <Menu />
      </div>
    );
  }
}

export default Header;
