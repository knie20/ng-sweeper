import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { BoardState, Coord, TileState, initialTileState } from 'src/app/models/BoardState';
import { TileMark } from 'src/app/models/TileDisplay';
import { BoardActions } from 'src/app/store/actions/board.actions';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent {
  @Input() tileState: TileState;
  @Input() coord: Coord;

  face: string = '';

  constructor(private store: Store<BoardState>) {
    this.tileState = initialTileState;
    this.coord = [-1, -1];
  }

  handleClick = (evt: MouseEvent) => {
    if (evt.type === 'contextmenu')
            evt.preventDefault();
        
    if(this.tileState.revealed) 
      return;

    if (evt.type === 'click' && this.tileState.mark == TileMark.Blank)
      this.store.dispatch(BoardActions.tileLeftClicked({tile: this.tileState, coord: this.coord}));
    else if (evt.type === 'contextmenu')            
      this.store.dispatch(BoardActions.tileRightClicked({tile: this.tileState, coord: this.coord}));
  }
}
