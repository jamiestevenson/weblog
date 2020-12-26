import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap} from 'rxjs/operators';
import * as LogicaActions from '../actions/actions';
import { levelOneBoard } from '../../util/board.util';

@Injectable()
export class LogicaEffects {

  constructor(private actions$: Actions) {}

  loadLevel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LogicaActions.loadLevel),
      switchMap(action => {
        if (action.levelIdToLoad === '1'){
          console.log(`Effect: loadLevel: ${action.levelIdToLoad}`);
          return of(LogicaActions.loadLevelSuccess({ loadThis: levelOneBoard() }));
        }
        return of(LogicaActions.loadLevelFail({error: `Cannot load level with id ${action.levelIdToLoad}`}));
      })
    )
  );
}
