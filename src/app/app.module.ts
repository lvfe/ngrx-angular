import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { initialState, metaReducers } from './reducers';
import { SelectivePreloadingStrategyService } from './service/selective-preloading-strategy.service';

const routes:Routes= [
  {
    path: 'home',
    loadChildren: "./home/home.module#HomeModule"
  },
  {
    path: 'list',
    loadChildren: "./list/list.module#ListModule"
  },
  {
    path: 'detail',
    loadChildren: () => import("./detail/detail.module").then(mod => mod.DetailModule),
    data: { preload: true }
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy:SelectivePreloadingStrategyService
    }),
    StoreModule.forRoot(initialState, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
