import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MasComponent} from './nexstep/mas/mas.component';



const routes: Routes = [

  {
    path: 'mas', component: MasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
