import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/layout/App';
import { Provider } from 'react-redux';
import configureStore from "./state/store";

const reduxStore = configureStore( {} );

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>
  , document.getElementById('root'));
