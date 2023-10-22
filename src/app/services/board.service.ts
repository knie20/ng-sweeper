import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { generateBoard } from 'src/lib/board';
import { BoardState } from '../models/BoardState';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  generateNewBoard = (xLength: number, yLength: number, bombAmount: number): Observable<any> => {
    return of(generateBoard(xLength, yLength, bombAmount));
  }

  generateNewBoard2 = (): Observable<BoardState> => of(generateBoard(10, 10, 20));

  constructor() { }
}
