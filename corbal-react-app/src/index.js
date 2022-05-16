import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from './store/index';
import { Provider } from "react-redux";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

/**
 * Entry point for the application. 
 */

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
