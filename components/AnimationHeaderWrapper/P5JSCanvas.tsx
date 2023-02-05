import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";

import p5Types from "p5";

import { Rectangle } from './utils/Rectangle';
import { Position } from './utils/Position';
import { Color } from './utils/Color';
import { Dimension } from './utils/Dimension';

import { randomValueIn } from "./utils/functions";

const Sketch = dynamic(
  () => import('react-p5')
    .then((mod) => mod.default),
  { ssr: false }
);

const DESKTOP_MAX_WIDTH = 1024;
const TABLET_MAX_WIDTH = 768;
const CANVAS_HEIGHT = 512;

const getNumberOfHorizontalTile = (windowWidth: number) => {
  if (windowWidth < DESKTOP_MAX_WIDTH
    && windowWidth > TABLET_MAX_WIDTH) return 32;

  if (windowWidth < TABLET_MAX_WIDTH) return 12;

  return 32;
};


export const P5JSCanvas = (props: any) => {
  const { theme, animationType } = props;
  const [windowWidth, setWindowWidth] = useState<number>(DESKTOP_MAX_WIDTH);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => { });
    };
  }, [])

  const CANVAS_WIDTH = windowWidth >= DESKTOP_MAX_WIDTH
    ? DESKTOP_MAX_WIDTH
    : windowWidth;

  const NUMBER_OF_SQUARE_HORIZONTAL = getNumberOfHorizontalTile(windowWidth);
  const RECTANGLE_MAX_WIDTH = CANVAS_WIDTH / NUMBER_OF_SQUARE_HORIZONTAL;
  const RECTANGLE_MAX_HEIGHT = CANVAS_WIDTH / NUMBER_OF_SQUARE_HORIZONTAL;

  const colors = [
    theme.primary,
    theme.secondary,
    theme.text,
  ];

  let rectangles: Array<Rectangle> = [];
  for (let y = 0; y < CANVAS_HEIGHT / RECTANGLE_MAX_HEIGHT; y++) {
    for (let x = 0; x < NUMBER_OF_SQUARE_HORIZONTAL; x++) {
      const randomColor = randomValueIn(colors);
      rectangles.push(
        new Rectangle(
          new Position(
            x * RECTANGLE_MAX_WIDTH,
            y * RECTANGLE_MAX_HEIGHT),
          new Dimension(
            RECTANGLE_MAX_WIDTH,
            RECTANGLE_MAX_HEIGHT),
          new Color(randomColor),
          new Color(theme.bodyBg)
        ));
    };
  };

  const drawDebugText = (p5: p5Types) => (text: any) => {
    p5.fill("white");
    p5.textSize(50);
    p5.text(text, 0, 35);
  };

  const backgroundColor = new Color(theme.bodyBg);

  const { sin, abs } = Math;
  const drawBackground = (p5: p5Types) => (backgroundColor: Color, alpha: number) => {
    p5.background(backgroundColor.r, backgroundColor.g, backgroundColor.b, alpha);
  };

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    drawBackground(p5)(backgroundColor, 100);
    p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
      .parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    const frameCount = p5.frameCount / 100;
    drawBackground(p5)(backgroundColor, 100);

    rectangles.forEach((rectangle, index) => {
      switch (animationType) {
        // Squares
        case 0: {
          p5.frameRate(60)
          const newSize = sin(
            frameCount
            - (index / 10)
            * (windowWidth < TABLET_MAX_WIDTH ? 3 : 1)
          ) * RECTANGLE_MAX_WIDTH;

          const absSizeValue = abs(newSize);
          rectangle.setSize(absSizeValue, absSizeValue)

          if (rectangle.dimension.width < 1 || rectangle.dimension.height < 1) {
            const randomColor = randomValueIn(colors);
            rectangle.setColor(new Color(randomColor));
          };

          p5.fill(
            rectangle.color.r,
            rectangle.color.g,
            rectangle.color.b,
            50
          );

          const strokerColor = p5.color(
            rectangle.color.r,
            rectangle.color.g,
            rectangle.color.b,
            80
          )
          p5.stroke(strokerColor)

          p5.rect(
            rectangle.position.x + (RECTANGLE_MAX_WIDTH - rectangle.dimension.width) / 2,
            rectangle.position.y,
            rectangle.dimension.width,
            rectangle.dimension.height
          );
          break;
        };

        // Circles
        case 1: {
          // p5.frameRate(60)
          const newSize = sin(
            frameCount
            - (index / 10)
            * (windowWidth < TABLET_MAX_WIDTH ? 3 : 1)
          ) * RECTANGLE_MAX_WIDTH;

          const absSizeValue = abs(newSize);
          rectangle.setSize(absSizeValue, absSizeValue)

          if (rectangle.dimension.width < 1 || rectangle.dimension.height < 1) {
            const randomColor = randomValueIn(colors);
            rectangle.setColor(new Color(randomColor));
          };

          p5.fill(
            rectangle.color.r,
            rectangle.color.g,
            rectangle.color.b,
            50
          );

          const strokerColor = p5.color(
            rectangle.color.r,
            rectangle.color.g,
            rectangle.color.b,
            80
          )
          p5.stroke(strokerColor)
          const posPreFix = RECTANGLE_MAX_WIDTH / 2;
          p5.circle(
            rectangle.position.x + posPreFix,
            rectangle.position.y + posPreFix,
            rectangle.dimension.height
          );
          break;
        };

        default: {
          p5.fill(
            rectangle.color.r,
            rectangle.color.g,
            rectangle.color.b,
            80
          );
          p5.stroke(rectangle.strokeColor.hex)

          p5.rect(
            rectangle.position.x + (RECTANGLE_MAX_WIDTH - rectangle.dimension.width) / 2,
            rectangle.position.y,
            rectangle.dimension.width,
            rectangle.dimension.height
          );
        }
      }
    });
  };

  return (
    <Sketch
      setup={setup}
      draw={draw}
    />
  );
};