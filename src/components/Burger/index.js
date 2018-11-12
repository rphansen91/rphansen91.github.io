import React from "react";
import cx from "../../utils/cx";

export default ({ onClick = v => v, active }) => (
  <a
    onClick={onClick}
    role="button"
    className={cx({
      "navbar-burger": true,
      "is-active": active
    })}
    aria-label="menu"
    aria-expanded="false"
  >
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </a>
);
