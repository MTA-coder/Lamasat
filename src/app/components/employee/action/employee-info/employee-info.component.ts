import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { IBranch } from 'src/app/API-entities/branch';
import { IDepartment } from 'src/app/API-entities/department';
import { IEmployee } from 'src/app/API-entities/employee';
import { BranchService } from 'src/app/services/branch.service';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit {


  department: IDepartment[] = [];
  branch: IBranch[] = [];
  social: string[] = ['married', 'single', 'divorced'];
  gender: string[] = ['male', 'female'];
  salaryType: string[] = ['percentege', 'fixed'];

  employeeForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _departmentService: DepartmentService,
    private _branchService: BranchService,
    private _employeeService: EmployeeService,
    private _activeRoute: ActivatedRoute,
  ) {
    this.InitialForm();
    this.fetchData();
  }

  ngOnInit(): void {
    this.InitialForm();
    this.fetchData();
    this.initialFormDetails();
  }

  fetchData() {
    this.fetchDepartments();
    this.fetchBranches();
  }

  fetchBranches() {
    this._branchService.getAllBranches().subscribe((response: any) => {
      response.data.forEach((element: IBranch) => {
        this.branch.push(element);
      });
    });
  }

  fetchDepartments() {
    this._departmentService.getAllDepartments().subscribe((response: any) => {
      response.data.forEach((element: IDepartment) => {
        this.department.push(element);
      });
    });
  }

  initialFormDetails() {

    this._activeRoute.params.subscribe((params: Params) => {
      var employee_id = +params['employeeId'];
      if (employee_id != undefined)
        this._employeeService.getDetailsEmployee(employee_id).subscribe((response: any) => {
          var employee: IEmployee = response.data;
          console.log(employee);
          this.employeeForm.patchValue({
            full_name: employee.full_name,
            department_id: employee.department.name,
            branch_id: employee.branch.name,
            birthday: employee.birthday,
            //social: employee.,
            //username: null,
            gender: employee.gender,
            //status: employee.satat,
            //password: employee.,
            phone: employee.phone,
            address: employee.address,
            type_salary: employee.type_salary,
            //percentage: employee.per,
            //note: [null],
            default_salary: employee.department
          });
        });
    });


  }

  setValueForm(data: IEmployee) {

  }

  InitialForm() {
    this.employeeForm = this._formBuilder.group(({
      full_name: [null, Validators.required],
      department_id: [null],
      branch_id: [null],
      birthday: [null, Validators.required],
      social: [null],
      username: null,
      gender: [null],
      status: null,
      password: [null, Validators.required],
      phone: [null, Validators.required],
      address: [null],
      type_salary: [null],
      percentage: [null],
      note: [null],
      default_salary: [0, Validators.min(0)]
    }));
  }

  Submit(data) {
    this._employeeService.addEmployee(data).subscribe((response: any) => {
      console.log(response.data);
    });
  }



}
