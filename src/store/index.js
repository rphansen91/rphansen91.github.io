import { createStore, applyMiddleware, compose } from "redux";
import sagaMiddlewareFactory from "redux-saga";
import packagesSaga, { loadPackages } from "./packages";
import resumeSaga, { loadResume } from "./resume";
import { postsSaga, loadPosts } from "./blog";
import contactSaga from "./contact";
import reducers from "./reducer";

const sagas = [packagesSaga, resumeSaga, postsSaga, contactSaga];

export const bootStore = ({ dispatch }) => {
  dispatch(loadPackages());
  dispatch(loadResume());
  dispatch(loadPosts());
};

export default (initial, composeEnhancers = compose) => {
  const sagaMiddleware = sagaMiddlewareFactory();
  const middleware = composeEnhancers(applyMiddleware(sagaMiddleware));
  const store = createStore(reducers, initial, middleware);

  sagas.forEach(saga => sagaMiddleware.run(saga));

  return store;
};
