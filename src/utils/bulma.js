import keys from "lodash/keys";
import pick from "lodash/pick";
import values from "lodash/values";

export const modifiers = props =>
  values(
    pick(
      {
        bold: "is-bold",
        primary: "is-primary",
        info: "is-info",
        success: "is-success",
        warning: "is-warning",
        danger: "is-danger",
        light: "is-light",
        dark: "is-dark",
        small: "is-small",
        medium: "is-medium",
        large: "is-large",
        active: "is-active",
        ancestor: "is-ancestor",
        vertical: "is-vertical",
        parent: "is-parent",
        child: "is-child",
        notification: "notification",
        boxed: "is-boxed",
        fullwidth: "is-fullwidth"
      },
      keys(props).filter(prop => props[prop])
    )
  );
