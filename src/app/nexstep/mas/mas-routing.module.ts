import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MasComponent} from './mas.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasRoutingModule { }
