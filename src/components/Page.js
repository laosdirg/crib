import React, { Component } from 'react';
import '../css/Page.css';

class Page extends Component {
  render() {
    return (
      <div className="Crib-page">
      { this.props.children }
      </div>
    );
  }
}

export default Page;
