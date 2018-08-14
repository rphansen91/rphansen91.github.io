import React from "react";
import Hero from "../../../components/Hero";
import Media from "../../../components/Media";
import { activePortfolioColor } from "../active";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withResume } from "../../../store/resume";

const MediaItem = ({
  picture,
  institution,
  area,
  startDate,
  endDate,
  description
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
          <strong>{institution}</strong> <small>{area}</small>
          <br />
          <small>
            {startDate} - {endDate}
          </small>
          <br />
          {description}
        </p>
      </div>
    }
  />
);

const Education = ({ resume: { data } }) => (
  <div id="education">
    <Hero
      bold
      className={activePortfolioColor("education")}
      body={
        <div className="container">
          <h1 className="title">Education</h1>
        </div>
      }
    />
    <section className="section">
      <div className="container">
        {data &&
          []
            .concat(data.education)
            .filter(v => v && v.institution)
            .map((d, i) => <MediaItem key={i} {...d} />)}
      </div>
    </section>
  </div>
);

export default compose(
  withRouter,
  withResume
)(Education);
