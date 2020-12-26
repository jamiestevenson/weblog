import { LogicaBoard, Tile } from '../types';
import { And, Ball } from '../sprites';
import { COLS, ROWS } from './constants';

export const levelOneBoard = (): LogicaBoard => {
    const board = emptyBoard();
    Ball.place(board, {x: 0, y: 0}, 0);
    Ball.place(board, {x: 0, y: 1}, 1);
    And.place(board, {x: 1, y: 1});
    And.place(board, {x: 3, y: 3});
    return board;
};

const emptyBoard = (): LogicaBoard => {
    return {
        tiles: Array.from({ length: ROWS }, () => Array(COLS).fill(Tile.NIL)),
        bits: Array.from({ length: ROWS }, () => Array(COLS).fill(undefined))
    };
};
