import { Component, OnInit } from '@angular/core';


export interface Employee {
  name: string;
  mobile: string;
  email: string;
  department: string;
  branch: string;
}

const element: Employee[] = [
  { name: "Tawfeq", email: "tawfeq@gmail.com", branch: "tech", department: "scetion", mobile: "+963 953429502" },
  { name: "Tawfeq", email: "tawfeq@gmail.com", branch: "tech", department: "scetion", mobile: "+963 953429502" },
  { name: "Tawfeq", email: "tawfeq@gmail.com", branch: "tech", department: "scetion", mobile: "+963 953429502" },
  { name: "Tawfeq", email: "tawfeq@gmail.com", branch: "tech", department: "scetion", mobile: "+963 953429502" },
  { name: "Tawfeq", email: "tawfeq@gmail.com", branch: "tech", department: "scetion", mobile: "+963 953429502" },
  { name: "Tawfeq", email: "tawfeq@gmail.com", branch: "tech", department: "scetion", mobile: "+963 953429502" },
  { name: "Tawfeq", email: "tawfeq@gmail.com", branch: "tech", department: "scetion", mobile: "+963 953429502" },
  { name: "Tawfeq", email: "tawfeq@gmail.com", branch: "tech", department: "scetion", mobile: "+963 953429502" },
  { name: "Tawfeq", email: "tawfeq@gmail.com", branch: "tech", department: "scetion", mobile: "+963 953429502" },
  { name: "Tawfeq", email: "tawfeq@gmail.com", branch: "tech", department: "scetion", mobile: "+963 953429502" },
]

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  headers = ['Name', 'Mobile', 'Email', 'Department', 'Branch'];
  datasource = element;

  constructor() { }

  ngOnInit(): void {
  }

}
