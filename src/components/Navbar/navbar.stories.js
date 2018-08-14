import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Navbar } from "./";

storiesOf("Navbar", module)
  .add("with text", () => <Navbar onClick={action("clicked")} />)
  .add("with some emoji", () => (
    <Navbar onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Navbar>
  ));
