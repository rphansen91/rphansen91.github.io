import { createStore } from "redux";
import reducers from "./reducer";

export default (initial, middleware) =>
  createStore(reducers, initial, middleware);
