import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from './components/Home';
import ReactSwipers from './components/swiper-component/ReactSwipers/ReactSwipers';

export const customHistory = createBrowserHistory();

export default function App() {
  return (
    <Router history={customHistory}>
      <Route path="/react-swipers" component={ReactSwipers}></Route>
      <Route path="/" component={Home}></Route>
    </Router>
  )
}
