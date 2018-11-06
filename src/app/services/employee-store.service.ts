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
  public searchText = '';
  public sortColumn = 'name';
  public showBanner = true;
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';
  jobTitlelist: Observable<Array<string>>;
  employees: Observable<Employee[]>;
  employee: Observable<Employee>;
  currentJobTitle:string = 'Manager';
  currentArea:boolean = true;
  currentTipRate:number = 0;

  constructor(
    private http: Http,
    private store: Store<fromRoot.State>
  ) {
    this.jobTitlelist = store.select(fromRoot.selectJobTitle);
    this.employees = store.select(fromRoot.selectResults);
    this.employee = store.select(fromRoot.selectEmployee);
  }

  /**
   * To update the job title list on the store and the current area
   * @params: {string: new area value}
   * */
  updateArea(newArea:string){
    this.store.dispatch(new SearchActions.UpdateArea(newArea));
  }

  /**
   * to add a new element
   * @params: {object: new element data}
   * */
  addEmployee(emp: Employee){
    this.store.dispatch(new SearchActions.AddEmployee(emp));
  }

  /**
   * to get a new element by id
   * @params: {string: object id}
   * */
  getEmployee(id: string){
    this.store.dispatch(new SearchActions.SearchEmployee(id));
  }

  /**
   * to delte the employee with id
   * @params: {string: object id}
   * */
  deleteEmployee(id: string){
    this.store.dispatch(new SearchActions.DeleteEmployee(id));
  }
}
