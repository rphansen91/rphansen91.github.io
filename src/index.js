import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import createStore, { bootStore } from "./store";
import App from "./App";
import { hydrate } from "emotion";
import "./index.css";

const context = {};
const basename = process.env.REACT_APP_BASE_NAME || "";
const store = createStore(
  window.__PRELOADED_STATE__ || {},
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
);
hydrate(window.__EMOTION_IDS__ || []);
bootStore(store);
render();

function render() {
  ReactDOM.render(
    <Router basename={basename} context={context}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
    document.getElementById("root")
  );
}
