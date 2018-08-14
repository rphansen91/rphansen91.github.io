import React, { Component } from "react";
import { Switch, Route, NavLink, withRouter } from "react-router-dom";
import Tabs, { TabLink } from "../../components/Tabs";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Basics from "./Basics";
import Applications from "./Applications";
import OpenSource from "./OpenSource";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import { activePortfolioColor, activePortfolioName } from "./active";
import cx from "../../utils/cx";

class Portfolio extends Component {
  element;

  scrollToElement() {
    const {
      location: { pathname }
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
      location: { pathname }
    } = this.props;
    return (
      <div>
        <Hero
          bold
          dark={true}
          // className={activePortfolioColor(pathname)}
          body={
            <div className="container">
              <h1 className="title">Portfolio</h1>
              {/* <h2 className="subtitle">{activePortfolioName(pathname)}</h2> */}
            </div>
          }
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

        <Basics />
        <Applications />
        <OpenSource />
        <Experience />
        <Skills />
        <Education />
        <Footer />
      </div>
    );
  }
}

export default withRouter(Portfolio);
