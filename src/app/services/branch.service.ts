import { HttpClient } from "@angular/common/http";
import { StorageService } from "./storage.service";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { BranchActions } from "../actions/branch-actions";
import { IBranch } from "../API-entities/branch";

@Injectable({
    providedIn: 'root'
})
export class BranchService {
    branchActions: BranchActions;

    constructor(http: HttpClient, storage: StorageService) {
        this.branchActions = new BranchActions(http);
    }

    getAllBranches() {
        return this.branchActions.readBranch().pipe(
            catchError((err) => {
                return throwError(err);
            })
        );
    }

    addBranch(branch: IBranch): Observable<IBranch> {
        return this.branchActions.createBranch(branch);
    }

    updateBranch(Id: number, form: any): Observable<any> {
        return this.branchActions.updateBranch(Id, form);
    }

    removeBranch(Id: number): Observable<any> {
        return this.branchActions.deleteBranch(Id);
    }

    infoBranch(Id: number): Observable<IBranch> {
        return this.branchActions.infoBranch(Id);
    }
}