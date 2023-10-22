import { TileMark, TileValue } from "./TileDisplay";

export type Coord = [x: number, y: number]; 

export interface BoardState {
    tiles: TileState[][];
    status: gameStatus;
    flagsUsed: number;
}

export const getXLength = (board: BoardState): number => board.tiles.length;

export const getYLength = (board: BoardState): number => board.tiles.length > 0 ? board.tiles[0].length : 0;

export type TileState = TileStateSansCoord | TileStateWithCoord;

export interface TileStateSansCoord {
    revealed: boolean,
    value: TileValue,
    mark: TileMark
}

export interface TileStateWithCoord extends TileStateSansCoord {
    coord: Coord
}

export const initialTileState: TileStateSansCoord = {
    revealed: false,
    value: TileValue.None,
    mark: TileMark.Blank
}

export const getAllTileStates: (() => TileState[][]) = () => {
    let revealedMarkCombinations : [boolean, TileMark][] = [
        [true, TileMark.Blank],
        [true, TileMark.Flagged],
        [true, TileMark.Question],
        [false, TileMark.Blank],
        [false, TileMark.Flagged],
        [false, TileMark.Question],
    ];

    let allTileValues = [
        TileValue.None,
        TileValue.One,
        TileValue.Two,
        TileValue.Three,
        TileValue.Four,
        TileValue.Five,
        TileValue.Six,
        TileValue.Seven,
        TileValue.Eight,
        TileValue.Bomb
    ]

    let result: TileState[][] = [];
    revealedMarkCombinations.forEach(([revealed, mark]: [boolean, TileMark]) => {
        result.push(
            allTileValues
            .map(value => {
                return {
                    value,
                    revealed,
                    mark 
                };
        }));
    });

    return result;
}

export const testBoardState: BoardState = {
    tiles: getAllTileStates(),
    flagsUsed: 0,
    status: "inprogress"
};

export type gameStatus = "inprogress" | "lost" | "won";