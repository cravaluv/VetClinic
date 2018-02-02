import { Component, ViewChild } from '@angular/core';
import { OwnerService } from '../../core/services/owner.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Owner } from '../../core/models/owner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {

  customer: Owner = new Owner();

  submitted = false;

  busy = false;

  @ViewChild('ownerForm') form: any;

  constructor(private activeModal: NgbActiveModal, private ownerService: OwnerService, 
      private authService: AuthService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getCustomer();
  }

  checkValid() {
    this.submitted = true;
    if (this.form.valid) {
      this.busy = true;
      this.ownerService.update(this.customer).subscribe((data) => {
        this.customer = data as Owner;
        this.busy = false;
        this.activeModal.close();
      });
      this.submitted = false;
    }
  }

  getCustomer() {
    this.ownerService.getOwnerById(this.authService.getUserId()).subscribe((data) => {
      this.customer = data as Owner;
    },
      (error) => {
        console.log(error);
      });
  }

  onDismiss() {
    this.activeModal.dismiss();
  }
}
