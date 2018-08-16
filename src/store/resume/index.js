import { connect } from "react-redux";
import { createReducer as cr, createAction as ca } from "redux-delta";
import resumejson from "../../resume.json";
import get from "lodash/get";

const loading = ca("RESUME_LOADING");
const success = ca("RESUME_RESPOND");
const failure = ca("RESUME_FAILURE");

const waitFor = time => v =>
  new Promise(resolve => setTimeout(() => resolve(v), time));

export const loadResume = (...args) => dispatch => {
  dispatch(loading(true));

  return Promise.resolve(resumejson)
    .then(waitFor(2000))
    .then(res => {
      dispatch(success(res));
      dispatch(loading(false));
      return res;
    })
    .catch(err => {
      dispatch(failure(err.message));
      dispatch(loading(false));
    });
};

export const withResume = connect(
  ({ resume }) => ({ resume }),
  dispatch => ({
    removeResumeError() {
      dispatch(failure(""));
    },
    loadResume(...args) {
      return dispatch(loadResume(...args));
    }
  })
);

export const withResumeBasics = connect(({ resume }) => ({
  basics: get(resume, "data.basics") || {}
}));

export const resume = cr({ loading: false, data: null, error: "" }, [
  loading.case((_, loading) => ({ loading: !!loading })),
  success.case((_, data) => ({ data })),
  failure.case((_, error) => ({ error }))
]);
