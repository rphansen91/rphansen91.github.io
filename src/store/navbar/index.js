import { connect } from "react-redux";
import { createReducer as cr, createAction as ca } from "redux-delta";
import { toggleDelta } from "redux-delta/lib/dx/toggle";

export const navbar = toggleDelta("navbar");
export const selectNavbar = ({ navbar }) => ({ navbar });

export const withNavbar = connect(
  selectNavbar,
  {
    openNavbar: navbar.setActive.bind(null, true),
    closeNavbar: navbar.setActive.bind(null, false),
    toggleNavbar: navbar.toggleActive
  }
);
