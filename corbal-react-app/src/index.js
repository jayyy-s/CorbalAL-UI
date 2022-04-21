import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from './store/index';
import { Provider } from "react-redux";
import Store from "./store";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

const StoreInstance = Store();

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
