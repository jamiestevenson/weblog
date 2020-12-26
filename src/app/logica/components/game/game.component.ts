import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { StyleService } from 'src/app/core/services/style.service';
import { LogicaBoard, Tile, Tokens } from '../../interfaces';
import { And, Ball } from '../../sprites';
import { BLOCK_SIZE, COLS, ROWS } from '../../util/constants';
import { SideBar } from '../../interfaces/sidebar.interfaces';
import { LogicaFacade } from '../../store/facade/facade';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
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

  initBoard(): void {
    // Get the 2D context that we draw on.
    this.ctx = this.canvas.nativeElement.getContext('2d');

    // Calculate size of canvas from constants.
    this.ctx.canvas.width = COLS * BLOCK_SIZE;
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;
  }

  handleLoadLevelClick(): void {
    this.logicaFacade.loadLevelOne(1);
    return;
  }

  draw(): void {
    // Do things if necessary, but events should handle most of this async

    if (!this.board){
      // console.log(`Cannot draw undefined board`);
      return;
    }

    this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

    this.board.tiles.forEach((row, yIndex) => {
      row.forEach((cell, xIndex) => {
        // console.log(`Drawing: ${cell} ${xIndex} ${yIndex}`);
        this.drawCell(cell, xIndex, yIndex, this.ctx, this.styles);
      });
    });
  }

  handleRunClick(isRunning: boolean): void {
    this.draw();
    // emit events to simulation handler here
    console.log(`Got signal to set isRunning to: ${isRunning}`);
  }

  private drawCell = (cell: Tile, x: number, y: number, ctx: CanvasRenderingContext2D, styles: StyleService): void => {
    switch (cell) {
      case Tile.AND_L:
      case Tile.AND_R:
        And.draw(x, y, ctx, styles);
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
