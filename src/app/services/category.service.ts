import { HttpClient } from "@angular/common/http";
import { StorageService } from "./storage.service";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { CategoryActions } from "../actions/category-actions";
import { ICategory } from "../API-entities/category";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    categoryActions: CategoryActions;

    constructor(http: HttpClient, storage: StorageService) {
        this.categoryActions = new CategoryActions(http);
    }

    getAllCategories() {
        return this.categoryActions.readCategory().pipe(
            catchError((err) => {
                return throwError(err);
            })
        );
    }

    createCategory(category: ICategory): Observable<ICategory> {
        return this.categoryActions.createCategory(category);
    }

    removeCat(Id: number): Observable<any> {
        return this.categoryActions.deleteCategory(Id);
    }


    infoCat(Id: number): Observable<ICategory> {
        return this.categoryActions.infoCategory(Id);
    }

    updateCategory(Id: number, form: any): Observable<any> {
        return this.categoryActions.updateCategory(Id, form);
    }
}