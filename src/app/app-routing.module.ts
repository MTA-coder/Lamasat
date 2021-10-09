import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchesMainComponent } from './components/branches/branches-main/branches-main.component';
import { CategoryMainComponent } from './components/category/category-main/category-main.component';
import { CustomerFormComponent } from './components/customer/customer-form/customer-form.component';
import { CustomerInfoComponent } from './components/customer/customer-info/customer-info.component';
import { CustomerMainComponent } from './components/customer/customer-main/customer-main.component';
import { DepartmentMainComponent } from './components/department/department-main/department-main.component';
import { EmployeeFormComponent } from './components/employee/action/employee-form/employee-form.component';
import { EmployeeInfoComponent } from './components/employee/action/employee-info/employee-info.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  {
    path: "login", component: LoginComponent
  }, {
    path: "employee/all", component: MainPageComponent
  }, {
    path: "employee/form", component: EmployeeFormComponent
  }, {
    path: "employee/form/:employeeId", component: EmployeeFormComponent
  }
  , {
    path: "employee/find/:employeeId", component: EmployeeInfoComponent
  }, {
    path: "branches/all", component: BranchesMainComponent
  }, {
    path: "department/all", component: DepartmentMainComponent
  }, {
    path: "category/all", component: CategoryMainComponent
  }, {
    path: "customer/all", component: CustomerMainComponent
  }
  , {
    path: "customer/add", component: CustomerFormComponent
  }
  , {
    path: "customer/find/:customerId", component: CustomerInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
