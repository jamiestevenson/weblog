import { LogicaBoard, Tile } from '../interfaces';
import { And, Ball } from '../sprites';
import { COLS, ROWS } from './constants';

const levelOneBoard = (): LogicaBoard => {
    const board = emptyBoard();
    Ball.place(board, {x: 0, y: 0});
    And.place(board, {x: 1, y: 1});
    And.place(board, {x: 3, y: 3});
    return board;
};

const emptyBoard = (): LogicaBoard => {
    return {
        tiles: Array.from({ length: ROWS }, () => Array(COLS).fill(Tile.NIL))
    };
};
