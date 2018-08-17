import { connect } from "react-redux";
import { createReducer as cr, createAction as ca } from "redux-delta";

const openNavbar = ca("OPEN_NAVBAR");

const closeNavbar = ca("CLOSE_NAVBAR");

const toggleNavbar = ca("TOGGLE_NAVBAR");

export const navbar = cr({ open: false }, [
  openNavbar.case(_ => ({ open: true })),
  closeNavbar.case(_ => ({ open: false })),
  toggleNavbar.case(({ open }) => ({ open: !open }))
]);

export const selectNavbar = ({ navbar }) => ({ navbar });

export const withNavbar = connect(
  selectNavbar,
  { openNavbar, closeNavbar, toggleNavbar }
);
