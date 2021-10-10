import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ICustomer } from 'src/app/API-entities/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  type: string[] = ["partner", "big", "small", "direct"];

  customerForm: FormGroup;
  customerId: number;
  isUpdated: boolean;

  constructor(
    private _formBuilder: FormBuilder,
    private _customerService: CustomerService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.subscripeRoute();
  }

  ngOnInit(): void {
    this.initialForm();
    this.subscripeRoute();
  }

  subscripeRoute() {
    this._activatedRoute.params.subscribe((params: Params) => {
      this.customerId = params['customerId'];
      this.isUpdated = this.customerId == undefined ? false : true;
      if (this.isUpdated) {
        this.customerId = +this.customerId;
        this.initialValueForm();
      }
    });
  }

  initialValueForm() {
    this._customerService.getDetailsCustomer(this.customerId).subscribe((response: any) => {
      var customer: ICustomer = response.data;
      this.customerForm.patchValue({
        serial: customer.serial,
        type: customer.type,
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        phone2: customer.phone2,
        address: customer.address,
        is_charge: customer.is_charge ? "yes" : "no",
        note: customer.note
      });
    });
  }

  initialForm() {
    this.customerForm = this._formBuilder.group({
      serial: [null, Validators.required],
      type: [null, Validators.nullValidator],
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required],
      phone2: [null, Validators.nullValidator],
      address: [null, Validators.nullValidator],
      is_charge: [null],
      note: [null, Validators.nullValidator],
    });
  }

  Submit(data) {

    if (this.customerForm.valid) {

      this.customerForm.patchValue({
        is_charge: this.customerForm.get('is_charge').value == "true" ? true : false
      });

      if (this.isUpdated) {
        this._customerService.updateCustomerInformation(this.customerId, this.customerForm.value).subscribe((response: any) => {
          this._router.navigate(['customer/all']);
        });
      } else {
        this._customerService.addCustomer(this.customerForm.value).subscribe((response: any) => {
          this._router.navigate(['customer/all']);
        });
      }
    }


  }

}
