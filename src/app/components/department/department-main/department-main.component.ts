import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalManager } from 'ngb-modal';
import { IDepartment } from 'src/app/API-entities/department';
import { DepartmentService } from 'src/app/services/department.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-department-main',
  templateUrl: './department-main.component.html',
  styleUrls: ['./department-main.component.scss']
})
export class DepartmentMainComponent implements OnInit {

  headers = ['DepartmentName', 'Note'];
  datasource: IDepartment[] = [];

  departmentGroup: FormGroup;

  departmentId: number;
  isUpdated: boolean = false;

  private modalRef;

  constructor(
    private _departmentService: DepartmentService,
    private _modalService: ModalManager
    , private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initialForm();
    this.fetchData();
  }

  initialForm() {
    this.departmentGroup = this._formBuilder.group({
      name: [null, Validators.required],
      note: [null, Validators.nullValidator],
    });
  }

  fetchData() {
    this.getDepartments();
  }

  getDepartments() {
    this._departmentService.getAllDepartments().subscribe((response: any) => {
      this.datasource = response.data;
    });
  }

  Show(content, updated, Id: number) {
    this.isUpdated = updated;
    if (this.isUpdated) {
      this.departmentId = Id;
      this.initialValueDepartment(Id);
    }
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
    if (this.departmentGroup.valid) {
      if (this.isUpdated) {
        this._departmentService.updateDepartment(this.departmentId, this.departmentGroup.value).subscribe((response: any) => {
          this.getDepartments();
          this.closeModal();
        });
      } else {

        this._departmentService.createDept(data).subscribe((response: any) => {
          this.getDepartments();
          this.closeModal();
        });
      }

    }

  }

  DeleteDept(Id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this._departmentService.removeDept(Id).subscribe((response: any) => {
          Swal.fire(
            'Deleted!',
            'Your imaginary file has been deleted.',
            'success'
          )
        });
        this.getDepartments();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  initialValueDepartment(Id: number) {
    this._departmentService.infoDepartment(Id).subscribe((response: any) => {
      var department: IDepartment = response.data;
      this.departmentGroup.patchValue({
        name: department.name,
        note: department.note,
      });
    });
  }

}
