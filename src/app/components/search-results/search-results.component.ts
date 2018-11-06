import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

/**
 * models
 * */
import { Employee } from '../../models/Employee';

/**
 * services
 * */
import { EmployeeStoreService } from '../../services/employee-store.service';

/**
 * confirm dialog data
 * */
export interface DialogData {
  employee: Employee;
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.less']
})
export class SearchResultsComponent implements OnInit {
  private sCol:string = 'name';
  private showBanner:boolean = true;
  constructor(
    private employeeService: EmployeeStoreService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.employeeService.employees.subscribe(data =>
      this.showBanner = data.length > 0
    );
  }

  ngOnInit() {}

  /**
   * navigate to new-edit view
  * */
  addEmployee(){
    this.router.navigate(['new-edit', {}]);
  };

  /**
   * action: navigate to edit view mode
   * @params: {id: employee id}
   * */
  editEmployee(id: string){
    this.router.navigate(['new-edit', {viewType: 'edit', employeeId: id}]);
  };

  /**
   * action: navigate to view mode
   * @params: {id: employee id}
   * */
  viewEmployee(id: string){
    this.router.navigate(['new-edit', {viewType: 'view', employeeId: id}]);
  };

  /**
   * delete the given employee
   * @params: {employee: employee data}
   * */
  deleteEmployee(emp: Employee){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {employee: emp}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  };

  /**
   * sort by selected column
   * @params: {column: column id}
   * */
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

@Component({
  selector: 'confirm-dialog',
  templateUrl: 'confirm-dialog.html',
  styleUrls: ['./confirm-dialog.component.less']
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private employeeService: EmployeeStoreService
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteEmployee(id:string){
    this.employeeService.deleteEmployee(id);
    this.dialogRef.close();
  }
}
