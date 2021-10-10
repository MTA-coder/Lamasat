import { CRUDService } from 'src/app/services/crud.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../API-entities/category';
export class CategoryActions extends CRUDService<ICategory> {
    constructor(http: HttpClient) {
        super(http, 'management/category');
    }

    readCategory(): Observable<ICategory[]> {
        return this.readEntities(undefined, '/all');
    }

    createCategory(category: ICategory): Observable<ICategory> {
        return this.createEntity(category, '/create');
    }

    deleteCategory(Id: number): Observable<any> {
        return this.deleteEntity(Id, '/delete');
    }

    updateCategory(Id: number, form: any): Observable<any> {
        return this.updateQueryEntity(form, '/update/' + Id);
    }

    infoCategory(Id: number): Observable<any> {
        return this.readEntity(Id, '/find');
    }

}
