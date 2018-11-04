import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/**
 * models
 * */
import { Country } from '../models/Country';

/**
 * global state
 * */
import { Store } from '@ngrx/store';
import * as SearchActions from '../search-actions';
import * as fromRoot from '../reducers';

@Injectable()
export class CountryStoreService {
  private API_PATH = 'https://restcountries.eu/rest/v2';
  countries: Observable<Country[]>;

  constructor(
    private http: Http,
    private store: Store<fromRoot.State>
  ) {
    this.countries = store.select(fromRoot.selectCountries);
  }

  /**
   * To find employees with the term
   * @params:{string: term to find}
   * */
  searchCountries() {
    this.store.dispatch(new SearchActions.SearchCountries());
  }

  /**
   * Get the countries list
   * @params: {}
   * */
  getCountries(): Observable<Country[]> {
    var params = "/all";
    var url = this.API_PATH + params;

    return this.http.get(`${url}`)
      .map(
        res =>
          res.json() || []
      );
  }
}
