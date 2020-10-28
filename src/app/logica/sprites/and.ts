import { ISprite } from '../models/sprite';
import { BLOCK_SIZE, COLS, GATE_SIZE, ROWS, Symbol } from '../models/constants';

export class And implements ISprite {

  private WIDTH: number = GATE_SIZE;
  private HEIGHT: number = GATE_SIZE;

  color: string;
  shape: Symbol[][];

  constructor(
    public x: number,
    public y: number,
    public colour: string,
    private ctx: CanvasRenderingContext2D) {
    this.spawn();
  }

  spawn() {
    this.shape = [
      [Symbol.AND_L, Symbol.AND_R]
    ];
  }

  draw() {
    this.ctx.fillStyle = this.colour;
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
