import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Hero from "./";

const Body = ({ title, subtitle }) => (
  <div className="container">
    <div className="title">{title}</div>
    <div className="subtitle">{subtitle}</div>
  </div>
);

storiesOf("Hero", module)
  .add("primary", () => <Hero primary body={<Body title="Primary" />} />)
  .add("info", () => <Hero info body={<Body title="Info" />} />)
  .add("success", () => <Hero success body={<Body title="Success" />} />)
  .add("warning", () => <Hero warning body={<Body title="Warning" />} />)
  .add("danger", () => <Hero danger body={<Body title="Danger" />} />)
  .add("light", () => <Hero light body={<Body title="Light" />} />)
  .add("dark", () => <Hero dark body={<Body title="Dark" />} />)
  .add("primary gradient", () => (
    <Hero primary bold body={<Body title="Primary" />} />
  ))
  .add("info gradient", () => <Hero info bold body={<Body title="Info" />} />)
  .add("success gradient", () => (
    <Hero success bold body={<Body title="Success" />} />
  ))
  .add("warning gradient", () => (
    <Hero warning bold body={<Body title="Warning" />} />
  ))
  .add("danger gradient", () => (
    <Hero danger bold body={<Body title="Danger" />} />
  ))
  .add("light gradient", () => (
    <Hero light bold body={<Body title="Light" />} />
  ))
  .add("dark gradient", () => <Hero dark bold body={<Body title="Dark" />} />);
