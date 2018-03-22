import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import promise from "redux-promise";
import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers";
import App from "./containers/app/App";
import "./index.css";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router><App /></Router>
  </Provider>,
  document.getElementById("root")
);

