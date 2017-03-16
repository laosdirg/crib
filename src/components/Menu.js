import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../images/loasdirg_logo.svg';
import '../css/Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="Crib-menu">
        <ul role="nav">
          <Link to="/" ><img src={ logo }></img></Link>
          <li><Link to="/contact" activeClassName="active">Kontakt</Link></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
