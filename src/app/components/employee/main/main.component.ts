import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/API-entities/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  headers = ['Name', 'Mobile', 'Gender', 'Department', 'Branch'];
  datasource: IEmployee[] = [];

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router
  ) {
    this.fetchData();
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.getEmployees();
  }

  getEmployees() {
    this._employeeService
      .getAllEmployees()
      .subscribe((response: any) => this.datasource = response.data);
  }

  GetEmployeeInfo(Id: number) {
    this._router.navigate(['employee/find', Id]);
  }

  DeleteEmployee(Id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this._employeeService.removeEmployee(Id).subscribe((response: any) => {
          Swal.fire(
            'Deleted!',
            'Your imaginary file has been deleted.',
            'success'
          )
          this.getEmployees();
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  routeToEdit(Id: number) {
    this._router.navigate(['/employee/form', Id]);
  }

}
