import { BALL_SIZE, BLOCK_SIZE, GATE_SIZE, Symbol } from '../models/constants'

export class Ball {

    color: string;
    shape: Symbol[][];
    private offset = GATE_SIZE / 2;

    constructor(
      public x: number,
      public y: number,
      public colour: string,
      private ctx: CanvasRenderingContext2D) {
        this.spawn();
      }

    spawn() {
        this.shape = [
            [Symbol.HI_BALL]
        ];
    }

    draw() {
        this.ctx.fillStyle = this.colour;
        this.shape.forEach((row, yIndex) => {
          row.forEach((value, xIndex) => {
              if (value !== Symbol.NIL) {
                this.ctx.arc(this.x + xIndex + this.offset, this.y + yIndex + this.offset, BALL_SIZE/2, 0, 2*Math.PI);
                this.ctx.fill();
                //this.ctx.fillRect(this.x + xIndex + this.offset, this.y + yIndex + this.offset, BALL_SIZE, BALL_SIZE);
                console.log(`drawing ball: ${this.x}+${xIndex}+${this.offset} ${this.y}+${yIndex}+${this.offset}`);
              }
          });
        });
    }
}
