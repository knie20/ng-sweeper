import { createReducer, on } from "@ngrx/store";
import { BoardState, Coord, TileState } from "src/app/models/BoardState";
import { BoardActions } from "../actions/board.actions";

export const initialState: BoardState = {
    tiles: [],
    flagsUsed: 0,
    status: "inprogress"
};

export const boardReducer = createReducer(
    initialState,
    on(BoardActions.placeholder, state => ({...state})),
    on(BoardActions.boardGenerated, (_state, { board }) => board),
    on(BoardActions.tileLeftClicked, (state, {tile, coord}) => (reduceForTileLeftClick(state, tile, coord))),
    on(BoardActions.tileRightClicked, (state, {tile, coord}) => (reduceForTileRightClick(state, tile, coord)))
)

const reduceForTileLeftClick = (state: BoardState, tile: TileState, coord: Coord): BoardState => {
    throw new Error("Function not implemented.");
};

const reduceForTileRightClick = (state: BoardState, tile: TileState, coord: Coord): BoardState => {
    throw new Error("Function not implemented.");
};
