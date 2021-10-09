import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service copy';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  type: string[] = ["partner", "big", "small", "direct"];

  customerForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _customerService: CustomerService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.initialForm();
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
    this.customerForm.patchValue({
      is_charge: this.customerForm.get('is_charge').value == "true" ? true : false
    });
    if (this.customerForm.valid) {
      this._customerService.addCustomer(this.customerForm.value).subscribe((response: any) => {
        this._router.navigate(['customer/all']);
      });
    }
  }

}
