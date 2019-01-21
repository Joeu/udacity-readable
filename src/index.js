import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
// import App from "../app/views/layouts/app";
import configureStore from "../src/state/store";

const reduxStore = configureStore( {} );

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>
  , document.getElementById('root'));
