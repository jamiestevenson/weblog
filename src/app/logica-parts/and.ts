import { ISprite } from '../interfaces/iSprite';
import { BLOCK_SIZE, Symbol } from './constants';

export class And implements ISprite {

    private WIDTH: number = 1;
    private HEIGHT: number = 2;

    x: number;
    y: number;
    color: string;
    shape: Symbol[][];

    constructor(private ctx: CanvasRenderingContext2D) {
      this.spawn();
    }

    spawn() {
      this.color = "blue";
      this.shape = [[Symbol.NIL, Symbol.AND_L, Symbol.NIL],
      [Symbol.NIL, Symbol.AND_R, Symbol.NIL],
      [Symbol.AND_R, Symbol.AND_R, Symbol.AND_L]];

      // Position where the shape spawns.
      this.x = 0;
      this.y = 0;
    }

    draw() {
      this.ctx.fillStyle = this.color;
      this.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== Symbol.NIL) {
                // this.x & this.y = position on the board
                // x & y position are the positions of the shape
                this.ctx.fillRect(this.x + x, this.y + y, this.WIDTH, this.HEIGHT);
                this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
            }
        });
      });
    }
}
