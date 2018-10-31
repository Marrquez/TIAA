import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as SearchActions from './search-actions';
import { EmployeeStoreService } from './services/employee-store.service';

@Injectable()
export class EmployeeEffects {
  // Listen for the 'SEARCH' action
  @Effect()
  search$: Observable<Action> = this.actions$.pipe(
    ofType(SearchActions.SEARCH),
    mergeMap((action: SearchActions.Search) =>
      this.employeeService.searchEmployees(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => new SearchActions.SearchSuccess(data)),
        // If request fails, dispatch failed action
        catchError(() => of({ type: 'FAILED' }))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private employeeService: EmployeeStoreService
  ) {}
}
