import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

/**
 * services
 * */
import { EmployeeStoreService } from '../../services/employee-store.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit {
  constructor(
    private router: Router,
    private employeeService: EmployeeStoreService
  ) { };

  ngOnInit() {
  };

  /**
   * trigger: search event
   * @params: {DOMElement: target element}
   * */
  onSearch($event){
    var term = $event.target.value;
    this.employeeService.searchEmployees(term);
  };

  addEmployee(){
    this.router.navigate(['new-edit', {}]);
  };
}
