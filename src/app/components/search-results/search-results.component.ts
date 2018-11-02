import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

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
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.less']
})
export class SearchResultsComponent implements OnInit {
  employees: Observable<Employee[]>;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router
  ) {
    this.employees = store.select(fromRoot.selectResults);
  }

  ngOnInit() {
  }

  addElement(){
    this.router.navigate(['new-edit', {}]);
    //this.store.dispatch(new SearchActions.AddEmployee({id:1, volumeInfo: {title: "Hi Cristian"}}));
  };
}
