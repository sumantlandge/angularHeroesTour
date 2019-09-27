import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeoresComponent } from './heores/heores.component';

const routes: Routes = [
  {path: 'heroes', component:HeoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
