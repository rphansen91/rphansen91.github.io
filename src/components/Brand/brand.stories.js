import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Brand from "./";

storiesOf("Brand", module)
  .add("with text", () => <Brand onClick={action("clicked")} />)
  .add("with some emoji", () => (
    <Brand onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Brand>
  ));
