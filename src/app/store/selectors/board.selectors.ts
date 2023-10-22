import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/models/AppState";
import { BoardState } from "src/app/models/BoardState";

const selectBoard = (state: AppState) => state.board;

export const selectTiles = createSelector(
    selectBoard,
    (state: BoardState) => state.tiles
);

export const selectFlagsUsed = createSelector(
    selectBoard,
    (state: BoardState) => state.flagsUsed
);

export const selectStatus = createSelector(
    selectBoard,
    (state: BoardState) => state.status
);