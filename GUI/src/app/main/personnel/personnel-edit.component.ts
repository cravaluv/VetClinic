import { Component, Input, ViewChild } from '@angular/core';
import { OwnerService } from '../../core/services/owner.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Personnel } from '../../core/models/personnel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import * as _ from 'lodash';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-personnel-edit',
  templateUrl: './personnel-edit.component.html',
})
export class PersonnelEditComponent implements OnInit {

  @Input() model: Personnel;
  @Input() editMode = true;

  modelCopy: Personnel;

  @ViewChild('ownerForm') form: any;

  submitted = false;

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.modelCopy = _.clone(this.model);
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

  addAnimal() {

  }

  deleteAnimal() {

  }
}
