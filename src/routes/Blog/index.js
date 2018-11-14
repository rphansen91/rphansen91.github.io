import React from "react";
import { compose } from "redux";
import Hero from "../../components/Hero";
import Tile from "../../components/Tile";
import Footer from "../../components/Footer";
import SeoMain from "../../components/Seo/Main";
import Card from "../../components/Card";
import { withRouter } from "react-router-dom";
import { withResumeBasics } from "../../store/resume";
import { withPosts } from "../../store/blog";
import get from "lodash/get";

const Post = ({ title, link }) => (
  <a className="card" href={link}>
    {title}
  </a>
);

export default compose(
  withRouter,
  withPosts,
  withResumeBasics
)(({ history, posts }) => {
  const user = get(posts, "data.payload.user") || {};
  const username = get(posts, "data.payload.user.username") || "";
  const items = get(posts, "data.payload.references.Post") || {};
  return (
    <div>
      <SeoMain subtitle="Blog" />

      <Hero
        bold
        danger
        body={
          <div className="container">
            <h1 className="title">Blog</h1>
            <h2 className="subtitle" />
          </div>
        }
      />

      <section className="section">
        <div className="columns is-multiline">
          {Object.keys(items)
            .map(id => items[id])
            .map((post, i) => {
              const imageId = get(post, "virtuals.previewImage.imageId");
              return (
                <div
                  className="column is-half-tablet is-one-third-desktop"
                  key={i}
                >
                  <Card
                    title={post.title}
                    subtitle={user.name}
                    image={
                      imageId &&
                      `https://cdn-images-1.medium.com/max/1600/${imageId}`
                    }
                    footer={
                      <footer className="card-footer">
                        <p className="card-footer-item">
                          <span>
                            View on{" "}
                            <a
                              href={`https://medium.com/@${username}/${
                                post.uniqueSlug
                              }`}
                              target="_blank"
                            >
                              Medium
                            </a>
                          </span>
                        </p>
                      </footer>
                    }
                  />
                </div>
              );
            })}
        </div>
      </section>

      <Footer />
    </div>
  );
});
