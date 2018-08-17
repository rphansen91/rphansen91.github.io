import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import createStore, { bootStore } from "./store";
import App from "./App";
import "./index.css";

const context = {};
const initial = window.__PRELOADED_STATE__;
const basename = process.env.REACT_APP_BASE_NAME || "";
const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(initial, compose);
bootStore(store);

ReactDOM.render(
  <Router basename={basename} context={context}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
