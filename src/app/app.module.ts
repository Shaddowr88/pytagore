import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import {MatGridListModule} from '@angular/material';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { GridComponent } from './grid/grid.component';
import { MasComponent } from './nexstep/mas/mas.component';
import {  RouterModule, Routes  } from '@angular/router';


const appRoutes: Routes = [
  { path: 'mas' , component: MasComponent},
];



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavHeaderComponent,
    GridComponent,
    MasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

