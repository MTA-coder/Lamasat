import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  department: string[] = ['tech', 'science', 'architecture'];
  social: string[] = ['married', 'single', 'divorced'];
  gender: string[] = ['male', 'female'];
  branch: string[] = ['office', 'company'];
  salaryType: string[] = ['employee', 'manager'];

  constructor() { }

  ngOnInit(): void {
  }

}
