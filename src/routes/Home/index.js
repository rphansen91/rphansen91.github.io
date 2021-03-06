import React from "react";
import { compose } from "redux";
import { Alert } from "../../components/Media";
import Loader from "../../components/Loader";
import Hero from "../../components/Hero";
import Tile from "../../components/Tile";
import Badge from "../../components/Badge";
import Footer from "../../components/Footer";
import Beach from "../../components/Draw/Beach";
import Tiger from "../../components/Draw/Tiger";
import Gears from "../../components/Draw/Gears";
import Brain from "../../components/Draw/Brain";
import Pocketwatch from "../../components/Draw/Pocketwatch";
import Seo from "../../components/Seo";
import { withResume } from "../../store/resume";
import { withRouter } from "react-router-dom";
import { activePortfolioColor } from "../Portfolio/active";
import get from "lodash/get";
import cx from "../../utils/cx";
import { css } from "react-emotion";
import SeoMain from "../../components/Seo/Main";

const beach = css({
  position: "absolute",
  top: 0,
  right: 0,
  height: "100%"
});

const svg = css({
  fill: "none",
  stroke: "currentColor",
  transformOrigin: "center",
  strokeWidth: "2px"
});

export default compose(
  withRouter,
  withResume
)(({ resume: { loading, error }, removeResumeFailure, history }) => (
  <div>
    <SeoMain />

    <Hero
      className="relative"
      dark
      bold
      medium
      body={
        <div>
          <Beach className={cx([svg, beach])} timer={2000} />
          <div className="container">
            <div className="columns is-desktop">
              <div className="column">
                <Badge showProfiles />
              </div>
              <div className="column" />
            </div>
          </div>
        </div>
      }
    />

    <section className="section">
      {loading ? (
        <Loader repeat={-1} />
      ) : error ? (
        <Alert content={error} onClose={removeResumeFailure} />
      ) : (
        ""
      )}

      <Tile ancestor>
        <Tile vertical>
          <Tile parent>
            <Tile
              className={cx([
                "shadow",
                "pointer",
                activePortfolioColor("applications")
              ])}
              onClick={() => history.push("/portfolio/applications")}
              child
              notification
            >
              <p className="title">Applications</p>
            </Tile>
          </Tile>
          <Tile>
            <Tile parent vertical>
              <Tile
                className={cx([
                  "shadow",
                  "pointer",
                  activePortfolioColor("open-source")
                ])}
                onClick={() => history.push("/portfolio/open-source")}
                child
                notification
              >
                <p className="title">Open Source</p>
                <Gears className={svg} />
              </Tile>
            </Tile>
            <Tile parent>
              <Tile
                className={cx([
                  "shadow",
                  "pointer",
                  activePortfolioColor("skills")
                ])}
                onClick={() => history.push("/portfolio/skills")}
                child
                notification
              >
                <p className="title">Skills</p>
                <Tiger className={svg} timer={6000} />
              </Tile>
            </Tile>
            <Tile parent>
              <Tile
                className={cx([
                  "shadow",
                  "pointer",
                  "relative",
                  activePortfolioColor("experience")
                ])}
                onClick={() => history.push("/portfolio/experience")}
                child
                notification
              >
                <div className="content">
                  <p className="title">Experience</p>
                  <p className="subtitle" />
                </div>
                <Brain className={svg} />
              </Tile>
            </Tile>
          </Tile>
          <Tile parent>
            <Tile
              className={cx(["shadow", "pointer"])}
              onClick={() => history.push("/blog")}
              child
              notification
              danger
            >
              <p className="title">Blog</p>
              <p className="subtitle" />
            </Tile>
          </Tile>
        </Tile>
      </Tile>
    </section>
    <Footer />
  </div>
));
