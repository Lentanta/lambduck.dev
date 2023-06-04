import { hexToRgb } from "@utils/hexToRgb";

export class Color {
  public hex: string;
  public r: number;
  public b: number;
  public g: number;

  constructor(hex: string) {
    this.hex = hex;
    this.r = hexToRgb(hex).r;
    this.b = hexToRgb(hex).b;
    this.g = hexToRgb(hex).g;
  };
}