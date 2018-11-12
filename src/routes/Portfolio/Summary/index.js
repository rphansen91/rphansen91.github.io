import React from "react";
import { compose } from "redux";
import { withResume, withResumeBasics } from "../../../store/resume";
import { Alert } from "../../../components/Media";
import Loader from "../../../components/Loader";

const Summary = ({
  resume: { loading, error },
  basics: { summary },
  removeResumeFailure
}) => {
  return (
    <section className="section">
      <div className="container">
        {loading ? (
          <Loader repeat={-1} />
        ) : error ? (
          <Alert content={error} repeat={true} onClose={removeResumeFailure} />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: summary }} />
        )}
      </div>
    </section>
  );
};

export default compose(
  withResume,
  withResumeBasics
)(Summary);
