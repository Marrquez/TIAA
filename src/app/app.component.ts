import { Component } from '@angular/core';

/**
 * services
 * */
import { EmployeeStoreService } from './services/employee-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'TIAA';

  constructor(
    private employeeService: EmployeeStoreService
  ){ };
}
