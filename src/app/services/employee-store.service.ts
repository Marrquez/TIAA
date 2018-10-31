import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/**
 * models
 * */
import { Employee } from '../models/Employee';

@Injectable()
export class EmployeeStoreService {
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: Http) { }

  /**
   * Only for test the Globlal store and State
   * */
  searchEmployees(queryTitle: string): Observable<Employee[]> {
    return this.http.get(`${this.API_PATH}?q=${queryTitle}`)
      .map(
        res =>
          res.json().items || []
      );
  }
}
