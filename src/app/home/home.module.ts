import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ClockComponent } from './clock.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent, ClockComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
