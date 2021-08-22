import { Sprite, Tile } from '../types';
import { GATE_SIZE } from '../util/constants';
import { LogicaBoard } from '../types/board.interface';
import { StyleService } from 'src/app/core/services/style.service';
import { Colour } from '../../core/services/colour.enum';

export class And {

  private static shape: Tile[][] = [
    [Tile.AND_L, Tile.AND_R]
  ];
  private static width: number = GATE_SIZE;
  private static height: number = GATE_SIZE;
  private static colour = Colour.SEA;

  static place = (board: LogicaBoard, loc: { x: number; y: number; }) => {
    And.shape.forEach((row, yIndex) => {
      row.forEach((value, xIndex) => {
          if (value !== Tile.NIL) {
            board.tiles[loc.y + yIndex][loc.x + xIndex] = value;
            // console.log(`placing AND: ${loc.x}+${xIndex} ${loc.y}+${yIndex}`);
          }
      });
    });
  }

  static draw = (x: number, y: number, ctx: CanvasRenderingContext2D, styles: StyleService) => {
    if(ctx) {
      ctx.fillStyle = styles.getColour(And.colour);
      ctx.fillRect(x, y, And.width, And.height);
      // console.log(`drawing rectangle: ${x} ${y}`);
    }
  }
}
