import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './pages/game/game.component';
import { SetupComponent } from './pages/setup/setup.component';

const routes: Routes = [
  { path: 'game/:x/:y/:bombs', component: GameComponent },
  { path: 'game', redirectTo: 'game/10/10/20' },
  { path: '', component: SetupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
