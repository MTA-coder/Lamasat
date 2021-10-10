import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MatInputModule } from '@angular/material/input';
import { EmployeeFormComponent } from './components/employee/action/employee-form/employee-form.component';
import { MainComponent } from './components/employee/main/main.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { AngularInputComponent } from './components/matarial/angular-input/angular-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { AngularDateComponent } from './components/matarial/angular-date/angular-date.component';
import { AngularSelectComponent } from './components/matarial/angular-select/angular-select.component';
import { CustomerFormComponent } from './components/customer/customer-form/customer-form.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/Auth/auth.interceptor';
import { EmployeeInfoComponent } from './components/employee/action/employee-info/employee-info.component';
import { BranchesMainComponent } from './components/branches/branches-main/branches-main.component';
import { ModalModule } from 'ngb-modal';
import { DepartmentMainComponent } from './components/department/department-main/department-main.component';
import { CategoryMainComponent } from './components/category/category-main/category-main.component';
import { CustomerMainComponent } from './components/customer/customer-main/customer-main.component';
import { CustomerInfoComponent } from './components/customer/customer-info/customer-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    EmployeeFormComponent,
    MainComponent,
    SidebarComponent,
    NavbarComponent,
    AngularInputComponent,
    AngularDateComponent,
    AngularSelectComponent,
    CustomerFormComponent,
    EmployeeInfoComponent,
    BranchesMainComponent,
    DepartmentMainComponent,
    CategoryMainComponent,
    CustomerMainComponent,
    CustomerInfoComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatOptionModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ]
})
export class AppModule { }
