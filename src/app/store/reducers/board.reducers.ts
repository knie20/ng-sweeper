import { createReducer } from "@ngrx/store";
import { TileState } from "src/app/models/BoardState";

export const initialState: TileState[][] = [];

export const boardReducer = createReducer(
    initialState,
)