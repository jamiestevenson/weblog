import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap} from 'rxjs/operators';
import * as LogicaActions from '../actions/actions';

@Injectable()
export class LogicaEffects {

  constructor(private actions$: Actions) {}

  loadAnAvailableSurvey$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LogicaActions.loadLevel),
      switchMap((action, index) => {
          return of(LogicaActions.loadLevelSuccess());
      })
    )
  );
}
