import { Action } from '@ngrx/store';
import { Employee } from './models/Employee'
import { Country } from './models/Country'

/**
 * action types
 * */
export const SEARCH = '[Employees] Search';
export const SEARCH_SUCCESS = '[Employees] Search Success';
export const ADD = '[Employees] Add';
export const UPDATE_AREA = '[Employees] Update Area';
export const SEARCH_COUNTRIES = '[Employees] Search Countries';
export const SEARCH_COUNTRIES_SUCCESS = '[Employees] Search Countries Success';

/**
 * Actions
 * */
export class Search implements Action {
  readonly type = SEARCH;

  constructor(public payload: string){};
}

export class SearchCountries implements Action {
  readonly type = SEARCH_COUNTRIES;

  constructor(){};
}

export class SearchCountriesSuccess implements Action {
  readonly type = SEARCH_COUNTRIES_SUCCESS;

  constructor(public payload: Country[]){};
}

export class SearchSuccess implements Action {
  readonly type = SEARCH_SUCCESS;

  constructor(public payload: Employee[]){};
}

export class AddEmployee implements Action {
  readonly type = ADD;

  constructor(public payload: Employee){};
}

export class UpdateArea implements Action {
  readonly type = UPDATE_AREA;

  constructor(public payload: string){};
}

export type All
  = Search
   | SearchSuccess | AddEmployee | UpdateArea | SearchCountries | SearchCountriesSuccess;
