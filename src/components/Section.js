import React, { Component } from 'react';
import '../css/Section.css';

class Section extends Component {
  render() {
    return (
      <div className={"Crib-section " + this.props.color}>
        { this.props.children }
      </div>
    );
  }
}

export default Section;
