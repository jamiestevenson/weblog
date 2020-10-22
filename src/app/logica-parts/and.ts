import { ISprite } from '../interfaces/iSprite';
import { BLOCK_SIZE, COLS, ROWS, Symbol } from './constants';

export class And implements ISprite {

  private WIDTH: number = 1;
  private HEIGHT: number = 1;

  x: number;
  y: number;
  color: string;
  shape: Symbol[][];

  constructor(private ctx: CanvasRenderingContext2D) {
    this.spawn();
  }

  spawn() {
    this.color = "blue";
    this.shape = [
      [Symbol.AND_L, Symbol.AND_R, Symbol.NIL],
      [Symbol.NIL, Symbol.NIL, Symbol.NIL],
      [Symbol.NIL, Symbol.NIL, Symbol.NIL]
    ];

    // Position where the shape spawns.
    this.x = 1;
    this.y = 1;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

    this.shape.forEach((row, yIndex) => {
      row.forEach((value, xIndex) => {
          if (value !== Symbol.NIL) {
            this.ctx.fillRect(this.x + xIndex, this.y + yIndex, this.WIDTH, this.HEIGHT);
            console.log(`drawing rectangle: ${this.x}+${xIndex} ${this.y}+${yIndex}`);
          }
      });
    });

    // this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
    // this.ctx.fillRect(0, 0, this.WIDTH, this.HEIGHT);
    // this.ctx.fillRect(1, 1, this.WIDTH, this.HEIGHT);
    // this.ctx.fillRect(2, 2, this.WIDTH, this.HEIGHT);

    // for (let xCord = 0; xCord < this.shape.length ; xCord++) {
    //   for (let yCord = 0; yCord < this.shape[0].length; yCord++) {
    //     if (this.shape[xCord][yCord] !== Symbol.NIL) {
    //       // this.x & this.y = position on the board
    //       // x & y position are the positions of the shape

    //       this.ctx.fillRect(this.x + xCord, this.y + yCord, this.WIDTH, this.HEIGHT);
    //       console.log(`drawing rectangle: ${this.shape[xCord][yCord]} ${this.x}+${xCord} ${this.y}+${yCord}`);
    //     }
    //   }
    // }
  }
}
