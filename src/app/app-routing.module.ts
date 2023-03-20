import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPokemonComponent } from './pages/buscar-pokemon/buscar-pokemon.component';

const routes: Routes = [
  {
    path: '', component: BuscarPokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
