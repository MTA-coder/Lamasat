import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
