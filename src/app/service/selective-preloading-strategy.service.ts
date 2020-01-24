import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectivePreloadingStrategyService implements PreloadingStrategy {
  private preloadedModule = [];
  constructor() {
    console.log('run into SelectivePreloadingStrategyService');
  }
  preload(route: Route, fn: () => Observable<any>): Observable<any>{
    if(route.data && route.data['preload']) {
      // choose to print preloaded module
      this.preloadedModule.push(route);
      console.log(route);
      return fn();
    } else {
      return of(null);
    }
  }
  getModule() {
    return this.preloadedModule;
  }
}
