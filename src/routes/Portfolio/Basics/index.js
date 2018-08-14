import React from "react";
import Loader from "../../../components/Loader";
import Media, { Alert } from "../../../components/Media";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withResume } from "../../../store/resume";
import get from "lodash/get";

const Basics = ({ resume: { loading, error, data }, removeResumeError }) => {
  return (
    <section className="section">
      <div className="container">
        {loading && <Loader />}
        {error && <Alert content={error} onClose={removeResumeError} />}
        <h1 className="title">{get(data, "basics.name")}</h1>
        <h2 className="subtitle">{get(data, "basics.label")}</h2>
        <p>{get(data, "basics.summary")}</p>
      </div>
    </section>
  );
};

export default compose(
  withRouter,
  withResume
)(Basics);
