import { connect } from "react-redux";
import { call, put, takeEvery } from "redux-saga/effects";
import { createAction } from "redux-delta";
import { asyncDelta } from "redux-delta/lib/dx/async";
import resumejson from "../../resume.json";
import wait from "../../utils/wait";
import get from "lodash/get";

export const loadResume = () => d => {
  d(resume.setLoading(true));
  d(resume.setFailure(""));

  return wait(process.env.NODE_ENV === "development" ? 2000 : 0)
    .then(() => {
      d(resume.setSuccess(resumejson));
      d(resume.setLoading(false));
      return resumejson;
    })
    .catch(e => {
      d(resume.setFailure(e.message));
      d(resume.setLoading(false));
    });
};

export const resume = asyncDelta("resume");

export const selectResume = ({ resume }) => ({ resume });

export const withResume = connect(
  selectResume,
  d => ({
    loadResume: () => d(loadResume()),
    removeResumeFailure: () => d(resume.setFailure)
  })
);

export const withResumeBasics = connect(({ resume }) => ({
  basics: get(resume, "data.basics") || {}
}));
