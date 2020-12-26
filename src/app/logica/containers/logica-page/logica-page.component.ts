import { Component, Input } from '@angular/core';
import { LogicaBoard } from '../../interfaces/board.interface';
import { LogicaFacade } from '../../store/facade/facade';

@Component({
  selector: 'app-logica-page',
  templateUrl: './logica-page.component.html',
  styleUrls: ['./logica-page.component.css']
})
export class LogicaPageComponent {

  ctx: CanvasRenderingContext2D;
  public offBits: number;
  public onBits: number;
  public level: number;

  @Input()
  board: LogicaBoard;

  constructor(public logicaFacade: LogicaFacade) {
  }
}
