import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BoardState } from "src/app/models/BoardState";

const featureKey = 'board';

export const selectBoard = createFeatureSelector<BoardState>(featureKey);

export const selectTiles = createSelector(
    selectBoard,
    (board: BoardState) => board.tiles
)

export const selectFlagsUsed = createSelector(
    selectBoard,
    (board: BoardState) => board.flagsUsed
)

export const selectStatus = createSelector(
    selectBoard,
    (board: BoardState) => board.status
)
