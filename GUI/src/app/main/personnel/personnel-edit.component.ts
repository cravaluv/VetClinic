import { Component, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { OwnerService } from '../../core/services/owner.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Personnel } from '../../core/models/personnel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import * as _ from 'lodash';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CalendarEvent } from 'angular-calendar';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-personnel-edit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './personnel-edit.component.html',
})
export class PersonnelEditComponent implements OnInit {

  @Input() model: Personnel;
  @Input() editMode = true;

  modelCopy: Personnel;

  view = 'day';

  currentDateModel;
  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  @ViewChild('ownerForm') form: any;

  submitted = false;

  get today() {
    return new Date();
  }

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.modelCopy = _.clone(this.model);
  }

  onChangeDate(evnt) {
    this.viewDate = new Date(evnt.year, evnt.month, evnt.day);
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
