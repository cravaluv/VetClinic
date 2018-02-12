import { Component, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { OwnerService } from '../../core/services/owner.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Personnel, Role } from '../../core/models/personnel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import * as _ from 'lodash';
import { NgbActiveModal, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CalendarEvent } from 'angular-calendar';
import { DatePipe } from '@angular/common';
import { DatepickerAdapterService } from '../../ui/services/datepicker-adapter.service';
import { VisitEditComponent } from '../visit/visit-edit.component';
import { CommonService } from '../../core/services/common.service';
import { PersonnelService } from '../../core/services/personnel.service';

@Component({
  selector: 'app-personnel-edit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './personnel-edit.component.html',
})
export class PersonnelEditComponent implements OnInit {

  @Input() model: Personnel;
  @Input() editMode = true;
  @Input() roles: Role[] = [];

  modelCopy: Personnel;

  view = 'day';

  currentDateModel = new Date();
  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  @ViewChild('ownerForm') form: any;

  submitted = false;

  get today() {
    return new Date();
  }

  constructor(private activeModal: NgbActiveModal, private modalService: NgbModal,
    private commonService: CommonService, private personnelService: PersonnelService) {
  }

  ngOnInit(): void {
    this.editMode ? this.modelCopy = _.clone(this.model) : this.modelCopy = new Personnel();
    const ccc = this.modelCopy;
  }


  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      if (this.editMode) {
        this.personnelService.update(this.modelCopy).subscribe(
          res => {
            this.activeModal.close(this.modelCopy);
          },
          err => {
            console.log("Error occured");
          }
        );
      } else {
        this.personnelService.addPersonnel(this.modelCopy).subscribe(
          res => {
            this.activeModal.close(this.modelCopy);
          },
          err => {
            console.log("Error occured");
          }
        );
      }
    }
  }

  onDismiss() {
    this.activeModal.dismiss();
  }
}
