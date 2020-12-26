import { bitBall, Tile } from '.';

export type LogicaBoard = {
    tiles: Tile[][];
    bits: (bitBall|undefined)[][];
};
