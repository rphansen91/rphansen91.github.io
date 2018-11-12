import React from "react";
import { Link } from "react-router-dom";
import cx from "../../utils/cx";
import s from "./index.css";

export default ({ className, children }) => (
  <footer className="footer">
    <div className="columns">
      <div className="column">
        <p className={s["footer-link-title"]}>
          <Link to="/">Home</Link>
        </p>
        <p className={s["footer-link-title"]}>
          <Link to="/blog">Blog</Link>
        </p>
        <p className={s["footer-link-title"]}>
          <Link to="/contact">Contact</Link>
        </p>
      </div>
      <div className="column">
        <p className={s["footer-link-title"]}>
          <Link to="/portfolio">Portfolio</Link>
        </p>
        <p className={s["footer-link"]}>
          <Link to="/portfolio/applications">Applications</Link>
        </p>
        <p className={s["footer-link"]}>
          <Link to="/portfolio/open-source">Open Source</Link>
        </p>
        <p className={s["footer-link"]}>
          <Link to="/portfolio/experience">Experience</Link>
        </p>
        <p className={s["footer-link"]}>
          <Link to="/portfolio/skills">Skills</Link>
        </p>
        <p className={s["footer-link"]}>
          <Link to="/portfolio/education">Education</Link>
        </p>
      </div>
      <div className="column">
        <div className="content has-text-centered">
          <p>
            <strong>Portfolio</strong> by{" "}
            <a target="_blank" href="https://github.com/rphansen91">
              Ryan P. Hansen
            </a>
            . Source code can be found{" "}
            <a
              target="_blank"
              href="https://github.com/rphansen91/rphansen91.github.io"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </footer>
);
