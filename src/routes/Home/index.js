import React from "react";
import { compose } from "redux";
import Hero from "../../components/Hero";
import Tile from "../../components/Tile";
import Badge from "../../components/Badge";
import Footer from "../../components/Footer";
import Beach from "../../components/Draw/Beach";
import Tiger from "../../components/Draw/Tiger";
import Gears from "../../components/Draw/Gears";
import Pocketwatch from "../../components/Draw/Pocketwatch";
import { withResume } from "../../store/resume";
import { withRouter } from "react-router-dom";
import { activePortfolioColor } from "../Portfolio/active";
import get from "lodash/get";
import cx from "../../utils/cx";
import s from "./index.css";

export default compose(
  withRouter,
  withResume
)(({ resume, history }) => (
  <div>
    <Hero
      className="relative"
      dark
      bold
      medium
      body={
        <div>
          <Beach className={s.beach} timer={2000} />
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
      <Tile ancestor>
        <Tile vertical className="is-8">
          <Tile>
            <Tile parent vertical>
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
                {/* <Gears className={s.gears} /> */}
              </Tile>
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
                <Gears className={s.gears} />
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
                <Tiger className={s.tiger} timer={6000} />
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
            {/* <Pocketwatch className={s.pocketwatch} /> */}
          </Tile>
        </Tile>
      </Tile>
    </section>

    <Footer />
  </div>
));
