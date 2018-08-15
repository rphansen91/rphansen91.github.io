import React, { Component } from "react";
import { TweenMax } from "gsap/TweenMax";

export const ProgressBar = ({ value }) => (
  <progress className="progress" value={value + ""} max="100" />
);

export default class ProgressBarLoader extends Component {
  state = {
    value: 0
  };

  constructor(props) {
    super(props);
    this.timer = props.timer || 1000;
    this.repeat = props.repeat || false;
  }

  componentDidMount() {
    const from = { x: 0 };
    this.loader = new TweenMax(from, this.timer / 1000, {
      x: 100,
      repeat: this.repeat,
      onUpdate: () => this.setValue(from.x)
    });
  }

  setValue(value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return <ProgressBar value={value} />;
  }
}
