import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";


const globalStore = store();


ReactDOM.render(
<Provider store={globalStore}>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
