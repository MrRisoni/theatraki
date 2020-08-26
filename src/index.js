import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import BookSpectacle from './book/BookSpectacle';
import NotFoundRoute from './NotFoundRoute';
import Browser from './browse/Browser';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Browser} />
      <Route exact path="/book/:performanceId" component={BookSpectacle} />
      <Route component={NotFoundRoute} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.unregister();
