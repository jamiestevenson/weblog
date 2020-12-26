import { createSelector } from '@ngrx/store';
import { LogicaState } from '../reducers/reducer';
import * as FromFeature from '../reducers/index';
import { LogicaBoard, SideBar, Tokens } from '../../types';
import { getLogicaState } from '../reducers/index';

export const getBoard = (state: LogicaState) => state.board;

export const getLogicaWrapperProperty = createSelector(
  FromFeature.getLogicaState,
  (state: FromFeature.WrapperState) => state?.logica
);

export const selectStats = createSelector(
  getLogicaWrapperProperty,
  (state: LogicaState): SideBar => ({
      id: state.level.id,
      name: state.level.name,
      score: state.score
    })
);

export const selectBoard = createSelector(
  getLogicaWrapperProperty,
    (state: LogicaState): LogicaBoard => {
      return state.board;
    }
);

export const selectTokens = createSelector(
  getLogicaWrapperProperty,
  (state: LogicaState): Tokens => state.tokens
);

export const selectBoardIsLoaded = createSelector(
  selectBoard,
  (state: LogicaBoard): boolean =>  state.tiles.length > 0
);
