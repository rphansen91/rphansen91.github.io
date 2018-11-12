import { connect } from "react-redux";
import { call, put, takeEvery } from "redux-saga/effects";
import { createAction } from "redux-delta";
import { asyncDelta } from "redux-delta/lib/dx/async";
import resumejson from "../../resume.json";
import wait from "../../utils/wait";
import get from "lodash/get";

export const loadResume = createAction("LOAD_RESUME");
export const resume = asyncDelta("resume");
export const selectResume = ({ resume }) => ({ resume });

export const withResume = connect(
  selectResume,
  { loadResume, removeResumeFailure: resume.setFailure.bind(null, "") }
);

export const withResumeBasics = connect(({ resume }) => ({
  basics: get(resume, "data.basics") || {}
}));

function* loadResumeSaga() {
  try {
    yield put(resume.setLoading(true));
    yield put(resume.setFailure(""));
    if (process.env.NODE_ENV === "development") yield wait(2000);
    yield put(resume.setSuccess(resumejson));
    yield put(resume.setLoading(false));
  } catch (e) {
    yield put(resume.setFailure(e.message));
    yield put(resume.setLoading(false));
  }
}

export default function* resumeSaga() {
  yield takeEvery(loadResume.type, loadResumeSaga);
}
