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
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit {
  terms: Observable<string>;
  employees: Observable<Employee[]>;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router
  ) {
    this.terms = store.select(fromRoot.selectTerms);
    this.employees = store.select(fromRoot.selectResults);
  };

  ngOnInit() {
  };

  /**
   * trigger: search event
   * @params: {
   *  element
   * }
   * */
  onSearch($event){
    this.store.dispatch(new SearchActions.Search($event.target.value));
  };

  addElement(){
    this.router.navigate(['new-edit', {}]);
    //this.store.dispatch(new SearchActions.AddEmployee({id:1, volumeInfo: {title: "Hi Cristian"}}));
  };
}
