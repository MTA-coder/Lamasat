import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/API-entities/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  headers = ['Name', 'Mobile', 'Gender', 'Department', 'Branch'];
  datasource: IEmployee[] = [];

  constructor(private _employeeService: EmployeeService) {
    this.fetchData();
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.getEmployees();
  }

  getEmployees() {
    this._employeeService.getAllEmployees().subscribe((response: any) => {
      response.data.forEach((element: IEmployee) => {
        this.datasource.push(element);
      });
      console.log(this.datasource);
    });
  }

}
