import { createStore, applyMiddleware, compose } from "redux";
import sagaMiddlewareFactory from "redux-saga";
import { loadPackages, selectPackages } from "./packages";
import { loadResume, selectResume } from "./resume";
import { loadPosts, selectPosts } from "./blog";
import contactSaga from "./contact";
import reducers from "./reducer";
import thunk from "redux-thunk";

const sagas = [contactSaga];

export const bootStore = ({ dispatch, getState }) => {
  const initial = getState();

  return Promise.all([
    initial.packages.data || dispatch(loadPackages()),
    initial.resume.data || dispatch(loadResume()),
    initial.posts.data || dispatch(loadPosts())
  ]);
};

export default (initial, composeEnhancers = compose) => {
  const sagaMiddleware = sagaMiddlewareFactory();
  const middleware = composeEnhancers(applyMiddleware(thunk, sagaMiddleware));
  const store = createStore(reducers, initial, middleware);

  sagas.forEach(saga => sagaMiddleware.run(saga));

  return store;
};
