import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalManager } from 'ngb-modal';
import { ICategory } from 'src/app/API-entities/category';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-main',
  templateUrl: './category-main.component.html',
  styleUrls: ['./category-main.component.scss']
})
export class CategoryMainComponent implements OnInit {

  headers = ['CategoryName', 'Description'];
  datasource: ICategory[] = [];

  categoryGroup: FormGroup;

  private modalRef;

  isUpdated: boolean = false;
  categoryId: number;

  constructor(
    private _categoryService: CategoryService,
    private _modalService: ModalManager,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initialForm();
    this.fetchData();
  }

  initialForm() {
    this.categoryGroup = this._formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.nullValidator],
    });
  }

  fetchData() {
    this.getCategories();
  }

  getCategories() {
    this._categoryService.getAllCategories().subscribe((response: any) => {
      this.datasource = response.data;
    });
  }

  Show(content, updated: boolean, Id: number) {

    this.isUpdated = updated;
    if (this.isUpdated) { this.categoryId = Id; this.initialValueCategory(Id); }

    this.modalRef = this._modalService.open(content, {
      size: "md",
      modalClass: 'mymodal',
      hideCloseButton: false,
      centered: false,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: true,
      backdropClass: "modal-backdrop"
    });
  }

  closeModal() {
    this._modalService.close(this.modalRef);
  }

  Submit(data) {

    if (this.categoryGroup.valid) {
      if (this.isUpdated) {
        this._categoryService.updateCategory(this.categoryId, this.categoryGroup.value).subscribe((response: any) => {
          this.getCategories();
          this.closeModal();
        });
      } else {
        this._categoryService.createCategory(data).subscribe((response: any) => {
          this.getCategories();
          this.closeModal();
        });
      }
    }
  }

  DeleteCat(Id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this._categoryService.removeCat(Id).subscribe((response: any) => {
          Swal.fire(
            'Deleted!',
            'Your imaginary file has been deleted.',
            'success'
          )
        });
        this.getCategories();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  initialValueCategory(Id) {
    this._categoryService.infoCat(Id).subscribe((response: any) => {
      var category: ICategory = response.data;
      this.categoryGroup.patchValue({
        name: category.name,
        description: category.description,
      });
    });
  }

}
