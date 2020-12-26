import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { logicaReducer, LogicaState } from './reducer';

export * from './reducer';

export const logicaFeatureKey = 'logica';

export interface WrapperState {
    logica: LogicaState;
  }

export const reducers: ActionReducerMap<WrapperState> = {
    logica: logicaReducer,
};

export const getLogicaState = createFeatureSelector<WrapperState>(logicaFeatureKey);
