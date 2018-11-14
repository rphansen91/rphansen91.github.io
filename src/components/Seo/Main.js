import React from "react";
import { compose } from "redux";
import Seo from "../../components/Seo";
import { withResume, withResumeBasics } from "../../store/resume";

const default_title = `RPH Portfolio`;

export default compose(
  withResume,
  withResumeBasics
)(({ basics: { picture, name, label, summary }, subtitle, ...props }) => (
  <Seo
    title={subtitle ? `${default_title} - ${subtitle}` : default_title}
    description={summary}
    image={picture}
    {...props}
  />
));
