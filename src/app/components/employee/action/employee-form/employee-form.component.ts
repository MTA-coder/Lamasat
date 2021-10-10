import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IBranch } from 'src/app/API-entities/branch';
import { IDepartment } from 'src/app/API-entities/department';
import { IEmployee } from 'src/app/API-entities/employee';
import { BranchService } from 'src/app/services/branch.service';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  department: IDepartment[] = [];
  branch: IBranch[] = [];
  social: string[] = ['married', 'single', 'divorced'];
  gender: string[] = ['male', 'female'];
  salaryType: string[] = ['percentege', 'fixed'];

  employeeForm: FormGroup;
  employeeId: number;
  isUpdated: boolean;

  constructor(
    private _formBuilder: FormBuilder,
    private _departmentService: DepartmentService,
    private _branchService: BranchService,
    private _employeeService: EmployeeService,
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ) {

    this.InitialForm();
    this.fetchData();
    this.subscripeRoute();
  }

  ngOnInit(): void {
    this.InitialForm();
    this.fetchData();
    this.subscripeRoute();
  }

  subscripeRoute() {
    this._activeRoute.params.subscribe((params: Params) => {
      this.employeeId = +params['employeeId'];
      this.isUpdated = this.employeeId == undefined ? false : true;
      if (this.isUpdated) this.initialValueForm();
    });
  }

  initialValueForm() {
    this._employeeService.getDetailsEmployee(this.employeeId).subscribe((response: any) => {
      var employee: IEmployee = response.data;
      this.employeeForm.patchValue({
        full_name: employee.full_name,
        department_id: employee.department.name,
        branch_id: employee.branch.name,
        birthday: employee.birthday,
        gender: employee.gender,
        phone: employee.phone,
        address: employee.address,
        type_salary: employee.type_salary,
        default_salary: employee.department
      });
    });
  }

  fetchData() {
    this.fetchDepartments();
    this.fetchBranches();
  }

  fetchBranches() {
    this._branchService.getAllBranches().subscribe((response: any) => this.branch = response.data);
  }

  fetchDepartments() {
    this._departmentService.getAllDepartments().subscribe((response: any) => this.department = response.data);
  }

  initialFormDetails() {

    this._activeRoute.params.subscribe((params: Params) => {
      var employee_id = +params['employeeId'];
      if (employee_id != undefined)
        this._employeeService.getDetailsEmployee(employee_id).subscribe((response: any) => {
          console.log()
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
      default_salary: [0, Validators.min(0)],
      user_scope: ["Employee"]
    }));
  }

  Submit(data) {
    if (this.employeeForm.valid) {

      if (this.isUpdated) {
        this._employeeService.updateInfoEmployee(this.employeeId, this.employeeForm.value).subscribe((response: any) => {
          this._router.navigateByUrl('employee/all');
        });
      } else {
        this._employeeService.addEmployee(data).subscribe((response: any) => {
          this._router.navigateByUrl('employee/all');
        });
      }

    }
  }

}
