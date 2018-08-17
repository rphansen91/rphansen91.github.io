import { connect } from "react-redux";
import { call, put, takeEvery } from "redux-saga/effects";
import { createReducer as cr, createAction as ca } from "redux-delta";
import resumejson from "../../resume.json";
import wait from "../../utils/wait";
import get from "lodash/get";

export const loadResume = ca("LOAD_RESUME");
export const removeResumeFailure = ca("REMOVE_FAILURE_RESUME");
const loading = ca("RESUME_LOADING");
const success = ca("RESUME_RESPOND");
const failure = ca("RESUME_FAILURE");

function* loadResumeSaga(...args) {
  try {
    yield put(loading(true));
    yield put(failure(false));
    yield wait(2000);
    yield put(success(resumejson));
    yield put(loading(false));
  } catch (e) {
    yield put(failure(e.message));
    yield put(loading(false));
  }
}

export const selectResume = ({ resume }) => ({ resume });

export const withResume = connect(
  selectResume,
  { loadResume, removeResumeFailure }
);

export const withResumeBasics = connect(({ resume }) => ({
  basics: get(resume, "data.basics") || {}
}));

export const resume = cr({ loading: false, data: null, error: "" }, [
  loading.case((_, loading) => ({ loading: !!loading })),
  success.case((_, data) => ({ data })),
  failure.case((_, error) => ({ error })),
  removeResumeFailure.case(_ => ({ error: "" }))
]);

export default function* resumeSaga() {
  yield takeEvery(loadResume.type, loadResumeSaga);
}
