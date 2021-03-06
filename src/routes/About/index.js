import React from "react";
import Hero from "../../components/Hero";
import Tile from "../../components/Tile";
import Footer from "../../components/Footer";
import { withRouter } from "react-router-dom";

export default withRouter(({ history }) => (
  <div>
    <Hero
      bold
      warning
      body={
        <div className="container">
          <h1 className="title">About</h1>
          <h2 className="subtitle" />
        </div>
      }
    />

    <section className="section" />

    <Footer />
  </div>
));
