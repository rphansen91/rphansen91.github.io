import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Tile from "./";

storiesOf("Tile", module)
  .add("with text", () => <Tile primary />)
  .add("with some emoji", () => (
    <Tile ancestor>
      <Tile vertical className="is-8">
        <Tile>
          <Tile parent vertical>
            <Tile child notification primary>
              <p className="title">Vertical...</p>
              <p className="subtitle">Top tile</p>
            </Tile>
            <Tile child notification warning>
              <p className="title">...tiles</p>
              <p className="subtitle">Bottom tile</p>
            </Tile>
          </Tile>
          <Tile parent>
            <Tile child notification info>
              <p className="title">Middle tile</p>
              <p className="subtitle">With an image</p>
              <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png" />
              </figure>
            </Tile>
          </Tile>
        </Tile>
        <Tile parent>
          <Tile child notification danger>
            <p className="title">Wide tile</p>
            <p className="subtitle">Aligned with the right tile</p>
            <div className="content" />
          </Tile>
        </Tile>
      </Tile>
      <Tile parent>
        <Tile child notification success>
          <div className="content">
            <p className="title">Tall tile</p>
            <p className="subtitle">With even more content</p>
            <div className="content" />
          </div>
        </Tile>
      </Tile>
    </Tile>
  ));
