import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { gameStatus } from 'src/app/models/BoardState';
import { selectFlagsUsed, selectStatus } from 'src/app/store/selectors/board.selectors';

@Component({
  selector: 'app-game-header',
  templateUrl: './game-header.component.html',
  styleUrls: ['./game-header.component.css']
})
export class GameHeaderComponent implements OnInit{
  @Input() bombAmount: number = 0;
  flagsUsed$: Observable<number> = this.store.select(selectFlagsUsed);
  gameStatus$: Observable<gameStatus> = this.store.select(selectStatus);
  gameStatus: gameStatus = 'inprogress';
  imgSrc: string = '';

  constructor(private store: Store){}
  
  ngOnInit(): void {
    this.gameStatus$.subscribe(val => {
      this.gameStatus = val;
      this.imgSrc = this.getImgSrc();
    });
    
  }

  getImgSrc(){
    const base = 'assets/';
    switch (this.gameStatus){
      case ("inprogress"): return `${base}helthy.png`;
      case ("won"): return `${base}won.png`;
      case ("lost"): return `${base}ded.png`;
    }
  }
}
