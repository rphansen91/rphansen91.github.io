import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withResume, withResumeBasics } from "../../store/resume";
import Media, { Alert } from "../Media";
import Loader from "../../components/Loader";
import get from "lodash/get";
import cx from "../../utils/cx";

export const Badge = ({
  resume,
  picture,
  name,
  label,
  summary,
  profiles,
  removeResumeError,
  showSummary,
  showProfiles
}) =>
  resume.loading ? (
    <Media
      content={<Loader repeat={-1} />}
      right={<figure className="image is-128x128" />}
    />
  ) : resume.error ? (
    <Alert content={resume.error} onClose={removeResumeError} />
  ) : (
    <Media
      left={
        <figure className="image is-128x128">
          <img className="is-rounded" src={picture} />
        </figure>
      }
      content={
        <div className="content">
          <h1 className="title">{name}</h1>
          <h2 className="subtitle">{label}</h2>
          {showProfiles && (
            <nav className="level is-mobile">
              <div className="level-left">
                {[]
                  .concat(profiles)
                  .filter(p => p && p.fa)
                  .map((p, i) => (
                    <a href={p.url} target="_blank" className="level-item">
                      <span className="icon is-medium">
                        <i
                          className={cx({
                            fas: true,
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
          {showSummary && <p>{summary}</p>}
        </div>
      }
    />
  );

export default compose(
  withResume,
  withResumeBasics
)(Badge);
