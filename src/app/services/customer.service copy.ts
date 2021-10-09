import { HttpClient } from "@angular/common/http";
import { StorageService } from "./storage.service";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { CustomerActions } from "../actions/customer-actions";
import { ICustomer } from "../API-entities/customer";
import { Icu } from "@angular/compiler/src/i18n/i18n_ast";

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    customerRequests: CustomerActions;

    constructor(http: HttpClient, storage: StorageService) {
        this.customerRequests = new CustomerActions(http);
    }

    getAllCustomers() {
        return this.customerRequests.readCustomer().pipe(
            catchError((err) => {
                return throwError(err);
            })
        );
    }

    addCustomer(customer: ICustomer): Observable<ICustomer> {
        return this.customerRequests.createCustomer(customer);
    }

    getDetailsCustomer(Id: number): Observable<ICustomer> {
        return this.customerRequests.findCustomer(Id);
    }

    removeCustomer(Id: number): Observable<any> {
        return this.customerRequests.deleteCustomer(Id);
    }
}