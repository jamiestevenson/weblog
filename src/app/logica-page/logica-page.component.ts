import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ISprite } from '../interfaces/iSprite';
import { And } from '../logica-parts/and';
import { BLOCK_SIZE, COLS, ROWS, Symbol } from '../logica-parts/constants';

@Component({
  selector: 'app-logica-page',
  templateUrl: './logica-page.component.html',
  styleUrls: ['./logica-page.component.css']
})
export class LogicaPageComponent implements OnInit {

  // Inject a reference to the canvas
  // Note is static so that we can reference it in ngOnInit (https://angular.io/api/core/ViewChild#viewchild)
  @ViewChild('board', { static: true }) 
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;
  offBits: number;
  onBits: number;
  level: number;
  board: string[][];
  gate: ISprite;

  //private sprites: Square[] = [];
  //private intervalMillis: number = 200;

  constructor() { }

  ngOnInit() {
    this.initBoard();
  }
  
  initBoard() {
    // Get the 2D context that we draw on.
    this.ctx = this.canvas.nativeElement.getContext("2d");

    // Calculate size of canvas from constants.
    this.ctx.canvas.width = COLS * BLOCK_SIZE;
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;
  }

  play() {
    this.board = this.getEmptyBoard();
    this.gate = new And(this.ctx);
    this.gate.draw();
  }

  getEmptyBoard(): string[][] {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(Symbol.NIL));
  }

}
