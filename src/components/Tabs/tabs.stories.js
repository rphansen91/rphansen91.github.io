import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Tabs from "./";

storiesOf("Tabs", module).add("with text", () => <Tabs primary />);
