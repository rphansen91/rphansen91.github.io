import React from "react";
import { withResumeBasics } from "../../store/resume";

export default withResumeBasics(({ title, image, onClick = v => v }) => (
  <a className="navbar-item" onClick={onClick}>
    {image && <img src={image} alt={title} />}
    {title && <h1 className="title">{title}</h1>}
  </a>
));
