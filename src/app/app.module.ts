import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { boardReducer } from './store/reducers/board.reducers';
import { EffectsModule } from '@ngrx/effects';
import { BoardEffects } from './store/effects/board.effects';
import { BoardService } from './services/board.service';

@NgModule({
  declarations: [
    AppComponent
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
  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
