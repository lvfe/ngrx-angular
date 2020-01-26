import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ClockComponent } from './clock.component';
import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';
import { clock, people } from '../reducers/clock.reducer';

@NgModule({
  declarations: [HomeComponent, ClockComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule.forRoot({clock, people})
  ]
})
export class HomeModule { }
