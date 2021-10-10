import { CRUDService } from 'src/app/services/crud.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICustomer } from '../API-entities/customer';
export class CustomerActions extends CRUDService<ICustomer> {
    constructor(http: HttpClient) {
        super(http, 'customer');
    }

    readCustomer(): Observable<ICustomer[]> {
        return this.readEntities(undefined, '/all');
    }

    createCustomer(Customer: ICustomer): Observable<ICustomer> {
        return this.createEntity(Customer, '/create');
    }

    findCustomer(Id: number): Observable<ICustomer> {
        return this.readEntity(Id, '/find');
    }

    updateCustomer(Id: number, form: any): Observable<any> {
        return this.updateQueryEntity(form, '/update/' + Id);
    }

    deleteCustomer(Id: number): Observable<any> {
        return this.deleteEntity(Id, '/delete');
    }

}
