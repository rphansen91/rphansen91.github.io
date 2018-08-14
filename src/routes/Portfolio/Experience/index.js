import React from "react";
import Hero from "../../../components/Hero";
import Loader from "../../../components/Loader";
import Media, { Alert } from "../../../components/Media";
import { activePortfolioColor } from "../active";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withResume } from "../../../store/resume";

const MediaItem = ({
  picture,
  company,
  position,
  startDate,
  endDate,
  summary
}) => (
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
          <strong>{company}</strong> <small>{position}</small> <br />
          <small>
            {startDate} - {endDate}
          </small>
          <br />
          {summary}
        </p>
      </div>
    }
  />
);

const Experience = ({ resume: { data } }) => (
  <div id="experience">
    <Hero
      bold
      className={activePortfolioColor("experience")}
      body={
        <div className="container">
          <h1 className="title">Experience</h1>
        </div>
      }
    />
    <section className="section">
      <div className="container">
        {data &&
          [].concat(data.work).map((d, i) => <MediaItem key={i} {...d} />)}
      </div>
    </section>
  </div>
);

export default compose(
  withRouter,
  withResume
)(Experience);
