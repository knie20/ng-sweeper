import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { mergeMap, map, catchError, EMPTY, exhaustMap } from "rxjs";
import { BoardService } from "src/app/services/board.service";
import { BoardActions } from "../actions/board.actions";


@Injectable()
export class BoardEffects {
    generateBoard$ = createEffect(() => this.$actions.pipe(
        ofType(BoardActions.generateNewBoard),
        exhaustMap(action => 
            this.boardService.generateNewBoard(action.xLength, action.yLength, action.bombAmount)
                .pipe(
                    map(board => (BoardActions.boardGenerated({ board }))),
                    catchError(() => EMPTY)
                )
        )
    ));


    constructor(
        private $actions: Actions,
        private boardService: BoardService
    ) {}
}