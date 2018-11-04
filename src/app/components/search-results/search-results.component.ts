import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

/**
 * services
 * */
import { EmployeeStoreService } from '../../services/employee-store.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.less']
})
export class SearchResultsComponent implements OnInit {
  constructor(
    private employeeService: EmployeeStoreService,
    private router: Router
  ) { }

  ngOnInit() { }

  addElement(){
    this.router.navigate(['new-edit', {}]);
  };
}
