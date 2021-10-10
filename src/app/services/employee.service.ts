import { HttpClient } from "@angular/common/http";
import { EmployeeActions } from "../actions/employee-actions";
import { StorageService } from "./storage.service";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { IEmployee } from "../API-entities/employee";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    employeeRequests: EmployeeActions;

    constructor(http: HttpClient, storage: StorageService) {
        this.employeeRequests = new EmployeeActions(http);
    }

    getAllEmployees() {
        return this.employeeRequests.readEmployees().pipe(
            catchError((err) => {
                return throwError(err);
            })
        );
    }

    addEmployee(employee: IEmployee): Observable<IEmployee> {
        return this.employeeRequests.createEmployee(employee);
    }

    getDetailsEmployee(Id: number): Observable<IEmployee> {
        return this.employeeRequests.findEmployee(Id);
    }

    removeEmployee(Id: number): Observable<any> {
        return this.employeeRequests.deleteEmployee(Id);
    }

    updateInfoEmployee(Id: number, form: any): Observable<any> {
        return this.employeeRequests.updateEmployee(Id, form);
    }
}