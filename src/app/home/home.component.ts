import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, interval, Subject, merge } from 'rxjs';
import { map, mapTo, scan, startWith, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { HOUR, SECOND, ADVANCE, RESET } from '../reducers/clock.reducer'
interface Person{
  name: string,
  time: Date
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  
  private clock: Observable<Date>;
  private people: Observable<Person>;
  private update$ = new Subject();
  private reset$ = new Subject();
  private advance$ = new Subject();

  constructor(private store: Store<any>) {
    this.clock = this.store.select('clock') as Observable<Date>;
    this.people = this.store.select('people');
  }

  ngOnInit() {
    // mapTo is great to change cur, arr is save last change value
    const clock = merge(
      interval(1000).pipe(map(_ => { return { type: SECOND, payload: 1 }; })),
      this.update$.asObservable().pipe(map(res => {
        return { type: HOUR, payload: +res }
      })),
      this.advance$.asObservable().pipe(map(p => {
        return {type: ADVANCE, payload: p};
      })),
      this.reset$.asObservable().pipe(withLatestFrom(this.clock, ((_,time)=>{return {type: RESET, payload: time}})))
    ).subscribe(({ type, payload }) => {
      this.store.dispatch({ type, payload });
    });
  }

}
