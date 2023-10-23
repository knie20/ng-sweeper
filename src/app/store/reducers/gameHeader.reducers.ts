import { createReducer } from "@ngrx/store";

import { GameHeaderState } from "src/app/models/GameHeaderState";

export const initialGameHeaderState: GameHeaderState = {
    face: "",
    bombAmount: 0,
    flagsUsed: 0
};

export const gameHeaderReducer = createReducer(
    initialGameHeaderState,
)
