import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  MasComponent  } from './nexstep/mas/mas.component';
import {GridComponent} from './grid/grid.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: '', component: GridComponent},
  {path: 'mas', component: MasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
