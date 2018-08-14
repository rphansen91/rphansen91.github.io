import React from "react";
import cx from "../../utils/cx";
import { modifiers } from "../../utils/bulma";

const Media = ({ className, left, right, content, ...props }) => (
  <article className={cx(["media"].concat(className).concat(modifiers(props)))}>
    <figure className="media-left">{left}</figure>
    <div className="media-content">{content}</div>
    <div className="media-right">{right}</div>
  </article>
);

export const Alert = ({ content, onClose }) => (
  <Media
    danger
    notification
    content={<div className="content">{content}</div>}
    right={<button className="delete" onClick={onClose} />}
  />
);

export default Media;
