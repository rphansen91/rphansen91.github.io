import { parseString } from "xml2js";
import { connect } from "react-redux";
import { call, put, takeEvery } from "redux-saga/effects";
import { createAction } from "redux-delta";
import { asyncDelta } from "redux-delta/lib/dx/async";
import wait from "../../utils/wait";
import get from "lodash/get";

const postsUrl = `${process.env.REACT_APP_API_URI}/latest?username=rphansen91`;

export const loadPosts = () => d => {
  d(posts.setLoading(true));
  d(posts.setFailure(""));

  return fetch(postsUrl)
    .then(r => r.json())
    .then(postsjson => {
      d(posts.setSuccess(postsjson));
      d(posts.setLoading(false));
      return postsjson;
    })
    .catch(e => {
      d(posts.setFailure(e.message));
      d(posts.setLoading(false));
    });
};

export const posts = asyncDelta("posts");

export const selectPosts = ({ posts }) => ({ posts });

export const withPosts = connect(
  selectPosts,
  d => ({
    loadPosts: () => d(loadPosts())
  })
);
