import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/**
 * models
 * */
import { Employee } from '../../models/Employee';

/**
 * global state
 * */
import { Store } from '@ngrx/store';
import * as SearchActions from '../../search-actions';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  terms: Observable<string>;
  employees: Observable<Employee[]>;

  constructor(
    private store: Store<fromRoot.State>
  ){
    this.terms = store.select(fromRoot.selectTerms);
    this.employees = store.select(fromRoot.selectResults);
  };

  onSearch($event){
    if($event.target.value)
      this.store.dispatch(new SearchActions.Search($event.target.value));
  };

  addElement(){
    this.store.dispatch(new SearchActions.AddEmployee({id:1, name: "1"}));
  };
}
