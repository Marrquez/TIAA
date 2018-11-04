import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    name: new FormControl(''),
    dob: new FormControl(''),
    country: new FormControl(''),
    tipRate: new FormControl(''),
    username: new FormControl(''),
    hireDate: new FormControl(''),
    status:new FormControl({value: 'n/a', disabled: false}),
    names: this.namesArray
  });

  constructor (
    private builder: FormBuilder,
    private router: Router
  ) {
    this.minAge = new Date(this.today.getFullYear() - this.minAge, this.today.getMonth(), this.today.getDate());
  }

  login() {
    console.log(this.loginForm.value);
    console.log(this.loginForm.status);
    // Attempt Logging in...
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
