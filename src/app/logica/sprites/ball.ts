import { StyleService } from 'src/app/core/services/style.service';
import { BALL_SIZE, BLOCK_SIZE, GATE_SIZE } from '../util/constants';
import { LogicaBoard, bitBall } from '../types';
import { Colour } from '../../core/services/colour.enum';
import { toLabel } from '../util/bitBall.util';
import { match } from 'ts-pattern';

export class Ball {

  private static radius = BALL_SIZE / 2;
  private static offset = GATE_SIZE / 2;
  private static colour = Colour.SUN;

  static place = (board: LogicaBoard, loc: { x: number; y: number; }, bit: bitBall) => {
    board.bits[loc.x][loc.y] = bit;
    console.log(`placing ${toLabel(bit)} BALL: ${loc.x} ${loc.y}`);
  }

  static draw = (b: bitBall, x: number, y: number, ctx: CanvasRenderingContext2D, styles: StyleService): void => {

      ctx.beginPath(); // Otherwise the stroke will join to the next stroked shape
      ctx.fillStyle = b === 0 ? styles.getColour(Colour.DARK_GREY) : styles.getColour(Colour.SKY);

      ctx.arc(x + Ball.offset, y + Ball.offset, Ball.radius, 0, 2 * Math.PI);
      ctx.lineWidth = 0.1;
      ctx.strokeStyle = styles.getColour(Ball.colour);
      ctx.stroke();

      ctx.fill();
      console.log(`drawing ${toLabel(b)} ball: ${x}+${Ball.offset} ${y}+${Ball.offset}`);
  }

  private static strokeColour = (b: bitBall): string => match(b)
    .with(0, () => Colour.DARK_GREY as string)
    .with (1, () => Colour.LIGHT_GREY as string)
    .otherwise(() => Ball.colour)
}
