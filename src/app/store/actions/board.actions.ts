import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Coord, TileState } from "src/app/models/BoardState";


export const BoardActions = createActionGroup({
    source: "Board",
    events: {
        "[Board Component] Placeholder": emptyProps(), 
        "[Board Component] Generate New Board": props<{xLength: number, yLength: number, bombAmount: number}>(),
        "[Board Component] Tile Left Clicked": props<{ tile: TileState, coord: Coord}>(),
        "[Board Component] Tile Right Clicked": props<{ tile: TileState, coord: Coord}>(),
    }
});
