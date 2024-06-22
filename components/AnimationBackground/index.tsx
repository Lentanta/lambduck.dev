"use client"

import React from "react";
import {
  type P5CanvasInstance,
  type Sketch
} from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

const sketch: Sketch = (p5: P5CanvasInstance) => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  p5.setup = () => p5.createCanvas(
    window.innerWidth,
    window.innerHeight,
    p5.WEBGL
  );

  p5.draw = () => {
    p5.background("transparent");
    p5.push();
    p5.translate(
      -(width / 2) + 200,
      -(height / 2) + 200,
      0
    );
    p5.rotateZ(p5.frameCount * 0.02);
    p5.rotateY(p5.frameCount * 0.02);
    p5.box(150, 150);
    p5.pop();

    p5.push();
    p5.translate(
      (width / 2) - 200,
      (height / 2) - 300,
      0
    );
    p5.rotateZ(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);
    p5.torus(50, 20);
    p5.pop();
  };
};

export const AnimationBackground = () => {
  return (
    <div className="fixed top-0 left-0 z-[-10]">
      <NextReactP5Wrapper sketch={sketch} />
    </div>
  )
};
