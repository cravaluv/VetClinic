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
  animals: Animal[] = [];
  selected: Animal;
  animalsFetched = false;
  busy = false;

  @ViewChild('ownerForm') form: any;

  submitted = false;

  constructor(private activeModal: NgbActiveModal, private modalService: NgbModal, private ownerService: OwnerService) {
  }

  ngOnInit(): void {
    this.editMode ? this.modelCopy = _.clone(this.model) : this.modelCopy = new Owner();
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
    const previousAnimal = animal;
    modal.componentInstance.model = animal;

    modal.result.then((result) => {
      this.modelCopy.animals[this.modelCopy.animals.indexOf(previousAnimal)] = result;
      // this.ownerService.update(result);
    }, (reason) => {
    });
  }

  addAnimal() {
    const modal = this.modalService.open(PetEditComponent, { size: 'lg' });
    modal.componentInstance.mode = 'NEW';

    modal.result.then((result) => {
      this.modelCopy.animals.push(result);
    }, (reason) => {
    });
  }
}
