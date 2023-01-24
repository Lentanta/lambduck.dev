import dynamic from 'next/dynamic'

import React, { useEffect } from "react";
import p5Types from "p5";

const Sketch = dynamic(
  () => import('react-p5')
    .then((mod) => mod.default),
  { ssr: false }
);

export const P5JSCanvas = (props: any) => {
  const { width, theme } = props;
  if (!width) return (<div />);

  const windowWidth = props.width;
  const WIDTH = windowWidth >= 1024 ? 1024 : windowWidth;

  const NUMBER_OF_SQUARE_HORIZONTAL = windowWidth > 768 ? 32 : 16;

  const HEIGHT = 512;
  const SQUARE_MAX_SIZE = WIDTH / NUMBER_OF_SQUARE_HORIZONTAL;

  //See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(WIDTH, HEIGHT).parent(canvasParentRef);
  };

  const getColor = (number: number) => {
    switch (number) {
      case 1:
        return theme.success;
      case 2:
        return theme.error;
      default:
        return theme.text;
    }
  }

  const draw = (p5: p5Types) => {
    p5.frameRate(2)
    for (let i = 0; i < HEIGHT / SQUARE_MAX_SIZE; i++) {
      for (let j = 0; j < NUMBER_OF_SQUARE_HORIZONTAL; j++) {
        const rdn = p5.round(p5.random(0, 2));
        p5.fill(getColor(rdn));
        p5.rect(
          (j * SQUARE_MAX_SIZE),
          (i * SQUARE_MAX_SIZE),
          SQUARE_MAX_SIZE,
          SQUARE_MAX_SIZE
          // p5.abs(p5.sin(time)) * rectMaxWidth,
          // p5.abs(p5.sin(time)) * rectMaxHeight
        );
      }
    };
  };

  return (
    <Sketch
      style={{ opacity: 0.5 }}
      setup={setup}
      draw={draw}
    />
  );
};