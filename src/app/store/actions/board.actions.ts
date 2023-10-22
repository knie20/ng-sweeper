import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { BoardState, Coord, TileState } from "src/app/models/BoardState";


export const BoardActions = createActionGroup({
    source: "Board Component",
    events: {
        "Placeholder": emptyProps(), 
        "Generate New Board": props<{xLength: number, yLength: number, bombAmount: number}>(),
        "Board Generated": props<{board: BoardState}>(),
        "Tile Left Clicked": props<{ tile: TileState, coord: Coord}>(),
        "Tile Right Clicked": props<{ tile: TileState, coord: Coord}>(),
    }
});
