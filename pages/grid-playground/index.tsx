import type { NextPage } from "next";
import dynamic from 'next/dynamic';
import React ,{ useState } from "react";
import p5Types from "p5";

import { PageWrapper } from "@layouts/PageWrapper";
import { SectionWrapper } from "@layouts/SectionWrapper";
import { Typography } from "@components/Styled/Typography";

import { useThemeStore } from "@store/themeStore"

const Sketch = dynamic(
  () => import('react-p5')
    .then((mod) => mod.default),
  { ssr: false }
);

const drawDebugText = (p5: p5Types) => (text: any) => {
  p5.fill("white");
  p5.textSize(18);
  p5.text("Frame rate: " + text, 16, 32);
}

const GridPlayground: NextPage = () => {
  const [squareSize, setSquareSize] = useState(32);
  const [dividedNumber, setDividedNumber] = useState(10);

  const theme = useThemeStore(
    (state) => state.theme)

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(1024, 512)
      .parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    const frameCount = p5.frameCount / 100;
    // console.log(p5.noise(frameCount))
    p5.background(0, 0, 0)

    for (let y = 0; y < 512 / squareSize; y++) {
      for (let x = 0; x < 1024 / squareSize; x++) {
        p5.fill(
          255,
          255,
          255,
          p5.round(p5.noise(frameCount + x / dividedNumber, frameCount + y / dividedNumber) * 100)
        )

        p5.rect(
          x * squareSize,
          y * squareSize,
          squareSize,
          squareSize)
      }
    }

    drawDebugText(p5)(p5.frameRate())
  };

  return (
    <PageWrapper>
      <Sketch
        setup={setup}
        draw={draw}
      />

      <SectionWrapper title="Perlin noise 2D">
        <Typography.Body theme={theme}>
          Number of square: {Math.round(1024 / squareSize * 512 / squareSize)}
        </Typography.Body>

        <Typography.Body theme={theme}>
          Square size: {squareSize}
        </Typography.Body>
        <input
          type="range"
          value={squareSize}
          onChange={(e) => setSquareSize(parseInt(e.target.value))}
          min="5" max="64" />

        <Typography.Body theme={theme}>
          Divided number: {dividedNumber}
        </Typography.Body>
        <input
          type="range"
          value={dividedNumber}
          onChange={(e) => setDividedNumber(parseInt(e.target.value))}
          min="1" max="100" />

      </SectionWrapper>
    </PageWrapper>
  )
};
export default GridPlayground;