import { LogicaBoard, Tile } from '../types';
import { And, Ball } from '../sprites';
import { COLS, ROWS } from './constants';

export const levelOneBoard = (): LogicaBoard => {
    const board = emptyBoard();
    Ball.place(board, {x: 0, y: 0}, 0);
    Ball.place(board, {x: 1, y: 0}, 1);
    And.place(board, {x: 2, y: 2});
    And.place(board, {x: 3, y: 4});
    return board;
};

const emptyBoard = (): LogicaBoard => {
    return {
        tiles: Array.from({ length: ROWS }, () => Array(COLS).fill(Tile.NIL)),
        bits: Array.from({ length: ROWS }, () => Array(COLS).fill(undefined))
    };
};

export function applyTimeToBoard(old: LogicaBoard, ticks: number): LogicaBoard {

    const newBoard = emptyBoard();
    newBoard.tiles = old.tiles; // TODO clone ?

    // work from the bottom row up, handle simplest cases first
    for (let y = old.bits.length - 1; y >= 0; y--) {
        for (let x = old.bits[0].length - 1; x >= 0; x--) {
            // console.log(`applyTimeToBoard: bits: (x:${x}, y:${y})`);
            if (typeof old.bits[y][x] !== 'undefined') {
                // console.log(`applyTimeToBoard: bit: (x:${x}, y:${y}) not empty`);
                Ball.place(newBoard, {x, y: y + 1}, old.bits[y][x]);
            }
        }
    }
    return newBoard;
};