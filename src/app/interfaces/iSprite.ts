export interface ISprite {
  x: number;
  y: number;
  color: string;
  shape: number[][];

  draw(): void;
}