import React from "react";
import cx from "../../utils/cx";
import { modifiers } from "../../utils/bulma";

export default ({ onClick, className, children, ...props }) => (
  <button
    onClick={onClick}
    className={cx(["button"].concat(className).concat(modifiers(props)))}
  >
    {children}
  </button>
);
