import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { boardReducer } from './store/reducers/board.reducers';
import { EffectsModule } from '@ngrx/effects';
import { BoardEffects } from './store/effects/board.effects';
import { BoardService } from './services/board.service';
import { GameComponent } from './components/game/game.component';
import { GameHeaderComponent } from './components/game-header/game-header.component';
import { BoardComponent } from './components/board/board.component';
import { TileComponent } from './components/tile/tile.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameHeaderComponent,
    BoardComponent,
    TileComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      board: boardReducer
    }, {}),
    EffectsModule.forRoot(
      BoardEffects,
    ),
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
