import { CRUDService } from 'src/app/services/crud.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDepartment } from '../API-entities/department';
export class DepartmentActions extends CRUDService<IDepartment> {
    constructor(http: HttpClient) {
        super(http, 'employee/department');
    }

    readDepartment(): Observable<IDepartment[]> {
        return this.readEntities(undefined, '/all');
    }

    createDept(dept: IDepartment): Observable<IDepartment> {
        return this.createEntity(dept, "/create");
    }

    updateDept(Id: number, form: any): Observable<any> {
        return this.updateQueryEntity(form, '/update/' + Id);
    }

    removeDept(Id: number): Observable<any> {
        return this.deleteEntity(Id, "/delete");
    }

    infoDept(Id: number): Observable<any> {
        return this.readEntity(Id, '/find');
    }

}
