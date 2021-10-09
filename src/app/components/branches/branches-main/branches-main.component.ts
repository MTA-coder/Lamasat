import { Component, NgModuleRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalManager } from 'ngb-modal';
import { IBranch } from 'src/app/API-entities/branch';
import { BranchService } from 'src/app/services/branch.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-branches-main',
  templateUrl: './branches-main.component.html',
  styleUrls: ['./branches-main.component.scss']
})
export class BranchesMainComponent implements OnInit {

  headers = ['BranchName', 'Note', 'location'];
  datasource: IBranch[] = [];

  branchGroup: FormGroup;

  private modalRef;

  isUpdated: boolean = false;
  branchId: number;

  constructor(
    private _branchService: BranchService,
    private _modalService: ModalManager,
    private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initialForm();
    this.fetchData();
  }

  initialForm() {
    this.branchGroup = this._formBuilder.group({
      name: [null, Validators.required],
      note: [null, Validators.nullValidator],
      location: [null, Validators.nullValidator]
    });
  }

  fetchData() {
    this.getBranches();
  }

  getBranches() {
    this._branchService.getAllBranches().subscribe((response: any) => {
      this.datasource = response.data;
    });
  }

  Show(content, updated: boolean, Id: number) {
    this.isUpdated = updated;
    if (this.isUpdated) { this.branchId = Id; this.initialValueBranch(Id); }

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

    if (this.isUpdated) {
      this._branchService.updateBranch(this.branchId, this.branchGroup.value).subscribe((response: any) => {
        this.getBranches();
        this._modalService.close(this.modalRef);
      });
    } else {

      this._branchService.addBranch(data).subscribe((response: any) => {
        this.getBranches();
        this._modalService.close(this.modalRef);
      });
    }

  }

  DeleteBranch(Id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this._branchService.removeBranch(Id).subscribe((response: any) => {
          Swal.fire(
            'Deleted!',
            'Your imaginary file has been deleted.',
            'success'
          )
        });
        this.getBranches();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  initialValueBranch(Id: number) {
    this._branchService.infoBranch(Id).subscribe((response: any) => {
      var branch: IBranch = response.data;
      this.branchGroup.patchValue({
        name: branch.name,
        note: branch.note,
        location: branch.location
      });
    });
  }


}
