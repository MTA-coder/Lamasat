import { CRUDService } from 'src/app/services/crud.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBranch } from '../API-entities/branch';
export class BranchActions extends CRUDService<IBranch> {

    constructor(http: HttpClient) {
        super(http, 'employee/branch');
    }

    readBranch(): Observable<IBranch[]> {
        return this.readEntities(undefined, '/all');
    }

    createBranch(branch: IBranch): Observable<IBranch> {
        return this.createEntity(branch, '/create');
    }

    updateBranch(Id: number, form: any): Observable<any> {
        return this.updateQueryEntity(form, '/update/' + Id);
    }

    deleteBranch(Id: number): Observable<any> {
        return this.deleteEntity(Id, '/delete');
    }

    infoBranch(Id: number): Observable<any> {
        return this.readEntity(Id, '/find');
    }

}
