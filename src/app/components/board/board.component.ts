import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BoardState, Coord, TileState, getXLength, getYLength, initialTileState } from 'src/app/models/BoardState';
import { selectTiles } from 'src/app/store/selectors/board.selectors';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit{
  gridStyle: any;
  tiles: TileState[][] = [];
  tiles$: Observable<TileState[][]> = this.store.select(selectTiles);

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.tiles$.subscribe(val => {
      this.tiles = val;
      this.gridStyle = generateBoardGrid(getXLength(this.tiles), getYLength(this.tiles));
    })
  }

  testTileState: TileState = initialTileState;
  testCoord: Coord = [0, 0];
}

const generateBoardGrid = (rows: number, columns: number): any => {
  return {
      'gridTemplate': `repeat(${rows}, 32px) / repeat(${columns}, 32px)`
  };
}