'use client';

import p5Types from "p5";

import { Color } from './utils/Color';
import { randomValueIn } from "./utils/functions";
import Sketch from "react-p5";

export const ColorDotAnimation = () => {
  const CANVAS_WIDTH = 320;
  const CANVAS_HEIGHT = 320;

  const NUMBER_OF_CIRCLE_HORIZONTAL = 15;
  const CIRCLE_RADIUS = CANVAS_WIDTH / NUMBER_OF_CIRCLE_HORIZONTAL;
  const MARGIN_SPACE = 2;
  const PREFIX_POSITION = CIRCLE_RADIUS / 2;

  const colors: Color[] = [
    new Color("#EDF4F5"),
    new Color("#FFF4EE")
  ];

  let circles: any[] = [];
  for (let y = 0; y < NUMBER_OF_CIRCLE_HORIZONTAL; y++) {
    for (let x = 0; x < NUMBER_OF_CIRCLE_HORIZONTAL; x++) {
      circles.push({
        x: (x * (CIRCLE_RADIUS - MARGIN_SPACE) + (x * MARGIN_SPACE)) + PREFIX_POSITION,
        y: (y * (CIRCLE_RADIUS - MARGIN_SPACE) + (y * MARGIN_SPACE)) + PREFIX_POSITION,
        radius: (CIRCLE_RADIUS - MARGIN_SPACE),
        color: randomValueIn(colors)
      });
    };
  };

  const backgroundColor = new Color("#EDF4F5");
  const circleStrokeColor = new Color("#5F5356");

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent(canvasParentRef);
    p5.background(backgroundColor.r, backgroundColor.g, backgroundColor.b);
  };

  const draw = (p5: p5Types) => {
    p5.frameRate(60);
    p5.background(backgroundColor.r, backgroundColor.g, backgroundColor.b);

    const frameCount = p5.frameCount / 80;

    circles.forEach((circle) => {
      p5.circle(
        circle.x,
        circle.y,
        circle.radius * p5.sin(frameCount - (circle.x / 100) + (circle.y / 100))
      );
      p5.fill(
        circle.color.r,
        circle.color.g,
        circle.color.b
      );
      p5.stroke(
        circleStrokeColor.r,
        circleStrokeColor.g,
        circleStrokeColor.b,
        80
      );
    });
  };

  return <Sketch setup={setup} draw={draw} />
};