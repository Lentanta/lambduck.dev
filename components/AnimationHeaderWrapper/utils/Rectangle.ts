import { Position } from "./Position";
import { Color } from "./Color";
import { Dimension } from "./Dimension";

export class Rectangle {
  public position: Position;
  public dimension: Dimension;
  public color: Color;
  public strokeColor: Color;

  public constructor(
    position: Position,
    dimension: Dimension,
    color: Color,
    strokeColor: Color,
  ) {
    this.position = position;
    this.dimension = dimension;
    this.color = color;
    this.strokeColor = strokeColor;
  };

  getPosition = (): Position => {
    return this.position;
  };

  setPosition = (position: Position): void => {
    this.position = position;
  };

  setSize = (width: number, height: number) => {
    this.dimension.width = width;
    this.dimension.height = height;
  };

  setColor = (color: Color) => {
    this.color = color;
  };
};