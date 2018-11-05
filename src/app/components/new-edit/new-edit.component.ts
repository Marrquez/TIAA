import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

/**
 * services
 * */
import { CountryStoreService } from '../../services/country-store.service';
import { EmployeeStoreService } from '../../services/employee-store.service';

@Component({
  selector: 'new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.less']
})
export class NewEditComponent {
  private minAge:any = 18;
  private today = new Date();
  namesArray =  new FormArray([]);

  loginForm: FormGroup = this.builder.group({
    name: new FormControl('', Validators.required),
    dob: new FormControl(this.minAge, Validators.required),
    country: new FormControl('Afghanistan', Validators.required),
    tipRate: new FormControl(0, Validators.required),
    username: new FormControl('', Validators.required),
    hireDate: new FormControl('', Validators.required),
    status:new FormControl(true, Validators.required),
    names: this.namesArray
  });

  constructor (
    private builder: FormBuilder,
    private router: Router,
    private countryService: CountryStoreService,
    private employeeService: EmployeeStoreService
  ) {
    this.minAge = new Date(this.today.getFullYear() - this.minAge, this.today.getMonth(), this.today.getDate());
  }

  ngOnInit() {
    this.countryService.searchCountries();
  }

  createEmployee() {
    if(this.loginForm.status === 'VALID'){
      var newEmployee = this.loginForm.value;
      newEmployee.id =  this.getID();
      this.employeeService.addEmployee(newEmployee);
      this.router.navigate(['dashboard', {}]);
    }else{
      console.log("All fields are required");
    }
  }

  getID(){
    return  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  add(){
    this.namesArray.push(
      new FormControl(this.loginForm.get('jobTitle').value)
    );
  }

  goBack(){
    this.router.navigate(['dashboard', {}]);
  }
}
