import { Component, OnInit, ɵALLOW_MULTIPLE_PLATFORMS } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectivePreloadingStrategyService } from '../service/selective-preloading-strategy.service';
import { Observable, Subscriber, Subject } from 'rxjs';
import {Article} from '../model/article';
import { ArticleState } from '../app.states';
import * as articleReducer from '../reducers/article.reducer';
import { Store } from '@ngrx/store';
import { JavaArticlesAction, AugularArticlesAction, FavoriateArticlesAction } from '../actions/article.actions';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  articles: Observable<Article[]>;
  constructor(private store: Store<ArticleState>,
    private route: ActivatedRoute,
    preloadStrategy: SelectivePreloadingStrategyService) {
    console.log(preloadStrategy.getModule());
    this.articles = store.select(articleReducer.getArticles);
  }

  ngOnInit() {
  }

  showJava() {
    this.store.dispatch(new JavaArticlesAction());
  }
  showAngular() {
    this.store.dispatch(new AugularArticlesAction());
  }
  showFav() {
    this.store.dispatch(new FavoriateArticlesAction());
  }

  // <div (click)="update$.next()">{{clock|async|date:'yyyy-MM-dd'}}</div>
  // update$ = new Subject()
  // Observable<Date> clock = merge([interval(5000), update$.asObservable()).pipe(map(_=>new Date));
  // change: click change hour; auto change second, startwith date
  // update$ = new Subject();
  // Observable<Date> clock;
  // clock = map(interval(1000).pipe(mapTo('second')), update$.asObservable().pipe(mapTo('hour'))).pipe(
  //   startWith("2019/02/20"),
  //   scan((acc,curr) => {

  //     Date date = new Date(acc);
  //     if(curr == 'second')
  //       date.setsecond(date.getSecond()+1);
  //     else
  //       Date.sethour(date.getHour()+1);
  //     return date
  //   })
  // ) as Obervable<Date>;

}
