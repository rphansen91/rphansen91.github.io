import React from "react";
import Hero from "../../../components/Hero";
import Loader from "../../../components/Loader";
import Media, { Alert } from "../../../components/Media";
import Tile from "../../../components/Tile";
import { activePortfolioColor } from "../active";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withPackages } from "../../../store/packages";

const MediaItem = ({ src, name, username, project, description, shields }) => (
  <Media
    notification
    left={
      src && (
        <p className="image is-64x64">
          <img src={src} />
        </p>
      )
    }
    content={
      <div className="content">
        <p>
          <strong>{name}</strong> <small>@{username}</small>{" "}
          {/* <small>31m</small> */}
          <br />
          {description}
        </p>
        {(shields || []).map(({ url, src }, i) => (
          <a key={i} className="mr" href={url} target="_blank">
            <img src={src} />
          </a>
        ))}
      </div>
    }
  />
);

const OpenSource = ({
  packages: { loading, data, error },
  removePackagesFailure
}) => (
  <div id="open-source">
    <Hero
      bold
      className={activePortfolioColor("open-source")}
      body={
        <div className="container">
          <h1 className="title">Open Source</h1>
        </div>
      }
    />
    <section className="section">
      <div className="container">
        {loading && <Loader />}
        {error && <Alert content={error} onClose={removePackagesFailure} />}
        {[]
          .concat(data)
          .filter(v => v && v.name)
          .map((d, i) => (
            <MediaItem key={i} {...d} />
          ))}
      </div>
    </section>
  </div>
);

export default compose(
  withRouter,
  withPackages
)(OpenSource);
