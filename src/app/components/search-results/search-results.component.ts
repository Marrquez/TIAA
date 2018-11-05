import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

/**
 * models
 * */
import { Employee } from '../../models/Employee';

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
  private sCol:string = 'name';
  constructor(
    private employeeService: EmployeeStoreService,
    private router: Router
  ) { }

  ngOnInit() { }

  addEmployee(){
    this.router.navigate(['new-edit', {}]);
  };

  editEmployee(emp: Employee){
    this.router.navigate(['new-edit', {viewType: 'edit', employeeId: emp.id}]);
  };

  viewEmployee(emp: Employee){
    this.router.navigate(['new-edit', {viewType: 'view', employeeId: emp.id}]);
  };

  deleteEmployee(emp: Employee){
    console.log(emp);
  };

  sortColumn(columnId: string){
    var sortType = "";

    if(this.employeeService.sortColumn.charAt(0) != "!"){
      if(this.employeeService.sortColumn === columnId){
        sortType = "!";
      }
    }

    this.employeeService.sortColumn = this.sCol = sortType + columnId;
  }
}
