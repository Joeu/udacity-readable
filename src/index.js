import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/layout/App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import configureStore from "./state/store";

const reduxStore = configureStore( {} );

ReactDOM.render(
  <Provider store={reduxStore}>
    <Router>
      <Route path='/' component={App} />
    </Router>
  </Provider>
  , document.getElementById('root'));
