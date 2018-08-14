import React from "react";
import Hero from "../../../components/Hero";
import Media from "../../../components/Media";
import { activePortfolioColor } from "../active";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withResume } from "../../../store/resume";

const MediaItem = ({ picture, name, level, description }) => (
  <Media
    notification
    left={
      picture && (
        <p className="image is-64x64">
          <img src={picture} />
        </p>
      )
    }
    content={
      <div className="content">
        <p>
          <strong>{name}</strong> <small>{level}</small>
          <br />
          {description}
        </p>
      </div>
    }
  />
);

const Skills = ({ resume: { data } }) => (
  <div id="skills">
    <Hero
      bold
      className={activePortfolioColor("skills")}
      body={
        <div className="container">
          <h1 className="title">Skills</h1>
        </div>
      }
    />
    <section className="section">
      <div className="container">
        {data &&
          []
            .concat(data.skills)
            .filter(v => v && v.name)
            .map((d, i) => <MediaItem key={i} {...d} />)}
      </div>
    </section>
  </div>
);

export default compose(
  withRouter,
  withResume
)(Skills);
