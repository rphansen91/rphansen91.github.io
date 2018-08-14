import { connect } from "react-redux";
import { createReducer as cr, createAction as ca } from "redux-delta";
import libs from "./libraries";

const loading = ca("PACKAGES_LOADING");
const success = ca("PACKAGES_RESPOND");
const failure = ca("PACKAGES_FAILURE");

export const loadPackages = (...args) => dispatch => {
  dispatch(loading(true));

  // return fetch(...args).then(res => res.json())
  return Promise.resolve(libs)
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

export const withPackages = connect(
  ({ packages }) => ({ packages }),
  dispatch => ({
    removePackagesError() {
      dispatch(failure(""));
    },
    loadPackages(...args) {
      return dispatch(loadPackages(...args));
    }
  })
);

export const packages = cr({ loading: false, data: null, error: "" }, [
  loading.case((_, loading) => ({ loading: !!loading })),
  success.case((_, data) => ({ data })),
  failure.case((_, error) => ({ error }))
]);
