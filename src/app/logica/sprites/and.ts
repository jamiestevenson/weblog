import { Sprite, Tile } from '../interfaces';
import { GATE_SIZE } from '../util/constants';
import { LogicaBoard } from '../interfaces/board.interface';
import { StyleService } from 'src/app/core/services/style.service';

export class And {

  private static shape: Tile[][] = [
    [Tile.AND_L, Tile.AND_R]
  ];
  private static width: number = GATE_SIZE;
  private static height: number = GATE_SIZE;
  private static colour = '--colour-sea';

  static place = (board: LogicaBoard, loc: { x: number; y: number; }) => {
    And.shape.forEach((row, yIndex) => {
      row.forEach((value, xIndex) => {
          if (value !== Tile.NIL) {
            board.tiles[loc.x + xIndex][loc.y + yIndex] = value;
            console.log(`placing AND: ${loc.x}+${xIndex} ${loc.y}+${yIndex}`);
          }
      });
    });
  }

  static draw = (x: number, y: number, ctx: CanvasRenderingContext2D, styles: StyleService) => {
    ctx.fillStyle = styles.getColour(And.colour);
    And.shape.forEach((row, yIndex) => {
      row.forEach((value, xIndex) => {
          if (value !== Tile.NIL) {
            ctx.fillRect(x + xIndex, y + yIndex, And.width, And.height);
            console.log(`drawing rectangle: ${x}+${xIndex} ${y}+${yIndex}`);
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
