import { CRUDService } from 'src/app/services/crud.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../API-entities/employee';
export class EmployeeActions extends CRUDService<IEmployee> {
    constructor(http: HttpClient) {
        super(http, 'employee');
    }

    createEmployee(employee: IEmployee): Observable<any> {
        return this.createEntity(employee, '/create')
    }

    readEmployees(): Observable<IEmployee[]> {
        return this.readEntities(undefined, '/all');
    }

    updateEmployee(employee: IEmployee) {
        this.updateEntity(employee.id, employee, '/update');
    }

    findEmployee(Id: number): Observable<IEmployee> {
        return this.readEntity(Id, '/find');
    }

    deleteEmployee(Id: number): Observable<any> {
        return this.deleteEntity(Id, '/delete');
    }
}
