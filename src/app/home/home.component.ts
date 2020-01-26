import { Component, OnInit } from '@angular/core';
import { Observable, interval} from 'rxjs';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private clock: Observable<Date>;

  constructor() { }

  ngOnInit() {
    this.clock = interval(5000).pipe(map( trd => new Date())); 
  }

}
