import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Footer from "./";

storiesOf("Footer", module)
  .add("with text", () => <Footer onClick={action("clicked")} />)
  .add("with some emoji", () => (
    <Footer onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Footer>
  ));
