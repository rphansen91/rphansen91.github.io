import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import createStore from "./store";
import bootStore from "./store/boot";
import App from "./App";
import "./index.css";

const preloadedState = window.__PRELOADED_STATE__;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [
  thunk,
  process.env.NODE_ENV !== "production" && logger
].filter(m => typeof m === "function");
const store = createStore(
  preloadedState,
  composeEnhancers(applyMiddleware(...middleware))
);
const context = {};
bootStore(store);

ReactDOM.render(
  <Router basename={process.env.REACT_APP_BASE_NAME || ""} context={context}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
