import dynamic from 'next/dynamic'

import React from "react";
import p5Types from "p5";

import { animationTypeNames } from "@utils/constant";
import { Rectangle } from './utils/Rectangle';
import { Timer } from './utils/Timer';
import { randomValueIn } from "./utils/functions";

const Sketch = dynamic(
  () => import('react-p5')
    .then((mod) => mod.default),
  { ssr: false }
);

const getNumberOfHorizontalTile = (windowWidth: number) => {
  if (windowWidth < 1024 && windowWidth > 768) return 16;
  if (windowWidth < 768) return 12;
  return 32;
};

export const P5JSCanvas = (props: any) => {
  const { theme, animationType } = props;
  const { sin, abs } = Math;

  const windowWidth = window.innerWidth;
  const WIDTH = windowWidth >= 1024 ? 1024 : windowWidth;

  const NUMBER_OF_SQUARE_HORIZONTAL = getNumberOfHorizontalTile(windowWidth);

  const HEIGHT = 512;
  const SQUARE_MAX_SIZE = WIDTH / NUMBER_OF_SQUARE_HORIZONTAL;

  const timer = new Timer();
  let listOfRectangles: Array<Rectangle> = [];

  const colors = [
    theme.primary,
    theme.secondary,
    theme.text,
  ];

  for (let y = 0; y < HEIGHT / SQUARE_MAX_SIZE; y++) {
    for (let x = 0; x < NUMBER_OF_SQUARE_HORIZONTAL; x++) {
      listOfRectangles.push(
        new Rectangle(
          x * SQUARE_MAX_SIZE,
          y * SQUARE_MAX_SIZE,
          SQUARE_MAX_SIZE,
          SQUARE_MAX_SIZE,
          randomValueIn(colors)
        ));
    };
  };

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(WIDTH, HEIGHT)
      .parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.frameRate(animationType === animationTypeNames.RANDOM_NOISE_COLORS ? 2 : 30)
    p5.background(theme.bodyBg)

    listOfRectangles.forEach((rectangle) => {

      // sin wave animation
      if (animationType === animationTypeNames.HORIZONTAL_SIN_WAVE) {
        const size = abs(sin(timer.value + (rectangle.posX / 10))) * SQUARE_MAX_SIZE;
        rectangle.setSize(size, size)

        if (rectangle.width < 5 || rectangle.height < 5) {
          rectangle.setColor(randomValueIn(colors));
        };
      };

      // sin wave animation
      if (animationType === animationTypeNames.VERTICAL_SIN_WAVE) {
        const size = abs(sin(timer.value + (rectangle.posY / 10))) * SQUARE_MAX_SIZE;
        rectangle.setSize(size, size)

        if (rectangle.width < 5 || rectangle.height < 5) {
          rectangle.setColor(randomValueIn(colors));
        };
      };

      // random noise colors animation
      if (animationType === animationTypeNames.RANDOM_NOISE_COLORS) {
        rectangle.setColor(randomValueIn(colors));
      };

    });


    listOfRectangles.forEach((rectangle) => {
      p5.fill(rectangle.color);
      p5.stroke(theme.bodyBg)

      p5.rect(
        rectangle.posX,
        rectangle.posY,
        rectangle.width,
        rectangle.height
      );
    })

    timer.increaseTimeBy(0.01);
  };

  return (
    <Sketch
      style={{ opacity: 0.5 }}
      // windowResized={(p5: p5Types) => p5.setup()}
      setup={setup}
      draw={draw}
    />
  );
};