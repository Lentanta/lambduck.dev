import p5Types from "p5";

export class Rectangle {
  public posX: number;
  public posY: number;
  public width: number;
  public height: number;
  public color: string;
  public strokeColor: string;

  public constructor(
    posX: number,
    posY: number,
    width: number,
    height: number,
    color: string,
    strokeColor: string,
  ) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color = color;
    this.strokeColor = strokeColor;
  };

  setPosition = (x: number, y: number) => {
    this.posX = x;
    this.posY = y;
  };

  setSize = (width: number, height: number) => {
    this.width = width;
    this.height = height;
  };

  setColor = (color: string) => {
    this.color = color;
  };

  drawRectangle = (p5: p5Types) => {
    p5.fill(this.color);
    p5.stroke(this.strokeColor)
    p5.rect(
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  };
};