import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { BoardState } from 'src/app/models/BoardState';
import { BoardActions } from 'src/app/store/actions/board.actions';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{

  x: number = 0;
  y: number = 0;
  bombs: number = 0;

  constructor(private store: Store, private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.x = parseInt(this.route.snapshot.params['x']);
    this.y = parseInt(this.route.snapshot.params['y']);
    this.bombs = parseInt (this.route.snapshot.params['bombs']);

    let props = {
      xLength: this.x,
      yLength: this.y,
      bombAmount: this.bombs 
    }

    this.store.dispatch(BoardActions.generateNewBoard(props))
  }
}
