import React, { Component } from "react";
import { withRouter, Route, Switch, Redirect, NavLink } from "react-router-dom";
import Home from "./routes/Home";
import Blog from "./routes/Blog";
import Portfolio from "./routes/Portfolio";
import Brand from "./components/Brand";
import Dropdown, { Trigger, Menu } from "./components/Dropdown";
import Navbar from "./components/Navbar";
import Contact from "./routes/Contact";
import About from "./routes/About";

const BrandIcon = withRouter(({ history }) => (
  <Brand title="Portfolio" onClick={() => history.push("/")} />
));

export default () => (
  <div>
    <div className="navbar" />
    <Navbar
      brand={<BrandIcon />}
      end={[
        <NavLink to="/" key="/" className="navbar-item">
          Home
        </NavLink>,
        <div key="/portfolio" className="navbar-item has-dropdown is-hoverable">
          <NavLink className="navbar-link" to="/portfolio">
            Portfolio
          </NavLink>
          <div className="navbar-dropdown is-boxed">
            <NavLink to="/portfolio/applications" className="navbar-item">
              Applications
            </NavLink>
            <NavLink to="/portfolio/open-source" className="navbar-item">
              Open Source
            </NavLink>
            <NavLink to="/portfolio/experience" className="navbar-item">
              Experience
            </NavLink>
            <NavLink to="/portfolio/skills" className="navbar-item">
              Skills
            </NavLink>
            <NavLink to="/portfolio/education" className="navbar-item">
              Education
            </NavLink>
          </div>
        </div>,
        <NavLink to="/blog" key="/blog" className="navbar-item">
          Blog
        </NavLink>,
        <NavLink to="/about" key="/about" className="navbar-item">
          About
        </NavLink>,
        <NavLink to="/contact" key="/contact" className="navbar-item">
          Contact
        </NavLink>
      ]}
    />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
  </div>
);
