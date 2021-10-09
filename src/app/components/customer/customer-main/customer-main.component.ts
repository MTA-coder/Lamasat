import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICustomer } from 'src/app/API-entities/customer';
import { CustomerService } from 'src/app/services/customer.service copy';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-main',
  templateUrl: './customer-main.component.html',
  styleUrls: ['./customer-main.component.scss']
})
export class CustomerMainComponent implements OnInit {
  headers = ['Name', 'Address', 'Serial', 'Phone', 'Type'];
  datasource: ICustomer[] = [];

  constructor(
    private _customerService: CustomerService,
    private _router: Router,
  ) {
    this.fetchData();
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.getCustomers();
  }

  getCustomers() {
    this._customerService
      .getAllCustomers()
      .subscribe((response: any) => this.datasource = response.data.data);
  }

  DeleteCustomer(Id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this._customerService.removeCustomer(Id).subscribe((response: any) => {
          Swal.fire(
            'Deleted!',
            'Your imaginary file has been deleted.',
            'success'
          )
          this.getCustomers();
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  routeToAdd() {
    this._router.navigate(['customer/add']);
  }

  GetCustomerInfo(Id: number) {
    this._router.navigate(['customer/find', Id]);
  }

}
