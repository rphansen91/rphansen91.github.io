import React, { Component } from "react";
import { TweenLite, Power2 } from "gsap/TweenLite";
import { TimelineLite } from "gsap/TimelineLite";

function animatePath(begin, end, timer) {
  const element = this;
  const from = { x: begin };
  return new TweenLite(from, timer, {
    x: end,
    onUpdate: () => (element.style["stroke-dashoffset"] = from.x)
  });
}

export default class Draw extends Component {
  constructor(props) {
    super(props);
    this.timer = props.timer || 1000;
  }

  getPathLengths(element) {
    if (element && !this.paths) {
      this.paths = [].concat(...element.querySelectorAll("path"));
      this.paths.forEach(element => {
        const length = Math.floor(element.getTotalLength() || 0);
        element.length = length;
        element.style["stroke-dashoffset"] = length;
        element.style["stroke-dasharray"] = length;
        element.animate = animatePath.bind(element);
      });
      this.totalLength = this.paths.reduce((acc, c) => acc + c.length, 0);
      this.groups = this.paths.reduce((acc, c) => {
        if (!acc[c.length]) acc[c.length] = [];
        acc[c.length].push(c);
        return acc;
      }, {});
    }
  }

  animationTimeline(fn = v => v) {
    const timeline = new TimelineLite();

    this.paths.forEach(element => {
      timeline.add(element.animate(element.length, element.length, 0));
    });

    const groups = Object.keys(this.groups || {})
      .sort((a, b) => a - b)
      .reduce((tl, group) => {
        this.groups[group].map((element, i) => {
          const timer = this.timer * (element.length / this.totalLength);
          tl.add(
            element.animate(element.length, 0, timer / 1000),
            group + "_" + i
          );
        });
        return tl;
      }, new TimelineLite());

    timeline.add(groups);
    return timeline;
  }

  animate() {
    if (!this.timeline) this.timeline = this.animationTimeline();
    else this.timeline.restart();
  }

  render() {
    return <div />;
  }
}
