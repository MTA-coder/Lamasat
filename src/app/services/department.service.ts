import { HttpClient } from "@angular/common/http";
import { StorageService } from "./storage.service";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { DepartmentActions } from "../actions/department-actions";
import { IDepartment } from "../API-entities/department";

@Injectable({
    providedIn: 'root'
})
export class DepartmentService {
    departmentActions: DepartmentActions;

    constructor(http: HttpClient, storage: StorageService) {
        this.departmentActions = new DepartmentActions(http);
    }

    getAllDepartments() {
        return this.departmentActions.readDepartment().pipe(
            catchError((err) => {
                return throwError(err);
            })
        );
    }

    createDept(dept: IDepartment): Observable<IDepartment> {
        return this.departmentActions.createDept(dept);
    }

    updateDepartment(Id: number, form: any): Observable<any> {
        return this.departmentActions.updateDept(Id, form);
    }

    removeDept(Id: number): Observable<any> {
        return this.departmentActions.removeDept(Id);
    }

    infoDepartment(Id: number): Observable<IDepartment> {
        return this.departmentActions.infoDept(Id);
    }
}