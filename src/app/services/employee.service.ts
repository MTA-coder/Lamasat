import { HttpClient } from "@angular/common/http";
import { EmployeeActions } from "../actions/employee-actions";
import { StorageService } from "./storage.service";
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";

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
}