import React, { Component } from "react";
// import { TweenMax } from "gsap/TweenMax";

export const ProgressBar = ({ value }) => (
  <progress className="progress" value={value + ""} max="100" />
);

export default class ProgressBarLoader extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.timer = props.timer || 1000;
    this.repeat = props.repeat || false;
  }

  startLoader() {
    const from = { x: 0 };
    this.loader = new this.TweenMax(from, this.timer / 1000, {
      x: 100,
      repeat: this.repeat,
      onUpdate: () => this.setValue(from.x)
    });
  }

  componentDidMount() {
    require.ensure(["gsap/TweenMax"], () => {
      this.TweenMax = require("gsap/TweenMax").TweenMax;
      this.startLoader();
    });
  }

  componentWillUnmount() {
    this.loader && this.loader.kill();
  }

  setValue(value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return <ProgressBar value={value} />;
  }
}
