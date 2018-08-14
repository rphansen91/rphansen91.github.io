import React from "react";
import { withResume } from "../../store/resume";
import get from "lodash/get";
import cx from "../../utils/cx";

export default withResume(({ resume, onClick = v => v }) => (
  <a className="navbar-item" onClick={onClick}>
    {/* <img
      src="https://dcnetworks.ie/wp/wp-content/uploads/2017/11/placeholder-logo-2.png"
      alt={resume.basics.name}
    /> */}
    <h1 className="title">{get(resume, "data.basics.name")}</h1>
  </a>
));
