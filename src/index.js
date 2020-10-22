import React from 'react';
import ReactDOM from 'react-dom';
import '../src/scss/app.scss';
import App from './App';
import {BrowserRouter,Route} from "react-router-dom";
import {Header} from "./components/Header";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

ReactDOM.render(
      <BrowserRouter>
          <Provider store={store}>
  <App/>
          </Provider>
      </BrowserRouter>
  ,
  document.getElementById('root')
);

