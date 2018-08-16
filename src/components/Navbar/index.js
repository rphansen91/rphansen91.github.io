import React, { Component, cloneElement } from "react";
import { compose } from "redux";
import { withNavbar } from "../../store/navbar";
import Brand from "../Brand";
import Burger from "../Burger";
import cx from "../../utils/cx";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.closeNavbar = this.closeNavbar.bind(this);
  }

  closeNavbar() {
    const { closeNavbar = v => v } = this.props;
    document.removeEventListener("click", this.closeNavbar);
    closeNavbar();
  }

  handleClick() {
    const {
      navbar: { open } = {},
      toggleNavbar = v => v,
      closeNavbar = v => v
    } = this.props;

    toggleNavbar();
    if (!open) document.addEventListener("click", this.closeNavbar);
  }

  render() {
    const {
      navbar: { open } = {},
      brand = <Brand />,
      burger = <Burger />,
      start,
      end,
      ...props
    } = this.props;
    return (
      <nav
        role="navigation"
        className="navbar is-fixed-top"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          {brand}
          {burger &&
            cloneElement(burger, {
              ...burger.props,
              open,
              onClick: this.handleClick.bind(this)
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
  }
}

export default compose(withNavbar)(Navbar);
