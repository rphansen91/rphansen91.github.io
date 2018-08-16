import { connect } from "react-redux";
import { createReducer as cr, createAction as ca } from "redux-delta";

export const openNavbar = ca("OPEN_NAVBAR");

export const closeNavbar = ca("CLOSE_NAVBAR");

export const toggleNavbar = ca("TOGGLE_NAVBAR");

export const navbar = cr({ open: false }, [
  openNavbar.case(_ => ({ open: true })),
  closeNavbar.case(_ => ({ open: false })),
  toggleNavbar.case(({ open }) => ({ open: !open }))
]);

export const withNavbar = connect(
  ({ navbar }) => ({ navbar }),
  dispatch => ({
    openNavbar() {
      dispatch(openNavbar());
    },
    closeNavbar() {
      dispatch(closeNavbar());
    },
    toggleNavbar() {
      dispatch(toggleNavbar());
    }
  })
);
