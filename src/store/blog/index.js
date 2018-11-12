import { parseString } from "xml2js";
import { connect } from "react-redux";
import { call, put, takeEvery } from "redux-saga/effects";
import { createAction } from "redux-delta";
import { asyncDelta } from "redux-delta/lib/dx/async";
import wait from "../../utils/wait";
import get from "lodash/get";

const postsUrl = `${process.env.REACT_APP_API_URI}/latest?username=rphansen91`;
export const loadPosts = createAction("LOAD_POSTS");
export const posts = asyncDelta("posts");
export const selectPosts = ({ posts }) => ({ posts });

export const withPosts = connect(
  selectPosts,
  { loadPosts }
);

function* loadPostsSaga() {
  try {
    yield put(posts.setLoading(true));
    yield put(posts.setFailure(""));
    const postsjson = yield call(() => fetch(postsUrl).then(r => r.json()));
    yield put(posts.setSuccess(postsjson));
    yield put(posts.setLoading(false));
  } catch (e) {
    yield put(posts.setFailure(e.message));
    yield put(posts.setLoading(false));
  }
}

export function* postsSaga() {
  yield takeEvery(loadPosts.type, loadPostsSaga);
}
