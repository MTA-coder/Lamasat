import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  department: string[] = ['tech', 'science', 'architecture'];
  social: string[] = ['married', 'single', 'divorced'];
  gender: string[] = ['male', 'female'];
  branch: string[] = ['office', 'company'];
  salaryType: string[] = ['employee', 'manager'];

  employeeForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.InitialForm();
  }

  ngOnInit(): void {
    this.InitialForm();
  }

  InitialForm() {
    this.employeeForm = this._formBuilder.group(({
      full_name: [null, Validators.required],
      department: null,
      birth: [null, Validators.required],
      social: null,
      username: null,
      gender: null,
      status: null,
      password: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      branch: null,
      address: null,
      salaryType: null,
      percentage: null,
      note: null,
      salary: [0, Validators.min(0)]
    }));
  }

  Submit() {

  }

}
