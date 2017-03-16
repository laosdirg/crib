import React, { Component } from 'react';
import Header from './components/Header';
import Page from './components/Page';
import Footer from './components/Footer';
import './css/Crib.css';

class Crib extends Component {
  render() {
    return (
      <div className="Crib">
        <Header />
        <Page>{ this.props.children }</Page>
        <Footer />
      </div>
    );
  }
}

export default Crib;
