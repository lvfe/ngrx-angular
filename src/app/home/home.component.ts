import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subject, merge} from 'rxjs';
import { mapTo, scan, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private clock: Observable<Date>;
  private update$ = new Subject();

  constructor() { }

  ngOnInit() {
    // mapTo is great to change cur, arr is save last change value
    this.clock = merge(interval(1000).pipe(mapTo('second')), this.update$.asObservable().pipe(mapTo('hour'))).pipe(
      startWith('2017/12/11'),
      scan((arr, cur)=> {
        console.log(arr,cur);
        const arrDate = new Date(''+arr);
        if(cur=='hour')
          arrDate.setHours(arrDate.getHours()+1);
        else
          arrDate.setSeconds(arrDate.getSeconds()+1);
        return arrDate;
      })
    ) as Observable<Date>; 
  }

}
