import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withResume, withResumeBasics } from "../../store/resume";
import Media, { Alert } from "../Media";
import get from "lodash/get";
import cx from "../../utils/cx";

export const Badge = ({
  resume,
  basics: { picture, name, label, summary, profiles },
  showSummary,
  showProfiles
}) => (
  <Media
    left={
      picture && (
        <figure className="image is-64x64">
          <img className="is-rounded border-2" src={picture} />
        </figure>
      )
    }
    content={
      <div className="content">
        <h1 className="title">{name || "\u00A0"}</h1>
        <h2 className="subtitle">{label || "\u00A0"}</h2>
        {showProfiles && (
          <nav className="level is-mobile">
            <div className="level-left">
              {[]
                .concat(profiles)
                .concat({})
                .filter(p => p)
                .map((p, i) => (
                  <a
                    key={i}
                    href={p.url}
                    target="_blank"
                    className="level-item"
                  >
                    <span className="icon is-medium">
                      <i
                        className={cx({
                          ["fa-2x"]: true,
                          [p.fa]: true
                        })}
                      />
                    </span>
                  </a>
                ))}
            </div>
          </nav>
        )}
        {showSummary && <div dangerouslySetInnerHTML={{ __html: summary }} />}
      </div>
    }
  />
);

export default compose(
  withResume,
  withResumeBasics
)(Badge);
