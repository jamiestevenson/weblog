import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ISprite } from '../../models/sprite';
import { And } from '../../sprites/and';
import { BLOCK_SIZE, COLS, ROWS, Symbol } from '../../models/constants'
import { Ball } from '../../sprites/ball';

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

  ctx: CanvasRenderingContext2D;
  offBits: number;
  onBits: number;
  level: number;
  board: string[][];
  sprites: ISprite[] = [];

  //private sprites: Square[] = [];
  //private intervalMillis: number = 200;

  constructor() { 
    this.offBits = 0;
    this.onBits = 0;
    this.level = 1;
  }

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
    this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
    this.sprites.push(new And(1, 1, this.ctx));
    this.sprites.push(new And(3, 3, this.ctx));
    this.sprites.push(new Ball(0, 0, this.ctx));
    //console.table(this.board);

    this.sprites.forEach(s => s.draw());
  }

  getEmptyBoard(): string[][] {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(Symbol.NIL));
  }

}
