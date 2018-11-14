import { connect } from "react-redux";
import { call, put, takeEvery } from "redux-saga/effects";
import { createAction } from "redux-delta";
import { asyncDelta } from "redux-delta/lib/dx/async";
import wait from "../../utils/wait";
import libs from "./libraries";

export const packages = asyncDelta("packages");

export const selectPackages = ({ packages }) => ({ packages });

export const loadPackages = () => d => {
  d(packages.setLoading(true));
  d(packages.setFailure(""));

  return wait(process.env.NODE_ENV === "development" ? 5000 : 0)
    .then(() => {
      d(packages.setSuccess(libs));
      d(packages.setLoading(false));
      return libs;
    })
    .catch(e => {
      d(packages.setFailure(e.message));
      d(packages.setLoading(false));
    });
};

export const withPackages = connect(
  selectPackages,
  d => ({
    removePackagesFailure: () => d(packages.setFailure("")),
    loadPackages: () => d(loadPackages())
  })
);
