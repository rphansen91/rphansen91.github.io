import React from "react";
import cx from "../../utils/cx";
import { modifiers } from "../../utils/bulma";

export default ({ children, className, onClick, ...props }) => (
  <div
    onClick={onClick}
    className={cx(["tile"].concat(className).concat(modifiers(props)))}
  >
    {children}
  </div>
);
