import { StyleService } from 'src/app/common/services/style.service';
import { BALL_SIZE, BLOCK_SIZE, GATE_SIZE } from '../util/constants';
import { LogicaBoard, Tile } from './../interfaces';

export class Ball {

    private static shape: Tile[][] = [
      [Tile.HI_BALL]
    ];
    private static radius = BALL_SIZE / 2;
    private static offset = GATE_SIZE / 2;
    private static colour = '--colour-sun';

    static place = (board: LogicaBoard, loc: { x: number; y: number; }) => {
      Ball.shape.forEach((row, yIndex) => {
        row.forEach((value, xIndex) => {
            if (value !== Tile.NIL) {
              board.tiles[loc.x + xIndex][loc.y + yIndex] = value;
              console.log(`placing ball: ${loc.x}+${xIndex} ${loc.y}+${yIndex}`);
            }
        });
      });
    }

    static draw = (x: number, y: number, ctx: CanvasRenderingContext2D, styles: StyleService): void => {
        ctx.fillStyle = styles.getColour(Ball.colour);
        Ball.shape.forEach((row, yIndex) => {
          row.forEach((value, xIndex) => {
              if (value !== Tile.NIL) {
                ctx.arc(x + xIndex + Ball.offset, y + yIndex + Ball.offset, Ball.radius, 0, 2 * Math.PI);
                ctx.fill();
                console.log(`drawing ball: ${x}+${xIndex}+${Ball.offset} ${y}+${yIndex}+${Ball.offset}`);
              }
          });
        });
    }
}
