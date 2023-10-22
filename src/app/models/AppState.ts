import { BoardState } from "./BoardState";
import { GameHeaderState } from "./GameHeaderState";

export interface AppState {
    board: BoardState,
    header: GameHeaderState
}