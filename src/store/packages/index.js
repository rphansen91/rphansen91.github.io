import { connect } from "react-redux";
import { call, put, takeEvery } from "redux-saga/effects";
import { createAction } from "redux-delta";
import { asyncDelta } from "redux-delta/lib/dx/async";
import wait from "../../utils/wait";
import libs from "./libraries";

export const loadPackages = createAction("LOAD_PACKAGES");
export const packages = asyncDelta("packages");
export const selectPackages = ({ packages }) => ({ packages });

export const withPackages = connect(
  selectPackages,
  {
    removePackagesFailure: packages.setFailure.bind(null, ""),
    loadPackages
  }
);

function* loadPackagesSaga() {
  try {
    yield put(packages.setLoading(true));
    yield put(packages.setFailure(""));
    if (process.env.NODE_ENV === "development") yield wait(5000);
    yield put(packages.setSuccess(libs));
    yield put(packages.setLoading(false));
  } catch (e) {
    yield put(packages.setFailure(e.message));
    yield put(packages.setLoading(false));
  }
}

export default function* packagesSaga() {
  yield takeEvery(loadPackages.type, loadPackagesSaga);
}
