import React from "react";
import { compose } from "redux";
import Hero from "../../components/Hero";
import Tile from "../../components/Tile";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";
import SeoMain from "../../components/Seo/Main";
import { withRouter } from "react-router-dom";
import { withContact } from "../../store/contact";
import Form, { Button } from "react-form-controls";
import { Link } from "react-router-dom";
import cx from "../../utils/cx";
import get from "lodash/get";

const TextField = ({ label, icon, error, onChange, ...props }) => (
  <div className="field">
    {label && <label class="label">{label}</label>}
    <div
      className={cx({
        control: true,
        "has-icons-left": !!icon,
        "has-icons-right": !!error
      })}
    >
      <input
        className={cx({
          input: true,
          "is-danger": !!error
        })}
        onChange={ev => onChange(ev.target.value)}
        {...props}
      />
      {icon && (
        <span className="icon is-small is-left">
          <i
            className={cx({
              fas: true,
              [`fa-${icon}`]: true
            })}
          />
        </span>
      )}
      {error && (
        <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle" />
        </span>
      )}
    </div>
    {error && <p class="help is-danger">{error}</p>}
  </div>
);

const TextAreaField = ({ label, error, onChange, ...props }) => (
  <div className="field">
    {label && <label class="label">{label}</label>}
    <div className="control">
      <textarea
        className={cx({
          textarea: true,
          "is-danger": !!error
        })}
        onChange={ev => onChange(ev.target.value)}
        {...props}
      />
    </div>
    {error && <p class="help is-danger">{error}</p>}
  </div>
);

export default compose(
  withRouter,
  withContact
)(({ history, contact, sendContact }) => (
  <div>
    <SeoMain subtitle="Contact" />

    <Hero
      info
      bold
      body={
        <div className="container">
          <h1 className="title">Contact</h1>
          <h2 className="subtitle">
            Message me if you have an idea for a project and would like to work
            together.
          </h2>
        </div>
      }
    />

    {contact.data ? (
      <section className="section">
        <div className="container">
          <span class="icon has-text-info is-large">
            <i class="fas fa-check fa-3x" />
          </span>

          <p>
            Thank you for reaching out! I will respond as quickly as the daily
            volume allows.
          </p>

          <Link to="/">Go Home</Link>
        </div>
      </section>
    ) : (
      <section className="section">
        <div className="container">
          {contact.loading ? <Loader repeat={-1} /> : <div />}
          {get(contact, "error.message") && (
            <p class="help is-danger">{get(contact, "error.message")}</p>
          )}
          <Form onSubmit={({ from, text }) => sendContact({ from, text })}>
            <TextField
              name="from"
              error={get(contact, "error.from")}
              icon="envelope"
              placeholder="From"
            />
            <TextAreaField
              name="text"
              error={get(contact, "error.text")}
              placeholder="How can I help you?"
            />
            <Button disabled={contact.loading} className="button is-link">
              Submit
            </Button>
          </Form>
        </div>
      </section>
    )}

    <Footer />
  </div>
));
