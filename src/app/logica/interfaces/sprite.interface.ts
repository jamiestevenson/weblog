import { StyleService } from 'src/app/core/services/style.service';
import { Tile } from '.';

export interface Sprite {
  colour(): string;
  shape(): Tile[][];

  draw(x: number, y: number, ctx: CanvasRenderingContext2D, styles: StyleService): void;
}
