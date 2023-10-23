import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { BoardState, Coord, TileState, initialTileState } from 'src/app/models/BoardState';
import { TileMark, TileValue } from 'src/app/models/TileDisplay';
import { BoardActions } from 'src/app/store/actions/board.actions';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent {
  private _tileState: TileState;
  
  get tileState(): TileState { 
    return this._tileState; 
  }
  @Input() set tileState(value: TileState){
    this._tileState = value;
    this.face = makeFace(this._tileState);
    this.styleClasses = getButtonClassName(this._tileState);
  }
  
  @Input() coord: Coord;

  face: string = '';
  styleClasses: string = '';

  constructor(private store: Store<BoardState>) {
    this._tileState = initialTileState;
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

const getButtonClassName = (tileState: TileState): string => {
  let base = 'flex grow items-stretch justify-center items-center cursor-pointer';

  if(!tileState.revealed)
      base += ' bg-gray-100 hover:bg-gray-200 active:bg-blue-200';
  else if(tileState.value === TileValue.Bomb)
      base += ' bg-red-400'
  else 
      base += ' bg-gray-400';

  let color = '';

  if(tileState.revealed) {
      switch(tileState.value){
          case TileValue.One:
              color = 'text-blue-700';
              break;
          case TileValue.Two:
              color = 'text-green-700';
              break;
          case TileValue.Three:
              color = 'text-red-700';
              break;
          case TileValue.Four:
              color = 'text-purple-700';
              break;
          case TileValue.Five:
              color = 'text-orange-500';
              break;
          case TileValue.Six:
              color = 'text-gray-700';
              break;
          case TileValue.Seven:
              color = 'text-amber-900';
              break;
          case TileValue.Eight: 
              color = 'text-cyan-700';
              break;
          case TileValue.Bomb:
              color = 'text-black';
              break;
      }
  }

  return `${base} ${color}`;
}

const makeFace = (tileState: TileState) => {
  if(!tileState.revealed){
      switch (tileState.mark){
          case TileMark.Blank:
              return '';
          case TileMark.Flagged:
              return '¶';
          case TileMark.Question:
              return '?';
      }
  } else {
      if(tileState.value === TileValue.None)
          return '';
      if(tileState.value === TileValue.Bomb)
          return '⊗';
      return tileState.value.toString();
  }
}