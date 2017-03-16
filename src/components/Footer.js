import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../images/loasdirg_logoonly.svg';
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Crib-footer container">
        <div className="row">
          <div className="one-third column">
            <p>Følg os på: <a href="//github.com/laosdirg">Github</a></p>
            <Link to="/contact" className="button u-pull-right">Start et projekt</Link>
            <Link to="/" className="button u-pull-right">Vores arbejde</Link>
          </div>
          <div className="one-third column">
            <Link to="/" ><img src={ logo }></img></Link>
          </div>
          <div className="one-third column">
            <h5>Om os</h5>
            <p>Vi er en gruppe udviklere fast besluttet på at rode i kode dag ud og dag ind.</p>
            Læs mere om os <Link to="/">her</Link>.
          </div>
        </div>
        <div className="copyright">© Laosdirg { new Date().getFullYear() }</div>
      </div>
    );
  }
}

export default Footer;
