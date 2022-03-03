import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LogIn from "./components/pages/LogIn";

import { Provider } from "react-redux";
import Store from "./store";

const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <React.StrictMode>
      <LogIn />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
