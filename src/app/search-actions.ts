import { Action } from '@ngrx/store';
import { Employee } from './models/Employee'
import { Country } from './models/Country'

/**
 * action types
 * */
export const ADD_EMPLOYEE = '[Employees] Add Employee';
export const UPDATE_AREA = '[Employees] Update Area';
export const SEARCH_COUNTRIES = '[Employees] Search Countries';
export const SEARCH_COUNTRIES_SUCCESS = '[Employees] Search Countries Success';
export const SEARCH_EMPLOYEE= '[Employees] Search Employee';
export const DELETE_EMPLOYEE= '[Employees] Delete Employee';

/**
 * Actions
 * */
export class SearchCountries implements Action {
  readonly type = SEARCH_COUNTRIES;

  constructor(){};
}

export class SearchCountriesSuccess implements Action {
  readonly type = SEARCH_COUNTRIES_SUCCESS;

  constructor(public payload: Country[]){};
}

export class SearchEmployee implements Action {
  readonly type = SEARCH_EMPLOYEE;

  constructor(public payload: string){};
}

export class DeleteEmployee implements Action {
  readonly type = DELETE_EMPLOYEE;

  constructor(public payload: string){};
}

export class AddEmployee implements Action {
  readonly type = ADD_EMPLOYEE;

  constructor(public payload: Employee){};
}

export class UpdateArea implements Action {
  readonly type = UPDATE_AREA;

  constructor(public payload: string){};
}

export type All
  = AddEmployee | UpdateArea | SearchCountries | SearchCountriesSuccess | SearchEmployee | DeleteEmployee;
