import { Component, Input, ViewChild } from '@angular/core';
import { OwnerService } from '../../core/services/owner.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Owner } from '../../core/models/owner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import * as _ from 'lodash';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Animal } from '../../core/models/animal';
import { PetEditComponent } from '../pet/pet-edit.component';

@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html',
})
export class OwnerEditComponent implements OnInit {

  @Input() model: Owner;
  @Input() editMode = true;

  modelCopy: Owner;
  selected: Animal;

  @ViewChild('ownerForm') form: any;

  submitted = false;

  constructor(private activeModal: NgbActiveModal, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.modelCopy = _.clone(this.model);
  }

  registerChange() {
    this.modelCopy.onlineReg = !this.modelCopy.onlineReg;
    this.form.controls['login'].setValidators(this.modelCopy.onlineReg ? Validators.required : null);
    this.form.controls['login'].updateValueAndValidity();
    this.form.controls['password'].setValidators(this.modelCopy.onlineReg ? Validators.required : null);
    this.form.controls['password'].updateValueAndValidity();
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.activeModal.close(this.modelCopy);
    }
  }

  onDismiss() {
    this.activeModal.dismiss();
  }


  update(animal: Animal) {
    const modal = this.modalService.open(PetEditComponent, { size: 'lg' });
    modal.componentInstance.model = animal;

    modal.result.then((result) => {
      // this.ownerService.update(result);
    }, (reason) => {
    });
  }

  addAnimal() {

  }

  deleteAnimal() {

  }
}
