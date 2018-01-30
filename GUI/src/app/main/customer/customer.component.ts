import { Component, ViewChild } from '@angular/core';
import { OwnerService } from '../../core/services/owner.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Owner } from '../../core/models/owner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {

  customer: Owner = new Owner();

  submitted = false;

  @ViewChild('ownerForm') form: any;

  constructor(private ownerService: OwnerService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getCustomer();
  }

  registerChange() {
    this.customer.onlineReg = !this.customer.onlineReg;
    this.form.controls['login'].setValidators(this.customer.onlineReg ? Validators.required : null);
    this.form.controls['login'].updateValueAndValidity();
    this.form.controls['password'].setValidators(this.customer.onlineReg ? Validators.required : null);
    this.form.controls['password'].updateValueAndValidity();
  }

  checkValid() {
    this.submitted = true;
    if (this.form.valid) {
      this.ownerService.update(this.customer);
      this.getCustomer();
      this.submitted = false;
    }
  }

  update() {
    this.ownerService.update(this.customer);
  }

  getCustomer() {
    // this.ownerService.getOwnerById(customerId).subscribe((data) => {
    //   this.customer = data as Owner;
    // },
    //   (error) => {
    //     console.log(error);
    //   });
  }
}
