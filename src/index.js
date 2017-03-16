import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Crib from './Crib';
import Page from './components/Page';
import Entrance from './components/Entrance';
import About from './components/About';
import Cases from './components/Cases';
import Contact from './components/Contact';

import './css/normalize.css';
import './css/skeleton.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route exact path="/" component={Crib}>
      <IndexRoute component={Page}/>
      <IndexRoute component={Entrance}/>
      <Route path="contact" component={Contact}/>
    </Route>
  </Router>, document.getElementById('root')
);
