import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/**
 * models
 * */
import { Employee } from '../models/Employee';

/**
 * global state
 * */
import { Store } from '@ngrx/store';
import * as SearchActions from '../search-actions';
import * as fromRoot from '../reducers';

@Injectable()
export class EmployeeStoreService {
  public searchText= '';
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';
  jobTitlelist: Observable<Array<string>>;
  employees: Observable<Employee[]>;
  count: Observable<number>;

  constructor(
    private http: Http,
    private store: Store<fromRoot.State>
  ) {
    this.jobTitlelist = store.select(fromRoot.selectJobTitle);
    this.employees = store.select(fromRoot.selectResults);
    this.count = store.select(fromRoot.selectCount);
  }

  /**
   * To update the job title list on the store and the current area
   * @params: {string: new area value}
   * */
  updateArea(newArea:string){
    this.store.dispatch(new SearchActions.UpdateArea(newArea));
  }

  /**
   * To find employees with the term
   * @params:{string: term to find}
   * */
  searchEmployees(term) {
    this.store.dispatch(new SearchActions.Search(term));
  }

  /**
   * to add a new element
   * @params: {object: new element data}
   * */
  addEmployee(emp: Employee){
    this.store.dispatch(new SearchActions.AddEmployee(emp));
  }

  /**
   * Only for test the Globlal store and State
   * @params: {string: string to find}
   * */
  getEmployees(queryTitle: string): Observable<Employee[]> {
    this.searchText = queryTitle;
    return this.http.get(`${this.API_PATH}?q=${queryTitle}`)
      .map(
        res =>
          res.json().items || []
      );
  }
}
