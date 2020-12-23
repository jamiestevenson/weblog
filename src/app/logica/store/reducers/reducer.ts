import { createReducer, on } from '@ngrx/store';
import { LogicaBoard } from '../../interfaces';
import * as LogicaActions from '../actions';

interface LogicaState {
    level: {
        id: string,
        name: string
    },
    score: number
    board: LogicaBoard
}

export const initialState: LogicaState = {
    level: {
        id: '-',
        name: 'no level loaded'
    },
    score: 0,
    board: []
};
 
const _counterReducer = createReducer(
  initialState,
  on(LogicaActions.loadLevel, (state, levelIdToLoad) => {
      // This just loads level one at this time
      return {
        ...state,
        level: {
            id: '1',
            name: 'Level One'
        },
        score: 0,
        board: levelOneBoard()
      }
  }),
);