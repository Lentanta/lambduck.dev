export class Rectangle {
  public posX: number;
  public posY: number;
  public width: number;
  public height: number;
  public color: string;

  public constructor(
    posX: number,
    posY: number,
    width: number,
    height: number,
    color: string
  ) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color = color;
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
  }
};