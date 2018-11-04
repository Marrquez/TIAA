import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/**
 * global state
 * */
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-job-title',
  templateUrl: './job-title.component.html',
  styleUrls: ['./job-title.component.less']
})
export class JobTitleComponent implements OnInit {
  jobTitle: Observable<Array<string>>;
  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.jobTitle = store.select(fromRoot.selectJobTitle);
  }

  ngOnInit() {
  }

}
