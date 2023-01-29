import dynamic from 'next/dynamic'

import React from "react";
import p5Types from "p5";

import { animationTypeNames } from "@utils/constant";
import { Rectangle } from './utils/Rectangle';
import { randomValueIn } from "./utils/functions";
import { hexOpacity } from "@utils/hexOpacity"

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
          hexOpacity(randomValueIn(colors), 30),
          theme.bodyBg
        ));
    };
  };

  const drawDebugText = (p5: p5Types, text: any) => {
    p5.fill("white");
    p5.textSize(50);
    p5.text(text, 0, 35);
  }

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(WIDTH, HEIGHT)
      .parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    const frameCount = p5.frameCount / 100;
    p5.background(hexOpacity(theme.bodyBg, 30))

    listOfRectangles.forEach((rectangle, index) => {
      // sin wave animation
      if (animationType === animationTypeNames.HORIZONTAL_SIN_WAVE) {
        p5.frameRate(60)
        const size = abs(sin(
          frameCount
          - (index / 10) * (windowWidth < 768 ? 3 : 1)
        )) * SQUARE_MAX_SIZE;

        rectangle.setSize(size, size);

        if (rectangle.width < 5 || rectangle.height < 5) {
          const randomColor = randomValueIn(colors);
          rectangle.setColor(hexOpacity(randomColor, 30));
        };
        rectangle.drawRectangle(p5)
      };

      // vertical sin wave animation
      if (animationType === animationTypeNames.VERTICAL_SIN_WAVE) {
        p5.frameRate(30)
        const size = abs(
          sin(
            frameCount
            + (rectangle.posY / 10)
          )) * SQUARE_MAX_SIZE;

        rectangle.setSize(size, size);

        if (rectangle.width < 2 || rectangle.height < 2) {
          const randomColor = randomValueIn(colors);
          rectangle.setColor(hexOpacity(randomColor, 30));
        };

        rectangle.drawRectangle(p5);
      };

      // random noise colors animation
      if (animationType === animationTypeNames.RANDOM_NOISE_COLORS) {
        p5.frameRate(30)
        rectangle.setColor(hexOpacity(rectangle.color, 30));
        rectangle.drawRectangle(p5);
      };

      // drawDebugText(p5, abs(Math.round(sin(frameCount) * 100)))
      // drawDebugText(p5, hexOpacity(theme.text, 0))
    });
  };

  return (
    <Sketch
      setup={setup}
      draw={draw}
    />
  );
};