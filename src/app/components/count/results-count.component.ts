import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/**
 * global state
 * */
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-results-count',
  templateUrl: './results-count.component.html',
  styleUrls: ['./results-count.component.less']
})
export class ResultsCountComponent implements OnInit {
  count: Observable<number>;

  constructor(private store: Store<fromRoot.State>) {
    this.count = store.select(fromRoot.selectCount);
  }

  ngOnInit() {
  }

}
