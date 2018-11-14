import React, { Component, cloneElement } from "react";
import cx from "../../utils/cx";

export const Trigger = ({ children, onClick }) => (
  <div className="dropdown-trigger">
    <button
      onClick={onClick}
      className="button"
      aria-haspopup="true"
      aria-controls="dropdown-menu"
    >
      <span>{children}</span>
      <span className="icon is-small">
        <i className="fas fa-angle-down" aria-hidden="true" />
      </span>
    </button>
  </div>
);

export const Menu = ({ children }) => (
  <div className="dropdown-menu">
    <div className="dropdown-content">{children}</div>
  </div>
);

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  toggleActive() {
    const { active } = this.state;
    this.setState({ active: !active });
  }

  setActive(active) {
    this.setState({ active });
  }

  render() {
    const {
      className,
      children,
      trigger = <div />,
      menu = <div />
    } = this.props;
    const { active } = this.state;
    return (
      <div
        className={cx({
          [className]: className,
          dropdown: true,
          "is-active": active
        })}
      >
        {cloneElement(trigger, { onClick: this.toggleActive.bind(this) })}
        {cloneElement(menu, { onClick: this.setActive.bind(this) })}
      </div>
    );
  }
}
