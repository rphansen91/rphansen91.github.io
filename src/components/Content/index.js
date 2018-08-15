import React from "react";
import cx from "../../utils/cx";

export default ({ className, style, title, subtitle }) => (
  <div className={cx({ content: true, className: className })} style={style}>
    {title && <div className="title">{title}</div>}
    {subtitle && <div className="subtitle">{subtitle}</div>}
  </div>
);
