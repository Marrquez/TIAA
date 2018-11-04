import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/**
 * services
 * */
import { EmployeeStoreService } from '../../services/employee-store.service';

@Component({
  selector: 'app-job-title',
  templateUrl: './job-title.component.html',
  styleUrls: ['./job-title.component.less']
})
export class JobTitleComponent implements OnInit {
  constructor(
    private employeeService: EmployeeStoreService
  ) { }

  ngOnInit() { }

}
