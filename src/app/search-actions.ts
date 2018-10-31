import { Action } from '@ngrx/store';
import { Employee } from './models/Employee'

/**
 * action types
 * */
export const SEARCH = '[Employees] Search';
export const SEARCH_SUCCESS = '[Employees] Search Success';
export const ADD = '[Employees] Add';

/**
 * Actions
 * */
export class Search implements Action {
  readonly type = SEARCH;

  constructor(public payload: string){};
}

export class SearchSuccess implements Action {
  readonly type = SEARCH_SUCCESS;

  constructor(public payload: Employee[]){};
}

export class AddEmployee implements Action {
  readonly type = ADD;

  constructor(public payload: Employee){};
}

export type All
  = Search
   | SearchSuccess | AddEmployee;
