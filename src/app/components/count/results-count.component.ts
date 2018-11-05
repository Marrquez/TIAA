import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/**
 * services
 * */
import { EmployeeStoreService } from '../../services/employee-store.service';

@Component({
  selector: 'app-results-count',
  templateUrl: './results-count.component.html',
  styleUrls: ['./results-count.component.less']
})
export class ResultsCountComponent implements OnInit {
  constructor(private employeeService: EmployeeStoreService) { }

  ngOnInit() { }
}
