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
    CustomerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatOptionModule,
    MatTableModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
