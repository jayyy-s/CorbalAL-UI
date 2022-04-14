import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from './store/index';
import { Provider } from "react-redux";
import Store from "./store";
import App from "./App";

const StoreInstance = Store();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
