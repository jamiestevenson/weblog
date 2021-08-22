import { createAction, props } from '@ngrx/store';
import { LogicaBoard } from '../../types/board.interface';

export const loadLevel = createAction('[Logica] Load Level Start', props<{ levelIdToLoad: string }>());
export const loadLevelSuccess = createAction('[Logica] Load Level Success', props<{ loadThis: LogicaBoard }>());
export const loadLevelFail = createAction('[Logica] Load Level Fail', props<{ error: string }>());

export const tickSimulation = createAction('[Logica] Tick Simulation');
export const unpauseSimulation = createAction('[Logica] Start Simulation');
export const pauseSimulation = createAction('[Logica] Pause Simulation');
export const simulationError = createAction('[Logica] Simulation Error', props<{ error: string }>());

export const resetLevel = createAction('[Logica] Reset Level'); // not implemented yet
export const saveLevel = createAction('[Logica] Save Level'); // not implemented yet
