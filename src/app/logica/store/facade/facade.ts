import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogicaState } from '../reducers/reducer';
import { selectBoard, selectTokens } from '../selectors/logica.selectors';
import * as LogicaActions from '../actions';

@Injectable()
export class LogicaFacade {

  constructor(private store: Store<LogicaState>) {}

  selectBoard$ = this.store.select(selectBoard);
  selectTokens$ = this.store.select(selectTokens);

  loadLevelOne(levelId: number): void {
    this.store.dispatch(LogicaActions.loadLevel({ levelIdToLoad: '1' }));
  }

}
