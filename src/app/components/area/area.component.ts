import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/**
 * services
 * */
import { EmployeeStoreService } from '../../services/employee-store.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.less']
})
export class AreaComponent implements OnInit {
  //private serviceArea: boolean = true;
  constructor(private employeeService: EmployeeStoreService) { }

  ngOnInit() {
  }

  updateArea(){
    var newArea = "Services";
    if(this.employeeService.currentArea){
      newArea = "Kitchen";
      this.employeeService.currentJobTitle = 'Chef';
    }else{
      this.employeeService.currentJobTitle = 'Manager';
    }

    this.employeeService.updateArea(newArea);
  }
}
