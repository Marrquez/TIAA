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
  constructor(
    private employeeService: EmployeeStoreService,
    private router: Router,
    public dialog: MatDialog
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
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {employee: emp}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
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
