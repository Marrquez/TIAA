import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as SearchActions from './search-actions';
import { EmployeeStoreService } from './services/employee-store.service';
import { CountryStoreService } from './services/country-store.service';

@Injectable()
export class EmployeeEffects {
  // Listen for the 'SEARCH' action
  @Effect()
  search$: Observable<Action> = this.actions$.pipe(
    ofType(SearchActions.SEARCH),
    mergeMap((action: SearchActions.Search) =>
      this.employeeService.getEmployees(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => new SearchActions.SearchSuccess(data)),
        // If request fails, dispatch failed action
        catchError(() => of({ type: 'FAILED' }))
      )
    )
  );

  @Effect()
  search_countries$: Observable<Action> = this.actions$.pipe(
    ofType(SearchActions.SEARCH_COUNTRIES),
    mergeMap((action: SearchActions.SearchCountries) =>
      this.countryService.getCountries().pipe(
        // If successful, dispatch success action with result
        map(data => new SearchActions.SearchCountriesSuccess(data)),
        // If request fails, dispatch failed action
        catchError(() => of({ type: 'FAILED' }))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private employeeService: EmployeeStoreService,
    private countryService: CountryStoreService
  ) {}
}
