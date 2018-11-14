import React from "react";
import cx from "../../utils/cx";
import { css } from "react-emotion";

export const CardImage = ({ image }) => (
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={image} />
    </figure>
  </div>
);

export const CardUser = ({ picture, name, username }) => (
  <div className="media">
    <div className="media-left">
      <figure className="image is-48x48">
        <img src={picture} />
      </figure>
    </div>
    <div className="media-content">
      <p className="title is-4">{name}</p>
      <p className="subtitle is-6">@{username}</p>
    </div>
  </div>
);

export default ({ title, subtitle, image, footer }) => (
  <div className="card">
    {image && <CardImage image={image} />}
    <div className="card-content">
      <p
        className={cx([
          "title",
          css({
            height: "2.4em",
            overflow: "hidden"
          })
        ])}
      >
        {title}
      </p>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
    {footer}
  </div>
);
