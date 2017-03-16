import React, { Component } from 'react';
import Section from './Section';
import crossplatform from '../images/cross-platform_black.svg';
import react_wordpress from '../images/react_wordpress.svg';
import watch from '../images/watch.svg';
import feather from '../images/feather.svg';
import pens from '../images/pens.svg';
import '../css/Entrance.css';

class Entrance extends Component {
  render() {
    return (
      <div className="Crib-entrance">

        <Section>
          <div className="container">
            <div className="row">
              <h1>vi er laosdirg</h1>
            </div>
            <div className="row">
              <div className="one-third column">
                <img className="u-max-full-width" src={ feather }></img>
                <p>Vi gør udvikling så let som en leg.</p>
              </div>
              <div className="one-third column">
                <img className="u-max-full-width" src={ pens }></img>
                <p>Vi bruger ikke engang pen og papir.</p>
              </div>
              <div className="one-third column">
                <img className="u-max-full-width" src={ watch }></img>
                <p>Og alligevel tager det kun den halve tid.</p>
              </div>
            </div>
          </div>
        </Section>

        <Section color="blue">
          <div className="container">
            <div className="row">
              <div className="one-half column">
                <h3 className="underlined heading">De fineste teknologier</h3>
                <p>Vi udvikler webbaserede applikationer og hjemmesider i React og Wordpress (REST API).</p>
              </div>
              <div className="one-half column">
                <img className="u-max-full-width" src={ react_wordpress }></img>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="container">
            <div className="row">
              <div className="one-half column">
                <img className="u-max-full-width" src={ crossplatform }></img>
              </div>
              <div className="one-half column">
                <h3 className="underlined section">Platform uafhængigt</h3>
                <p>Vi udvikler vores produkter så de kan tilgås fra alle platforme og stadig se sprøde ud og fungere optimalt.</p>
              </div>
            </div>
          </div>
        </Section>

      </div>
    );
  }
}

export default Entrance;
