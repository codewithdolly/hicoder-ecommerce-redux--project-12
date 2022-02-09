import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider
 } from 'react-redux';
import store from "./Redux/store"

import App from './App';

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

