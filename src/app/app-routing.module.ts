import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './components/employee/action/employee-form/employee-form.component';
import { MainComponent } from './components/employee/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  {
    path: "login", component: LoginComponent
  }, {
    path: "main/employee", component: MainPageComponent
  }, {
    path: "main/employee/add", component: EmployeeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
