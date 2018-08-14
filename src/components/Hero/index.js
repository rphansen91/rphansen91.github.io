import React from "react";
import cx from "../../utils/cx";
import { modifiers } from "../../utils/bulma";

export default ({ className, head, body, foot, ...props }) => (
  <section className={cx(["hero"].concat(className).concat(modifiers(props)))}>
    {head && <div className="hero-head">{head}</div>}
    {body && <div className="hero-body">{body}</div>}
    {foot && <div className="hero-foot">{foot}</div>}
  </section>
);
