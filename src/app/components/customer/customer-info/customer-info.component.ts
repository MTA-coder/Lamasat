import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ICustomer } from 'src/app/API-entities/customer';
import { CustomerService } from 'src/app/services/customer.service copy';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {

  type: string[] = ["partner", "big", "small", "direct"];

  customerForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _customerService: CustomerService,
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.initialForm();
  }

  ngOnInit(): void {
    this.initialForm();
    this.initialFormDetails();
  }


  initialFormDetails() {

    this._activeRoute.params.subscribe((params: Params) => {
      var customer_id = +params['customerId'];
      if (customer_id != undefined)
        this._customerService.getDetailsCustomer(customer_id).subscribe((response: any) => {
          var cusomter: ICustomer = response.data;
          this.customerForm.patchValue({
            serial: cusomter.serial,
            type: cusomter.type,
            name: cusomter.name,
            email: cusomter.email,
            phone: cusomter.phone,
            phone2: cusomter.phone2,
            address: cusomter.address,
            is_charge: cusomter.is_charge == true ? "true" : "false",
            note: cusomter.note
          });
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

  GetCustomerInfo(Id: number) {

    this._router.navigate(['customer/find', Id]);

  }

  Submit(data) {
    console.log(data);
  }
}
