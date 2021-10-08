import { CRUDService } from 'src/app/services/crud.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../API-entities/employee';
export class EmployeeActions extends CRUDService<IEmployee> {
    constructor(http: HttpClient) {
        super(http, 'employee');
    }

    createEmployee(employee: IEmployee) {
        this.createEntity(employee, '/create')
    }

    readEmployees(): Observable<IEmployee[]> {
        return this.readEntities(undefined, '/all');
    }

    updateEmployee(employee: IEmployee) {
        this.updateEntity(employee.Id, employee, '/update');
    }

    deleteEmployee(employee: IEmployee) {
        this.deleteEntity(employee.Id, '/delete');
    }
}
