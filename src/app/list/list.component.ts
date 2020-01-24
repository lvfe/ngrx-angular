import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectivePreloadingStrategyService } from '../service/selective-preloading-strategy.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    preloadStrategy: SelectivePreloadingStrategyService) { 
      console.log(preloadStrategy.getModule());
    }

  ngOnInit() {
  }

}
