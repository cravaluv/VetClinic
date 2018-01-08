import { Component, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { OwnerService } from '../../core/services/owner.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Personnel } from '../../core/models/personnel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import * as _ from 'lodash';
import { NgbActiveModal, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CalendarEvent } from 'angular-calendar';
import { DatePipe } from '@angular/common';
import { DatepickerAdapterService } from '../../ui/services/datepicker-adapter.service';
import { VisitEditComponent } from '../visit/visit-edit.component';

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

  currentDateModel = new Date();
  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  @ViewChild('ownerForm') form: any;

  submitted = false;

  model2 = new Date();

  get today() {
    return new Date();
  }

  constructor(private activeModal: NgbActiveModal, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.modelCopy = _.clone(this.model);
  }

  selectToday() {
    this.model2 = new Date();
  }

  onSegmentClick(event) {
    // Wyszukaj wizytę z event.date
    const ccc = event;
    const modal = this.modalService.open(VisitEditComponent, { size: 'lg' });
    modal.componentInstance.editMode = false;
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
