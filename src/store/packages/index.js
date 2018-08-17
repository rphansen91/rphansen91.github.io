import { connect } from "react-redux";
import { call, put, takeEvery } from "redux-saga/effects";
import { createReducer as cr, createAction as ca } from "redux-delta";
import wait from "../../utils/wait";
import libs from "./libraries";

export const loadPackages = ca("LOAD_PACKAGES");
export const removePackagesFailure = ca("REMOVE_PACKAGES_FAILURE");
const loading = ca("PACKAGES_LOADING");
const success = ca("PACKAGES_RESPOND");
const failure = ca("PACKAGES_FAILURE");

function* loadPackagesSaga() {
  try {
    yield put(loading(true));
    yield put(failure(""));
    yield wait(5000);
    yield put(success(libs));
    yield put(loading(false));
  } catch (e) {
    yield put(failure(e.message));
    yield put(loading(false));
  }
}

export const selectPackages = ({ packages }) => ({ packages });

export const withPackages = connect(
  selectPackages,
  {
    removePackagesFailure,
    loadPackages
  }
);

export const packages = cr({ loading: false, data: null, error: "" }, [
  loading.case((_, loading) => ({ loading: !!loading })),
  success.case((_, data) => ({ data })),
  failure.case((_, error) => ({ error })),
  removePackagesFailure.case(_ => ({ error: "" }))
]);

export default function* packagesSaga() {
  yield takeEvery(loadPackages.type, loadPackagesSaga);
}
