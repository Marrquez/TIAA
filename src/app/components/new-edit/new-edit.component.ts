import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

/**
 * models
 * */
import { Employee } from '../../models/Employee';

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
  private sub: any;
  private viewType = 'new';
  private employeeId = '';
  private pageTitle = 'New Employee';
  namesArray =  new FormArray([]);

  loginForm: FormGroup = this.builder.group({
    name: new FormControl('', Validators.required),
    dob: new FormControl(this.minAge, Validators.required),
    country: new FormControl('Afghanistan', Validators.required),
    username: new FormControl('', Validators.required),
    hireDate: new FormControl('', Validators.required),
    status:new FormControl(true, Validators.required),
    names: this.namesArray
  });

  constructor (
    private builder: FormBuilder,
    private router: Router,
    private countryService: CountryStoreService,
    private employeeService: EmployeeStoreService,
    private route: ActivatedRoute
  ) {
    this.minAge = new Date(this.today.getFullYear() - this.minAge, this.today.getMonth(), this.today.getDate());
  }

  ngOnInit() {
    this.countryService.searchCountries();

    this.sub = this.route.params.subscribe(params => {
      this.employeeId = params['employeeId'];
      this.viewType = params['viewType'] ? params['viewType'] : 'new';

      if(this.viewType && this.viewType === 'view'){
        this.loginForm.disable();
        this.getEmployeeById(this.employeeId);
      }else if(this.viewType && this.viewType === 'edit'){
        this.getEmployeeById(this.employeeId);
      }
    });
  }

  getEmployeeById(id: string){
    this.employeeService.getEmployee(id);
    this.employeeService.employee.subscribe(data => this.updateFormData(data));
  }

  updateFormData(data: Employee){
    if(data){
      this.loginForm.get('name').setValue(data.name);
      this.loginForm.get('dob').setValue(data.dob);
      this.loginForm.get('country').setValue(data.country);
      this.loginForm.get('username').setValue(data.username);
      this.loginForm.get('hireDate').setValue(data.hireDate);
      this.loginForm.get('status').setValue(data.status);
      this.employeeService.currentArea = data.area;
      this.employeeService.updateArea(data.area? "Services" : "Kitchen");
      this.employeeService.currentJobTitle = data.jobTitle;
      this.employeeService.currentTipRate = data.tipRate;
    }

    this.setPageTitle();
  }

  setPageTitle(){
    switch(this.viewType){
      case 'view':
        this.pageTitle = 'Employee Info';
        break;

      case 'edit':
        this.pageTitle = 'Editing: ' + this.loginForm.get('name').value;
        break;

      default:
        this.pageTitle = 'New Employee';
        break;
    }
  }


  createEditEmployee() {
    if(this.loginForm.status === 'VALID'){
      var newEmployee = this.loginForm.value;
      newEmployee.id = this.viewType === 'new' ? this.getID() : this.employeeId;
      newEmployee.jobTitle = this.employeeService.currentJobTitle;
      newEmployee.area = this.employeeService.currentArea;
      newEmployee.tipRate = this.employeeService.currentTipRate;

      this.employeeService.addEmployee(newEmployee);

      this.router.navigate(['dashboard', {}]);
    }else{
      console.log("All fields are required");
    }
  }

  getID(){
    return  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  goBack(){
    this.router.navigate(['dashboard', {}]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
