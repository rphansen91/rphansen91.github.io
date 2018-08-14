import React from "react";
import cx from "../../utils/cx";
import { withRouter } from "react-router-dom";
import { modifiers } from "../../utils/bulma";

export const Tab = ({ children, ...props }) => <li {...props}>{children}</li>;

export const TabLink = withRouter(
  ({
    history: { push },
    location: { pathname },
    to,
    activeClassName,
    children,
    exact
  }) => (
    <li
      className={cx({
        [activeClassName]: exact ? pathname === to : pathname.includes(to)
      })}
      onClick={() => to && push(to)}
    >
      {children}
    </li>
  )
);

export default ({ children, className, ...props }) => (
  <nav className={cx(["tabs"].concat(className).concat(modifiers(props)))}>
    {children}
  </nav>
);
