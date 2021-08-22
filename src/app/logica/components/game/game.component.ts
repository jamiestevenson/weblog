import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { StyleService } from 'src/app/core/services/style.service';
import { LogicaBoard, Tile, Tokens } from '../../types';
import { And, Ball } from '../../sprites';
import { BLOCK_SIZE, COLS, ROWS } from '../../util/constants';
import { SideBar } from '../../types/sidebar.interfaces';
import { LogicaFacade } from '../../store/facade/facade';
import { bitBall } from '../../types/bit.type';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnChanges {
  // Inject a reference to the canvas
  // Note, it is static so that we can reference it in ngOnInit (https://angular.io/api/core/ViewChild#viewchild)
  @ViewChild('board', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  ctx: CanvasRenderingContext2D;

  @Input()
  tokens?: Tokens;

  @Input()
  sidebar?: SideBar;

  @Input()
  board?: LogicaBoard;

  constructor(private styles: StyleService, private logicaFacade: LogicaFacade) {
  }

  ngOnInit(): void {
    this.initBoard();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (typeof this.board !== 'undefined' && typeof this.ctx !== 'undefined') {
      this.draw();
    }
  }

  initBoard(): void {
    // Get the 2D context that we draw on.
    this.ctx = this.canvas.nativeElement.getContext('2d');

    // Calculate size of canvas from constants.
    this.ctx.canvas.width = COLS * BLOCK_SIZE;
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;
    this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
  }

  handleLoadLevelClick(): void {
    this.logicaFacade.loadLevelOne(1);
    return;
  }

  handleTickClick(): void {
    this.logicaFacade.tick();
    return;
  }

  draw(): void {
    // Do things if necessary, but events should handle most of this async
    if (!this.board){
      // console.log(`Cannot draw undefined board`);
      return;
    }

    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.board.tiles.forEach((row, yIndex) => {
      row.forEach((cell: Tile, xIndex) => {
        // console.log(`Drawing: ${cell} ${xIndex} ${yIndex}`);
        this.drawCell(cell, xIndex, yIndex, this.ctx, this.styles);
      });
    });

    this.board.bits.forEach((row, yIndex) => {
      row.forEach((b: bitBall | undefined, xIndex: number) => {
        // console.log(`Drawing: ${cell} ${xIndex} ${yIndex}`);
        if (b === 0 || b === 1) {
          this.drawBit(b, xIndex, yIndex, this.ctx, this.styles);
        }
      });
    });
  }

  handleRunClick(isRunning: boolean): void {
    this.draw();
    // emit events to simulation handler here
    console.log(`Got signal to set isRunning to: ${isRunning}`);
  }

  // There is probably a nice way to reduce this
  private drawCell = (cell: Tile, x: number, y: number, ctx: CanvasRenderingContext2D, styles: StyleService): void => {
    switch (cell) {
      case Tile.AND_L:
      case Tile.AND_R:
        And.draw(x, y, ctx, styles);
        break;
      case Tile.NIL:
        // Background not currently drawn
        break;
    }
  }

  private drawBit = (b: bitBall, x: number, y: number, ctx: CanvasRenderingContext2D, styles: StyleService) => {
    Ball.draw(b, x, y, ctx, styles);
  }
}
