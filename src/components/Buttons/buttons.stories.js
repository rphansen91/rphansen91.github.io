import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./";

storiesOf("Button", module)
  .add("Colors", () => (
    <section className="section">
      <div className="container">
        <h1 className="title">Buttons</h1>
        <p className="subtitle">Colors</p>
        <div className="buttons">
          <Button primary onClick={action("Primary")}>
            Primary
          </Button>

          <Button info onClick={action("Info")}>
            Info
          </Button>

          <Button success onClick={action("Success")}>
            Success
          </Button>

          <Button warning onClick={action("Warning")}>
            Warning
          </Button>

          <Button danger onClick={action("Danger")}>
            Danger
          </Button>

          <Button light onClick={action("Light")}>
            Light
          </Button>

          <Button dark onClick={action("Dark")}>
            Dark
          </Button>
        </div>
      </div>
    </section>
  ))
  .add("Sizes", () => (
    <section className="section">
      <div className="container">
        <h1 className="title">Buttons</h1>
        <p className="subtitle">Sizes</p>
        <div className="buttons">
          <Button small onClick={action("Small")}>
            Small
          </Button>

          <Button onClick={action("Regular")}>Regular</Button>

          <Button medium onClick={action("Medium")}>
            Medium
          </Button>

          <Button large onClick={action("Large")}>
            Large
          </Button>
        </div>
      </div>
    </section>
  ));
