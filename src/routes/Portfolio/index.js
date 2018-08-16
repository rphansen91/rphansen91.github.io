import React, { Component } from "react";
import { Switch, Route, NavLink, withRouter } from "react-router-dom";
import { compose } from "redux";
import Tabs, { TabLink } from "../../components/Tabs";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Badge from "../../components/Badge";
import Applications from "./Applications";
import OpenSource from "./OpenSource";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import { withResumeBasics } from "../../store/resume";
import cx from "../../utils/cx";

class Portfolio extends Component {
  element;

  scrollToElement() {
    const {
      location: { pathname = "" }
    } = this.props;
    const id = pathname.replace("/portfolio/", "");
    const element = document.getElementById(id);
    if (element && this.element !== element) {
      element.scrollIntoView({ behavior: "smooth" });
      this.element = element;
    }
  }
  componentDidMount() {
    this.scrollToElement();
  }
  componentDidUpdate() {
    this.scrollToElement();
  }
  render() {
    const {
      history: { push },
      location: { pathname },
      basics: { summary }
    } = this.props;
    return (
      <div>
        <Hero
          bold
          dark={true}
          body={<Badge />}
          foot={
            <Tabs boxed fullwidth>
              <div className="container">
                <ul>
                  <TabLink
                    exact
                    to="/portfolio/applications"
                    activeClassName="is-active"
                  >
                    <a>Applications</a>
                  </TabLink>
                  <TabLink
                    exact
                    to="/portfolio/open-source"
                    activeClassName="is-active"
                  >
                    <a>Open Source</a>
                  </TabLink>
                  <TabLink
                    exact
                    to="/portfolio/experience"
                    activeClassName="is-active"
                  >
                    <a>Experience</a>
                  </TabLink>
                  <TabLink
                    exact
                    to="/portfolio/skills"
                    activeClassName="is-active"
                  >
                    <a>Skills</a>
                  </TabLink>
                  <TabLink
                    exact
                    to="/portfolio/education"
                    activeClassName="is-active"
                  >
                    <a>Education</a>
                  </TabLink>
                </ul>
              </div>
            </Tabs>
          }
        />

        {/* <section className="section">
          <div className="container">
            <Badge showSummary />
          </div>
        </section> */}

        <Switch>
          <Route
            path="/portfolio"
            component={() => (
              <div>
                <section className="section">
                  <div className="container">
                    <p>{summary}</p>
                  </div>
                </section>
                <Applications />
                <OpenSource />
                <Experience />
                <Skills />
                <Education />
              </div>
            )}
          />
          {/* <Route
            exact
            path="/portfolio/applications"
            component={Applications}
          />
          <Route exact path="/portfolio/open-source" component={OpenSource} />
          <Route exact path="/portfolio/experience" component={Experience} />
          <Route exact path="/portfolio/skills" component={Skills} />
          <Route exact path="/portfolio/education" component={Education} /> */}
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default compose(
  withRouter,
  withResumeBasics
)(Portfolio);
