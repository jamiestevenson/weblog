import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Sprite } from '../../interfaces/sprite.interface';
import { And } from '../../sprites/and';
import { BLOCK_SIZE, COLS, ROWS } from '../../util/constants'
import { Ball } from '../../sprites/ball';
import { StyleService } from '../../../common/services/style.service';
import { LogicaBoard } from '../../interfaces/board.interface';
import { deflateRaw } from 'zlib';
import { Tile } from '../../interfaces';

@Component({
  selector: 'app-logica-page',
  templateUrl: './logica-page.component.html',
  styleUrls: ['./logica-page.component.css']
})
export class LogicaPageComponent implements OnInit {
  // Inject a reference to the canvas
  // Note, it is static so that we can reference it in ngOnInit (https://angular.io/api/core/ViewChild#viewchild)
  @ViewChild('board', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  ctx: CanvasRenderingContext2D;
  offBits: number;
  onBits: number;
  level: number;
  board: LogicaBoard;
  //gates: Sprite[] = [];
  //balls: Sprite[] = [];

  //private sprites: Square[] = [];
  //private intervalMillis: number = 200;

  constructor(private styles: StyleService) {
    this.offBits = 0;
    this.onBits = 0;
    this.level = 1;
  }

  ngOnInit(): void {
    this.initBoard();
  }

  initBoard(): void {
    // Get the 2D context that we draw on.
    this.ctx = this.canvas.nativeElement.getContext('2d');

    // Calculate size of canvas from constants.
    this.ctx.canvas.width = COLS * BLOCK_SIZE;
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;
  }

  handleStartLevelClick(): void {
    // const sun = this.styles.getColour('--colour-sun');
    // const sand = this.styles.getColour('--colour-sand');
    // const sky = this.styles.getColour('--colour-sky');
    // const sea = this.styles.getColour('--colour-sea');
    this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

    this.board.tiles.forEach((row, yIndex) => {
      row.forEach((cell, xIndex) => {
        this.draw(cell, xIndex, yIndex, this.ctx, this.styles);
      });
    });

    // this.gates.push(And(1, 1, sea, this.ctx));
    // this.gates.push(new And(3, 3, sea, this.ctx));
    // this.balls.push(new Ball(0, 0, sun, this.ctx));
    // console.table(this.board);
    // [...this.gates, ...this.balls].forEach(s => s.draw());
  }

  handleRunClick(isRunning: boolean): void {
    // emit events to simulation handler here
    console.log(`Got signal to set isRunning to: ${isRunning}`);
  }

  private draw = (cell: Tile, x: number, y: number, ctx: CanvasRenderingContext2D, styles: StyleService): void => {
    switch (cell) {
      case Tile.AND_L:
      case Tile.AND_R:
        And.draw(x, y, ctx,styles);
        break;
      case Tile.HI_BALL:
      case Tile.LO_BALL:
        Ball.draw(x, y, ctx, styles);
        break;
      case Tile.NIL:
        // Not currently drawn
        break;
    } 

  }

}
