import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'game/:x/:y/:bombs', component: GameComponent },
  { path: 'game', redirectTo: 'game/10/10/20' },
  { path: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
