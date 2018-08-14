import React, { cloneElement } from "react";
import { compose } from "redux";
import { withNavbar } from "../../store/navbar";
import Brand from "../Brand";
import Burger from "../Burger";
import cx from "../../utils/cx";

export const Navbar = ({
  navbar: { open } = {},
  closeNavbar = v => v,
  openNavbar = v => v,
  toggleNavbar = v => v,
  brand = <Brand />,
  burger = <Burger />,
  start,
  end,
  ...props
}) => (
  <nav
    className="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      {brand}
      {burger &&
        cloneElement(burger, {
          ...burger.props,
          open,
          onClick: toggleNavbar
        })}
    </div>
    <div
      className={cx({
        "navbar-menu": true,
        "is-active": open
      })}
    >
      {start && <div className="navbar-start">{start}</div>}
      {end && <div className="navbar-end">{end}</div>}
    </div>
  </nav>
);

export default compose(withNavbar)(Navbar);
