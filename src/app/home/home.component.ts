import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, interval, Subject, merge } from 'rxjs';
import { map, mapTo, scan, startWith } from 'rxjs/operators';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  private clock: Observable<Date>;
  private update$ = new Subject();

  constructor(private store: Store<any>) {
    this.clock = this.store.select('clock') as Observable<Date>;
    this.clock.subscribe(res => {
      debugger;
      console.log(res);});
  }

  ngOnInit() {
    // mapTo is great to change cur, arr is save last change value
    const clock = merge(
      interval(1000).pipe(map(_ => { return { type: 'second', payload: 1 }; })),
      this.update$.asObservable().pipe(map(res => {
        return { type: 'hour', payload: +res }
      }))
    ).subscribe(({ type, payload }) => {
      this.store.dispatch({ type, payload });
    });
  }

}
