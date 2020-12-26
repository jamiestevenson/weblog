import { createReducer, on } from '@ngrx/store';
import { LogicaBoard } from '../../types';
import * as LogicaActions from '../actions';
import { levelOneBoard } from '../../util/board.util';
import { Tokens } from '../../types/tokens.interfaces';

export interface LogicaState {
    level: {
        id: string;
        name: string;
    };
    score: number;
    tokens: Tokens;
    board: LogicaBoard;
}

export const initialState: LogicaState = {
    level: {
        id: '-',
        name: 'no level loaded'
    },
    score: 0,
    tokens: {
        offBits: 0,
        onBits: 0
    },
    board: {
        tiles: [],
        bits: []
    }
};

export const logicaReducer = createReducer(
  initialState,
  on(LogicaActions.loadLevelSuccess, (state, {loadThis: data}) => {
      return {
        ...state,
        board: data
      };
  }),
  on(LogicaActions.loadLevelFail, (state) => {
    return state;
  }),
);
