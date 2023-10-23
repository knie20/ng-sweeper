import { createReducer, on } from "@ngrx/store";
import { BoardState, Coord, TileState } from "src/app/models/BoardState";
import { BoardActions } from "../actions/board.actions";
import { TileMark, TileValue } from "src/app/models/TileDisplay";
import { applyRevealAllBombs, applyToTileAtCoord, checkForWinCondition, markTileWithBlank, markTileWithFlag, markTileWithQuestion, propagateReveal, revealTile } from "src/lib/board";

export const initialBoardState: BoardState = {
    tiles: [],
    flagsUsed: 0,
    status: "inprogress"
};

export const boardReducer = createReducer(
    initialBoardState,
    on(BoardActions.placeholder, state => ({...state})),
    on(BoardActions.boardGenerated, (_state, { board }) => board),
    on(BoardActions.tileLeftClicked, (state, {tile, coord}) => (reduceForTileLeftClick(state, tile, coord))),
    on(BoardActions.tileRightClicked, (state, {tile, coord}) => (reduceForTileRightClick(state, tile, coord)))
)

const reduceForTileLeftClick = (state: BoardState, tile: TileState, coord: Coord): BoardState => {
    if (tile.value === TileValue.Bomb)
        return { ...state, tiles: applyRevealAllBombs(state), status: 'lost' };

    if (tile.value === TileValue.None)
        return { ...state, tiles: propagateReveal(state, coord)};

    return { ...state, tiles: applyToTileAtCoord(state, coord, revealTile)};
};

const reduceForTileRightClick = (state: BoardState, tile: TileState, coord: Coord): BoardState => {
    switch(tile.mark){
        case (TileMark.Blank):
            return flagTile(state, coord); 
        case (TileMark.Flagged):
            return { 
                ...state,
                tiles: applyToTileAtCoord(state, coord, markTileWithQuestion), 
                flagsUsed: state.flagsUsed -1
            };
        case (TileMark.Question):
            return { ...state, tiles: applyToTileAtCoord(state, coord, markTileWithBlank)};
    }
};

function flagTile(state: BoardState, coord: Coord): BoardState {
    let nextTiles = applyToTileAtCoord(state, coord, markTileWithFlag); 
    let status = checkForWinCondition(nextTiles);
    return { 
        ...state,
        tiles: nextTiles,  
        flagsUsed: state.flagsUsed + 1,
        status
    };
}

