"use client"

import React, { useEffect, useState } from "react";
import { type P5CanvasInstance } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

const sketch = (
  p5: P5CanvasInstance,
  screenSize: { width: number, height: number }
) => {
  const width = screenSize.width;
  const height = screenSize.height;

  p5.setup = () => p5.createCanvas(
    screenSize.width,
    screenSize.height,
    p5.WEBGL
  );

  p5.draw = () => {
    p5.background("transparent");
    p5.textSize(32);
    p5.fill(255);
    p5.stroke(1);
    p5.strokeWeight(3);
    p5.text("HELLO", 10, 10);

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

    if (width >= 452) {
      p5.push();
      p5.translate(
        (width / 2) - 200,
        (height / 2) - 300,
        0
      );
      p5.rotateZ(p5.frameCount * 0.01);
      p5.rotateX(p5.frameCount * 0.01);
      p5.rotateY(p5.frameCount * 0.01);
      p5.torus(60, 30);
      p5.pop();
    }
  };
};

export const AnimationBackground = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const update = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener("resize", update)
    update();
    return () => window.removeEventListener("resize", update);
  }, [])

  return (
    <div className="fixed top-0 left-0 z-[-10]">
      <NextReactP5Wrapper sketch={(p5) => sketch(p5, screenSize)} />
    </div>
  )
};
